import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderCss.css';
// import{ ReactNavbar } from 'overlay-navbar';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {ImSearch} from'react-icons/im';
import ProductContent from './ProductContent';
import LoginStore from '../store/LoginStore';
import axios from 'axios';

function Home(props) {
const navigate = useNavigate();
const uval=localStorage.getItem('userID');
console.log("uval",uval)
const aval=JSON.parse(localStorage.getItem('admin'));
 const [user,setUSer]=useState(uval);
const [admin,setAdmin]=useState(aval);
const [loginFlag,setLoginFlag]=useState(true);
const [searchData,setSearchData]=useState("");
const [dashboardFlag,setDashboardFlag]=useState(true);
const [pdata, setPdata] = useState([]);

localStorage.setItem('searchData',JSON.stringify(searchData));
// console.log("user:",user);
const getData = async () => {
  const response = await axios.get("http://localhost:4000/product/all");
  console.log("productlist: ", response);
  setPdata(response.data);
}

useEffect(()=>{
  getData();

  let Result = LoginStore.getState();
  // console.log("result: ",Result);
  if(Result!=null)
  {
    if(Result.loginFlagValue===false )
    {
    setLoginFlag(false);
    }
    if(Result.dashboardFlagValue===false )
    {
      setDashboardFlag(false);
    }
  }

  
 
},[])

const onLoginClick=()=>{
  navigate("/login");
}

// const onSearchChange=()=>{
//   console.log("Searchadata",searchData);

//   let val= pdata.filter((item) => {   
//     let result=item.productName;
//    console.log("resultFilt:",result);
//    if(result===searchData)
//    {
//        return item;
//    }
// });

// console.log("filterData: ",val)
// setPdata(val);
// }

const onSelectHandler=(event)=>
    {
        let {value,options,selectedIndex}=event.target;
        let temp=options[selectedIndex].text;
            console.log(temp);
            if(temp==="Product")
            {
                navigate("/product");
            }
            if(temp==="User")
            {
                navigate("/user");
            }
            if(temp==="MR")
            {
                navigate("/mr");
            }
    }

const onCartClick=()=>{
  navigate("/cart");
}

const onuserNameClick=()=>{
  localStorage.removeItem('userID');
  localStorage.removeItem('admin');
  localStorage.removeItem('pid');
  setAdmin(false);
  navigate("/");
}

  return (
  <>
    <div className='navbar'>
        <div className='leftside'>
          <div className='navbarlogo'>
            <h1 >E-Cart</h1>
          </div>
        </div>
        <div className='center'>
            <input type="text" placeholder="Search..." onChange={(e) => setSearchData(e.target.value)}/>
            {/* <button>Search</button> */}
            {/* <ImSearch className='search' onClick={onSearchChange}/> */}
        </div>
        <div className='rightside'>
          {uval===null?   <button className='navIcon1' onClick={onLoginClick} >Login</button>
           : <button className='navIcon1' onClick={onuserNameClick} >{uval}</button>}
         {admin  ?   <select className='dropBtn'  onChange={onSelectHandler}>
           <option key="select">DashBoard</option>
               <option key="Product">Product</option>
               <option key="User">User</option>
               {/* <option key="Sales">Sales</option> */}
               <option key="MR">MR</option>
           </select> :null}
       
       <AiOutlineShoppingCart className='navIcon2' onClick={onCartClick}  />
        </div>
      </div>
      <div className='container'>
        <ProductContent parameter={searchData} />
      </div>
  </>
  )
}


export default Home;