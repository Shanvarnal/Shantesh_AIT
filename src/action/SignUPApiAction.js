import React,{useState,useEffect} from 'react';
import axios from 'axios';

const SignUpAPIAction = function()
{
    console.log("action is called");
    const [uData,setUdata]=useState();
    
    const getData=async()=>{
        const response= await  axios.get("http://localhost:4000/user/all");
        console.log(response);
    }
    useEffect(()=>{
        
    //    axios.get("http://localhost:4000/user/all").then(response=>{
    //         console.log("api",response.data);
    //         setUdata(response.data);
    //     })
    getData();

    },[])
    return{type:'INPUTAPI-CHANGE', payload:{userData:uData}}
}

export default SignUpAPIAction;