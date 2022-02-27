import React, { useState, useEffect } from 'react';
import ADPDCTStore from '../store/ADPDCTStore';
import ADPDCTAction from '../action/ADPDCTAction';
import AddProduct from './AddProduct';
import axios from 'axios';


function User() {


    const [pdata, setPdata] = useState([]);
    const [objID, setObjID] = useState();
    const [userName, setuserName] = useState("");
    const [userID, setuserID] = useState("");
    const [password,setPassword]=useState("");
    const [admin, setadmin] = useState(false);
    const [status, setStatus] = useState('');
    const [mesg, setMsg] = useState("");
    const [wmesg, setWMsg] = useState("");


    const getData = async () => {
        const response = await axios.get("http://localhost:4000/user/all");
        console.log("user: ", response);
        setPdata(response.data);
    }

    useEffect(() => {

        getData();

    }, []);


    const onSubmitDetails = () => {
        console.log(userName, "--", userID, "--", admin, "--", status);
        console.log("objID:", objID);

      
        if (objID === "") {

            if (userName && userID && password && status) {
                let obj = { userName, userID, password, status, admin };
                axios.post("http://localhost:4000/user/create", obj).then(res => {
                    if (res.data.message === "user allrearady registerd") {
                        setWMsg(res.data.message);
                    }
                    else {
                        setMsg(res.data.message);
                        console.log(res.data.message);
                    }
                    getData();
                });
            }

        }
        else {
            let obj = { objID,userName,password, userID, status, admin };
            axios.put("http://localhost:4000/user/update/", obj).then(res => {

                    console.log(res.data.message);

                getData();
            });

        }


        setuserName('');
        setuserID('');
        setPassword('');
        setadmin(false);
        setStatus('');
    }

    const onCancle = () => {
        setuserName('');
        setuserID('');
        setadmin(false);
        setStatus('');
        setPassword('');
    }

    const onEdit = (para1, para2) => {
        console.log("edit:", para1);
        setObjID(para1._id);
        setuserName(para1.userName);
        setuserID(para1.userID);
        setPassword(para1.password);
        setadmin(para1.admin);
        setStatus(para1.status);
    }

    const onDelete = (para1, para2) => {

        let obj =para1._id;
        console.log("deleteOBJ: ",obj);
        axios.delete("http://localhost:4000/user/deleteUser/"+para1._id).then(res => {

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
                                <h4 className=' m-3'>Add Product Page</h4>
                                <div >
                                    <input type="text" placeholder='User Name' className='name' value={userName} onChange={(e) => setuserName(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text-area" placeholder='UserID ' className='name' value={userID} onChange={(e) => setuserID(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='password ' className='name' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <input type="text" placeholder='status ' className='name' value={status} onChange={(e) => setStatus(e.target.value)} />
                                </div>
                                <div className='second-input'>
                                    <label className='labesTags'>Admin:</label> <input type='checkbox' checked={admin} onChange={(e) => setadmin(e.target.checked)} />
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
                            <th>User Name</th>
                            <th>UserID</th>
                            <th>Status</th>
                            <th>Admin</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {pdata.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.userName}</td>
                                    <td>{item.userID}</td>
                                    <td>{item.status}</td>
                                    <td><input type='checkbox' checked={item.admin} onChange={(e) => setStatus(e.target.checked)} /> </td>
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

export default User;