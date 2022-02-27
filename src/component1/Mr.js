import React, { useState, useEffect } from 'react';
import ADPDCTStore from '../store/ADPDCTStore';
import ADPDCTAction from '../action/ADPDCTAction';
import AddProduct from './AddProduct';
import axios from 'axios';


function Mr() {
    const data = [{ producName: "Laptop", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Mobile", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Samsung", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "MacBook", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Lenovo", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Realme", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Apple", discription: "8 GB Ram", price: "25000", status: "true" }];

    const [pdata, setPdata] = useState(data);
    const [suplierName, setSuplierName] = useState("");
    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [mrNo, setMrNo] = useState("");
    const [objID, setObjID] = useState("");
    const [date, setDate] = useState("");
    const [mesg, setMsg] = useState("");
    const [wmesg, setWMsg] = useState("");
    const [img,setImg] = useState("https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg");
    localStorage.setItem('mr',JSON.stringify(5));
    // console.log("objID1",objID);
    const getData = async () => {
        // const response = await axios.get("http://localhost:4000/product/all");
        // console.log("productlist: ", response);
        // setPdata(response.data);
    }

const mrGenrate=(para)=>{
    let val= localStorage.getItem('mr');
    console.log("val",val)
    let mr=Math.floor(Math.random())*101+para+val;
    mr=mr*10/2;
    setMrNo(mr);
    localStorage.setItem('mr',JSON.stringify(mr));
}

    useEffect(() => {

        getData();
        let today=new Date();
        let month=today.getMonth()+1;
        let date=today.getDate();
        let year=today.getFullYear();
        let fdate=`${date}-${month}-${year}`;
        setDate(fdate);
        mrGenrate(Math.ceil(Math.random()));
    }, []);

    // const amountCal=(para1,para2)=>{
    //     console.log("amt",para1,para2);
    //     if(para1!=='' && para2!=='')
    //     {
    //         let amt=para1*para2
    //         setAmount(amt);
    //         return amt;
    //     }
      
    // }

    const onSubmitDetails = () => {

        let obj={mrNo:mrNo,date:date,suplierName:suplierName,productID:productID, 
            productName:productName, quantity:quantity,  price:price, amount:amount}; 
        console.log("objData",obj);

        axios.post("http://localhost:4000/mr/create", obj).then(res => {

            // setWMsg(res.data.message);
            console.log(res.data.message);
            getData();

        });
        

        // setSuplierName('')
        // setProductName('');
        // setQuantity('');
        // setPrice('');
        // setAmount('');
        
        mrGenrate(Math.ceil(Math.random()));

    }

    const onCancle = () => {
        setSuplierName('')
        setProductName('');
        setQuantity('');
        setPrice('');
      
    }

    const onEdit = (para1, para2) => {

        console.log("edit:", para1);
        // setObjID(para1._id);
        // setProductID(para1.productID);
        // setProductName(para1.productName);
        // setDiscription(para1.discription);
        // setPrice(para1.price);
        // setImg(para1.img);
        // setStatus(para1.status);
    }

    const onDelete = (para1, para2) => {
       
        let obj =para1._id;
        console.log("deleteOBJ: ",obj);
        axios.delete("http://localhost:4000/product/deleteProduct/"+para1._id).then(res => {

            setWMsg(res.data.message);
            console.log(res.data.message);
            getData();

        });
    }
    // console.log("mr",mrNo);
    return (
        <>

            <div className=''>
                <div className='mrsmain'>
                    <div className='mrssub-main'>
                        <div>
                            <div>
                                <h4 className=' mb-3 mt-3'>Add Product Page</h4>
                                <h5>Mr No: {mrNo}</h5>
                                <h5>Mr Date: {date}</h5>
                                <div >
                                    <input type="text" placeholder='Supplier Name' className='name' value={suplierName} onChange={(e) => setSuplierName(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='Product-ID' className='name' value={productID} onChange={(e) => setProductID(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='Product Name' className='name' value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text-area" placeholder='Quantity ' className='name' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='Price ' className='name' value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                 <label className='labesTags'>Amount = {quantity*price} </label> 
                                </div>
                                <div className='loginButton'>
                                    <button className='proBtn1' onClick={onSubmitDetails}>Submit</button>
                                    <button className='proBtn2' onClick={onCancle}>Cancle</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className=' col-6 border border-dark bg-light  p-3 pTable'>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Product Name</th>
                            <th>Discription</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {pdata.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.productName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td> {item.amount} </td>
                                    <td><button className="btn btn-info" onClick={() => onEdit(item, idx)}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => onDelete(item, idx)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> */}

        </>
    );
}

export default Mr;