import React, { useState, useEffect } from 'react';
import axios from 'axios';
import products from './products';
import './productContentCss.css';
import { useNavigate } from 'react-router-dom';
import LoginStore from '../store/LoginStore';
import LoginAction from '../action/LoginAction';

function ProductContent(props) {

    console.log("productList", products);
    const [pdata, setPdata] = useState(products);
    const [cData, setCData] = useState([]);
    console.log("pdata:", pdata);
    const [loginFlag, setLoginFlag] = useState();
    const navigate = useNavigate();

    
    // const [pSearch, setPSearch] = useState(psrch);
   

    const uval = localStorage.getItem('userID');
    const [user, setUSer] = useState(JSON.parse(uval));

    const [cobj, setcobj] = useState();
    const [cuserCdata, setCuserCdata] = useState([]);
    const [objID, setObjID] = useState("");
    const [pid, setPid] = useState([]);

    const getData = async () => {
        const response = await axios.get("http://localhost:4000/product/all");
        console.log("productlist: ", response);
        setPdata(response.data);
    }

    // const getCData = async () => {
    //     const response = await axios.get("http://localhost:4000/cart/all");
    //     console.log("cartlist: ", response);
    //     // setCData(response.data);
    //     let val = response.data.filter((item) => {

    //         if (item.userID === user) {
    //             return item;
    //         }
    //     });

    //     console.log("filterCartData: ", val)
    //     setCData(val);
    // }

    

    useEffect(() => {

        getData();
        // getCData();

        let psrch = JSON.parse(localStorage.getItem('searchData'));
        if(psrch!=='')
        {
            console.log("pesearch:", psrch);
            let val = pdata.filter((item) => {
                let result = item.productName;
                console.log("resultFilt:", result);
                if (result === psrch) {
                    return item;
                }
            });
    
            console.log("filterSaerch: ", val)
            setPdata(val);
            navigate('/');
        }
       
    }, []);

    const onAddToCart = (para1) => {

        console.log("cData", cData);
        console.log("prod", para1);
        setObjID(para1._id);

        if (user === null) {
            alert("please login");
        }
        else {

            console.log("cData", cData);
            if (cData.length > 0) {
                let arr1 = cData[0].product;
                console.log("arr1", arr1);
                let flag = false;
                arr1.filter((item) => {
                    if (item.productOID !== para1._id) {
                        flag = true;
                    }
                });
                if (flag === true) {

                    axios.delete("http://localhost:4000/cart/deleteCart/" + cData[0]._id).then(res => {

                        console.log("delete product: ", res.data.message);
                    });

                    let obj = { productOID: para1._id, quantity: 1 }
                    arr1.push(obj);
                    console.log("new Pids:", arr1);
                    localStorage.setItem('pid', JSON.stringify(arr1));

                    let objcart={userID:user,product:arr1} 
                    console.log(objcart) ;              
                    axios.post("http://localhost:4000/cart/create/",objcart).then(res => {

                        console.log(res.data.message);
                    });

                    // getCData();
                }
                else {
                    console.log("product allready exist");
                }

            }
            else {

                let arr1 = pid;
                let obj = { productOID: para1._id, quantity: 1 }
                arr1.push(obj);
                console.log("new Pids:", arr1);
                let objcart = { userID: user, product: arr1 }
                setcobj(objcart);
                console.log("new obj:", objcart);
                // axios.post("http://localhost:4000/cart/create/", objcart).then(res => {

                //     console.log(res.data.message);
                // });
                localStorage.setItem('pid', JSON.stringify(arr1));
                // getCData();
            }
        }
    }
console.log("filt-data",pdata);
    return (
        <>
            <div className='main-content'>
                <h3 className='productTitle'>Products </h3>

                {pdata.map((item) => {
                    return (
                        <div className='card col-12 col-sm6 col-lg-4 mb_80' key={item.id}>
                            <div className='pro'>
                                <img src={item.img} />
                            </div>
                            <div className='des'>
                                <h5>{item.productName}</h5>
                                <span>{item.discription}</span>
                                <h4 >₹ {item.price}</h4>
                                {item.status ? <button className='btn1 btn btn-success' onClick={() => onAddToCart(item)}>Add to cart</button> :
                                    <button className='btn btn-danger btn2'>Out Of Stock</button>}
                            </div>
                        </div>
                    );


                })}


            </div>

        </>

    );
}

export default ProductContent;