import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai';
import './EmptyCart.css';
import LoginStore from '../store/LoginStore';
import axios from 'axios';

function Cart(props) {

    const [address, setAddress] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [pdata, setPdata] = useState([]);
    const pval = localStorage.getItem('pid');
    const [pID, setPID] = useState(pval);
    console.log("pid", pID);
    const uval = JSON.parse(localStorage.getItem('userID'));
    const [user, setUSer] = useState(uval);
    console.log("user", user);
    const [tamount, setTamount] = useState();
    const navigate = useNavigate();

    // const getData = async () => {
    //     const response = await axios.get("http://localhost:4000/cart/all");
    //     console.log("cartlist: ", response.data);
    //   let data=response.data.filter((item)=>{
    //       if(item.userID===user)
    //       {
    //           console.log(item.userID);
    //           setUSer(item.userID);
    //           setPID(item.product);
    //       }

    //   })
    // }

    const getPData = async () => {
        const response = await axios.get("http://localhost:4000/product/all");
        console.log("productlist: ", response.data);

        let val = response.data.filter((item) => {

            let result = pID.includes(item._id);
            console.log("resultFilt:", result);
            if (result === true) {
                return item;
            }
        });

        console.log("filterData: ", val)
        let rs=0;
        val.map((i)=>{
             rs=rs+i.price;
        })
        setTamount(rs)
        setPdata(val);

    }

    useEffect(() => {

        // getData();
        getPData();
        // localStorage.removeItem('pid');
       
    }, [pID]);

    const calAmount = () => {
        
    //    return rs;
    }

    const onPlus = (para1) => {
        return (para1);
    }

    const onMinus = (para1) => {
        return (para1);
    }


    const onContinue = () => {
        navigate("/");
    }

    const onOrder = () => {
        // if (address !== "" && phoneNum !== "")
        let arr=[]
        pdata.map((item)=>{
            let obj1 = { productOID: item._id, quantity: 1 };
            arr.push(obj1);
        })
        console.log("orderarry",arr);
        let obj1 = {userID:user,product: arr,totalAmount:tamount,address:address,phone:phoneNum};
        console.log("order",obj1);
        axios.post("http://localhost:4000/order/create",obj1 ).then(res => {
            console.log(res.data.message);
              navigate("/order");
    });
    }

    const onCancel = () => {
        setAddress("");
        setPhoneNum("");
    }

    const onPrdoctRemove = (para, para1) => {
        console.log("pidx: ", para);
        let obj = para1;
        console.log("obj", obj);
        pdata.splice(para, 1);
        setPdata(pdata);
        let obj1 = { productOID: obj._id, quantity: 1 }
        console.log("obj1", obj1);

        console.log("includes", pID.includes());
        let id = pID.indexOf(obj._id);
        let rst = pID.slice(1, id - 15);
        console.log("rst", rst);
        let rst1 = pID.slice(id + 41);
        console.log("rst1", rst1);
        console.log("consct", rst.concat(rst1));
        let arr1 = [(rst.concat(rst1))]
        localStorage.removeItem('pid');
        localStorage.setItem('pid', JSON.stringify(arr1));
        setTimeout(() => {
            navigate('/cart');
        }, 200);
        navigate('/cart');
    }

    console.log("pdata:-", pdata)
    return (
        <>
            {pID && tamount>0 ?
                <div className='eCart'>
                    <h4 className='eH52 '> My Cart <AiOutlineShoppingCart /> </h4>
                    <div className='col-6  bg-light  cartGrid'>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    {/* <th>QTY</th> */}
                                    <th>Rate</th>
                                    {/* <th>Toatl Amount</th> */}
                                </tr>
                                {pdata.length > 0 ? pdata.map((item, idx) => {
                                    return (
                                        <>
                                      
                                        <tr >
                                            <td >{item.productName}</td>
                                            {/* <td><button className='mr-1px' onCLick={() => onPlus(item)}>+</button>{item.quantity}<button className='ml-1px' onCLick={() => onMinus(item)}>-</button></td> */}
                                            <td>₹ {item.price}</td>
                                            {/* <td>₹ {calAmount(item.price, 1)}</td> */}
                                            <td><AiOutlineDelete className='delIcon' onClick={() => onPrdoctRemove(idx, item)} /></td>
                                        </tr>
                                        
                                        </>

                                    );
                                }) : null}
                                <tr>
                                    <td colSpan={4}>TotalAmount = ₹ {tamount}</td>
                                </tr>
                            </tbody>
                        </table>
                      
                    </div>
                    <div className='Orderinput1' >
                        <input type="text-area" placeholder='Address' className='orderInput bg-light' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='Orderinput2'>
                        <input type="Number" placeholder='Phone Number' className='orderInput bg-light' value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                    </div>
                    <div className='ctnDiv'>
                        <button className='onPlace btn btn-success' onClick={onOrder} >Place Order</button>
                        <button className='onPlace btn btn-danger' onClick={onCancel} >Cancel</button>
                    </div>
                </div> :
                <div className='eCart'>
                    <AiOutlineShoppingCart className='cartIcon' />
                    <h4 className='eH5 '>Empty cart..! </h4>
                    <div className='ctnDiv'>
                        <button className='onContinue' onClick={onContinue} >Continue Shopping</button>
                    </div>

                </div>
            }

        </>
    );
}

export default Cart;