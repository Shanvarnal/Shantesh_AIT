import React,{useState,useEffect} from 'react';
import axios from 'axios';

const SignUpAction = function(cnt1,cnt2,cnt3)
{
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

    console.log("action is called");
    return{type:'INPUT-CHANGE', payload:{userName:cnt1,userID:cnt2,password:cnt3}}
    
}

export default SignUpAction;