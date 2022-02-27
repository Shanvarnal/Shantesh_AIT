import React, { useState, useEffect } from 'react';
import ADPDCTStore from '../store/ADPDCTStore';
import ADPDCTAction from '../action/ADPDCTAction';
import AddProduct from './AddProduct';
import axios from 'axios';


function ProductList() {
    const data = [{ producName: "Laptop", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Mobile", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Samsung", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "MacBook", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Lenovo", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Realme", discription: "8 GB Ram", price: "25000", status: "true" },
    { producName: "Apple", discription: "8 GB Ram", price: "25000", status: "true" }];

    const [pdata, setPdata] = useState(data);
    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState("");
    const [discription, setDiscription] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState(false);
    const [objID, setObjID] = useState("");
    const [mesg, setMsg] = useState("");
    const [wmesg, setWMsg] = useState("");
    const [img,setImg] = useState("https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg");
    
    console.log("objID1",objID);
    const getData = async () => {
        const response = await axios.get("http://localhost:4000/product/all");
        console.log("productlist: ", response);
        setPdata(response.data);
    }

    useEffect(() => {

        getData();

    }, []);


    const onSubmitDetails = () => {
        console.log(productName, "--", discription, "--", price, "--", status); 
        console.log("objID",objID);

        let obj = { objID,productID,productName, discription, price, img, status};
        console.log("objImg:",obj);

        if(objID==="")
        {
            axios.post("http://localhost:4000/product/create", obj).then(res => {

                setWMsg(res.data.message);
                console.log(res.data.message);
                getData();
    
            });
        }
        else{
            
            axios.put("http://localhost:4000/product/update/", obj).then(res => {

                setWMsg(res.data.message);
                console.log(res.data.message);
                getData();
    
            });
        }
       
        setProductID('');
        setProductName('');
        setDiscription('');
        setPrice('');
        setStatus(false);
        


    }

    const onCancle = () => {
        setProductName('');
        setDiscription('');
        setPrice('');
        setStatus(false);
    }

    const onEdit = (para1, para2) => {

        console.log("edit:", para1);
        setObjID(para1._id);
        setProductID(para1.productID);
        setProductName(para1.productName);
        setDiscription(para1.discription);
        setPrice(para1.price);
        // setImg(para1.img);
        setStatus(para1.status);
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
    return (
        <>

            <div className=''>
                <div className='productmain'>
                    <div className='productsub-main'>
                        <div>
                            <div>
                                <h4 className=' mb-3 mt-3'>Add Product Page</h4>
                                <div >
                                    <input type="text" placeholder='Product-ID' className='name' value={productID} onChange={(e) => setProductID(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='Product Name' className='name' value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text-area" placeholder='Description ' className='name' value={discription} onChange={(e) => setDiscription(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='Price ' className='name' value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <label className='labesTags'>Status:</label> <input type='checkbox' checked={status} onChange={(e) => setStatus(e.target.checked)} />
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
            <div className=' col-6 border border-dark bg-light  p-3 pTable'>
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
                                    <td>{item.discription}</td>
                                    <td>{item.price}</td>
                                    <td><input type='checkbox' checked={item.status} onChange={(e) => setStatus(e.target.checked)} /> </td>
                                    <td><button className="btn btn-info" onClick={() => onEdit(item, idx)}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => onDelete(item, idx)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default ProductList;