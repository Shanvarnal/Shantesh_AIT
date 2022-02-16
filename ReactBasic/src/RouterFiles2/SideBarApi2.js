import React ,{useState,useEffect}from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../RouterFiles/Dashboard';
import Dashboard2 from './Dashboard2';
import Setting from './Setting';
import Admin from './Admin';
import ClientData from '../RouterFiles/ClientData';
function SideBarApi2()
{
    const[altMsg,setAltMsg]=useState(true);
    const[sideData,setSideData]=useState({});
    const navigate = useNavigate();
    let temp="";
    let menu="";
    let link="";
    const [menu1,setMenuone]=useState("")
    const [menu2,setMenutwo]=useState("")
    const [menu3,setMenuThree]=useState("")
    const [menu4,setMenuFour]=useState("")
    const [menu5,setMenuFive]=useState("")

    const [link1,setLinkone]=useState("")
    const [link2,setLinktwo]=useState("")
    const [link3,setLinkThree]=useState("")
    const [link4,setLinkFour]=useState("")
    const [link5,setLinkFive]=useState("")
    useEffect(()=>{
       

        setTimeout(()=>{
            setAltMsg(false);
            console.log("sideapi2",sideData);
        },3000);

        axios.get("http://localhost:4001/SidebarApi").then(response=>{
            console.log("sideapi",response.data);
            temp=response.data;
           console.log("temp",temp);
           menu=temp[0].menuName;
           link=temp[0].menuLink;
           setMenuone(menu[0]);
           setMenutwo(menu[1]);
           setMenuThree(menu[2]);
           setMenuFour(menu[3]);
           setMenuFive(menu[4]);

           setLinkone(link[0]);
           setLinktwo(link[1]);
           setLinkThree(link[2]);
           setLinkFour(link[3]);
           setLinkFive(link[4]);
           
        })
        
    },[])
   
    // const  onLogout=()=>{
        
    //     navigate("/");
    //     }


    return(
        <>
        <div className='row m-3 text-white'>
            <div className='col-4'>
                 <h5 className='bg-primary'>Welcome to SideBar Menu</h5>
                 {altMsg?<h4 className='bg-success'>Login SuccessFully...!</h4>:null}
               <ul>
                     <li><button className='bg-warning m-2 ' ><Link to={link1}>{menu1}</Link></button></li>
                     <li> <button className='bg-warning m-2 ' ><Link to={link2}>{menu2}</Link></button></li>
                     <li> <button className='bg-warning m-2 ' ><Link to={link3}>{menu3}</Link></button></li>
                     <li><button className='bg-warning m-2 ' ><Link to={link4}>{menu4}</Link></button></li>
                     <li><button className='bg-warning m-2 ' ><Link to={link5}>{menu5}</Link></button></li>
                 </ul>
            </div>
            <div className='col-7 ml-10 '>
                 {/* <button className='bg-warning  ' onClick={onLogout}>LogOut</button> */}
                 {/* <Router>
                     <Routes>
                        <Route path="/dashboard2" element={<Dashboard2 />} />
                        <Route path="/employee" element={<ClientData />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/setting" element={<Setting/>} />
                        </Routes>

                </Router>  */}
            </div>
        </div> 
        </>
    )
}

export default SideBarApi2;