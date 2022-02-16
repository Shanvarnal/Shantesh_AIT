import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard()
{
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            setAltMsg(false);

        },3000);

    },[])
    const[altMsg,setAltMsg]=useState(true);
    const  onLogout=()=>{
        
        navigate("/");
        }

    return(
        <>
        <div className='row m-3 text-white'>
            <div className='col-4'>
                 <h5 className='bg-primary'>Dashboard</h5>
                 {altMsg?<h4 className='bg-success'>Login SuccessFully...!</h4>:null}
            </div>
            <div className='col-3 ml-10 '>
                 <button className='bg-warning  ' onClick={onLogout}>LogOut</button>
            </div>
        </div> 
        </>
    )
}

export default Dashboard;