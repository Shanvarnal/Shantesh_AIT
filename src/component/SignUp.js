import React,{useState} from 'react';
import './SignUp.css';
import SignUpStore from '../store/SignUpStore';
import SignUpAction from '../action/SignUpAction';
import SignUpAPIAction from '../action/SignUPApiAction';
import { useNavigate } from 'react-router-dom';
import profile from './Images/user.jpg';
import uID from './Images/msg.jpg';
import pass from './Images/lock.png';
import axios from 'axios';

function SignUp(){
    const [userName,setUserName]=useState("");
    const [userID,setUserID]=useState("");
    const [password,setPassword]=useState("");
    const [status,setStatus]=useState("Active");
    const [admin,setAdmin]=useState(false);
    const navigate = useNavigate();
    const [mesg,setMsg]=useState("");
    const [wmesg,setWMsg]=useState("");
    
    const onSubmitDetails=()=>{
        console.log(userName,"--",userID,"--",password);
       if(userName && userID && password)
       {
        let obj={userName,userID,password,status,admin};
        axios.post("http://localhost:4000/user/create",obj).then(res=>{
            if(res.data.message==="user allrearady registerd")
            {
                setWMsg(res.data.message);
            }
            else{
                setMsg(res.data.message);
                console.log(res);
            }
           
        });
       }
       else{
        setWMsg("Invalid Inputs");
       }
        // SignUpStore.dispatch(SignUpAction(userName,userID,password)); 
        // // SignUpStore.dispatch(SignUpAPIAction());
        // let Result = SignUpStore.getState();
        // console.log("result: ",Result);
        
        setUserName('');
        setUserID('');
        setPassword('');
        // navigate("/");
    }

   

    return(
        <>
        <div className='main'>
            <div className='sub-main'>
                <div>
                    <div>
                        <h1>SignUp Page</h1>
                        {mesg !==""? <h5 className='mesg'>{mesg}</h5>:<h5 className='bg-danger text-white'>{wmesg}</h5>}
                        <div>
                            <img src={profile} alt="userName" className='email'/>
                            <input type="text" placeholder='User Name ' className='name' value={userName}  onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                        <div className='second-input'>
                            <img src={uID} alt="userID" className='email'/>
                            <input type="text" placeholder='User ID ' className='name' value={userID}  onChange={(e)=>setUserID(e.target.value)}/>
                        </div>
                        <div className='second-input'>
                            <img src={pass} alt="password" className='email'/>
                            <input type="password" placeholder='Password ' className='name'  value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className='loginButton'>
                            <button  className='loginBtn' onClick={onSubmitDetails}>Submit</button>
                        </div>
                           
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignUp;