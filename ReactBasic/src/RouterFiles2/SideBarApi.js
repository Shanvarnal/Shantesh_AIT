import React ,{useState,useEffect}from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../RouterFiles/Dashboard';

function SideBarApi()
{
    const[altMsg,setAltMsg]=useState(true);
    let sideData="";
    let menu1='';
    const [link1,setLinkone]=useState("")
    const [link2,setLinktwo]=useState("")
    const [link3,setLinkThree]=useState("")
    const [link4,setLinkFour]=useState("")
    const [link5,setLinkFive]=useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        let temp="";

        setTimeout(()=>{
            setAltMsg(false);
            menu1=sideData[0].menuName;
            setLinkone(menu1.Dashboard);
            setLinktwo(menu1.Employee);
            setLinkThree(menu1.Admin);
            setLinkFour(menu1.Setting);
            setLinkFive(menu1.Logout);
            console.log("side",link1);

        },3000);

        axios.get("http://localhost:4001/SidebarApi").then(response=>{
            console.log("sideapi",response.data);
            sideData=response.data;
        })
        
    },[])
   



    return(
        <>
        <div className='row m-3 text-white'>
            <div className='col-4'>
                 <h5 className='bg-primary'>Dashboard</h5>
                 {altMsg?<h4 className='bg-success'>Login SuccessFully...!</h4>:null}
                 <ul>
                     <li> <button className='bg-warning m-2 ' ><Link to={link1}>Dashboard</Link></button></li>
                     <li>  <button className='bg-warning m-2 ' ><Link to={link2}>Employee</Link></button></li>
                     <li>  <button className='bg-warning m-2 ' ><Link to={link3}>Admin</Link></button></li>
                     <li><button className='bg-warning m-2 ' ><Link to={link4}>Setting</Link></button></li>
                     <li><button className='bg-warning m-2 ' ><Link to={link5}>LogOut</Link></button></li>
                 </ul>
    
            </div>
        </div> 
        </>
    )
}

export default SideBarApi;