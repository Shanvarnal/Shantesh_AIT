import React, { useState, useEffect } from 'react';
import './Login.css';
import profile from './Images/user1.jpg';
import uID from './Images/msg.jpg';
import pass from './Images/lock.png';
import SignUpStore from '../store/SignUpStore';
import SignUpAPIAction from '../action/SignUPApiAction';
import { useNavigate } from 'react-router-dom';
import LoginStore from '../store/LoginStore';
import LoginAction from '../action/LoginAction';
import axios from 'axios';

function Login(props) {
    const [userID, setUserID] = useState("");
    const [userID1, setUserID1] = useState("");
    const [password, setPassword] = useState("");
    // const [admin,setAdmin]=useState(false);
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();
    const [mesg,setMsg]=useState("");
    const [wmesg,setWMsg]=useState("");

    useEffect(() => {
        // SignUpStore.dispatch(SignUpAPIAction());
        console.log("api", SignUpStore.getState());
        
    }, [])

    const onSubmitDetails = () => {
        console.log(userID, "--", password);

        if(userID && password)
        {
         let obj={userID,password};
         localStorage.setItem('userID',JSON.stringify(userID));

         axios.post("http://localhost:4000/login/create",obj).then(res=>{

             if(res.data.message==="userID not available.")
             {
                 setWMsg(res.data.message);
             }
             else{
                let obj1=res.data;
                console.log(obj1);
                if(obj1.admin===false)
                {
                    let admin=obj1.admin;
                    localStorage.setItem('admin',JSON.stringify(admin));
                    console.log(res);
                    props.setUSer(userID);
                    navigate("/");
                }
                else{
                    // setMsg("SuccessFully Login.");
                    let admin=obj1.admin;
                    localStorage.setItem('admin',JSON.stringify(admin));
                    console.log(res);
                    props.setUSer(userID);
                    props.setAdmin(true);
                    navigate("/");
                }
                
             }
            
         });
        }
        else{
         setWMsg("Invalid Inputs");
        }

        setUserID('');
        setPassword('');
        // let Result = SignUpStore.getState();
        // console.log("result: ", Result);

        // if (userID === "ShanVarnal" && password === "Shan@123") {
        //     console.log("Successfull")
        //     LoginStore.dispatch(LoginAction(loginflag,dashboardflag));
        //     let Result = LoginStore.getState();
        //     console.log("result: ", Result);
        //     navigate("/user");
        // }
        // else {
        //     console.log("error")
        //     setFlag(true);
        //     setAlert("Invalid Credentials")
        // }
    }

    const onSignUpClick = () => {
        navigate("/signup");
    }


    return (
        <>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-img'>
                                <img src={profile} alt="userProfile" className='profile' />
                            </div>
                        </div>
                        <div>
                            <h1>Login Page</h1>
                            {mesg !==""? <h5 className='mesg'>{mesg}</h5>:<h5 className='bg-danger text-white'>{wmesg}</h5>}
                           
                            <div >
                                <img src={uID} alt="userID" className='email'/>
                                <input type="text" placeholder='User ID ' className='name' value={userID} onChange={(e) => setUserID(e.target.value)} />
                            </div>
                            <div className='second-input'>
                                <img src={pass} alt="password" className='email'/>
                                <input type="password" placeholder='Password ' className='name' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='loginButton'>
                                <button className='loginBtn' onClick={onSubmitDetails}>Login</button>
                            </div>
                            <p className='para'>
                                {/* <a href='#'>Forgot Password?</a>     */}
                                <a href='#' onClick={onSignUpClick}>Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;