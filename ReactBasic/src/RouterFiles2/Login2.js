import React ,{useState,useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [altMesg, setAltMesg] = useState();
    const [altflag, setAltFlag] = useState(false);
    const [loginData, setLoginData] = useState([]);
    const [sideBarApiData, setSideBarAPiData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:4000/Admin").then(response=>{
            console.log(response.data);
            setLoginData(response.data);
        })
        axios.get("http://localhost:4001/SidebarApi").then(response=>{
            console.log(response.data);
            setSideBarAPiData(response.data);
        })
    },[])

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log("loginval", userName,password);
        console.log("status",sideBarApiData[0].status);
        loginData.map((data)=>{
        if(data.userID===userName && data.password===password && data.status!==sideBarApiData[0].status)
        {
            navigate("/dashboard");
        }
        else if(data.userID===userName && data.password===password && data.status===sideBarApiData[0].status)
        {
            navigate("/sidebarapi2");
        }
        else{
            setAltMesg("Invalid credentials..!");
            setAltFlag(true);
            setTimeout(() => {
                setAltFlag(false);
             }, 3000);
        }

       })
    }

return(
    <>
        <div className=' col-4 m-5 p-2 bg-secondary text-white  border border-dark'>
        <form onSubmit={onSubmit}>
                <h5 className='bg-primary '>Login</h5>   
                 {altflag?<h4 className='bg-danger'>{altMesg}</h4>:null} 
                <div className="form-group">
                    <label >User Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)} /><br></br>
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} /><br></br>
                    <button className='btn btn-success' type="submit">Submit</button>
                </div>
            </form>
        </div>
        
    </>
);
}

export default Login;