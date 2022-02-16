import React,{useState,useEffect} from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

function ClientApiDetails()
{
    const {id } = useParams();
    const[val,setVal]=useState(id);
    const [loading,setLoading]=useState(true);
    const[data,setData]=useState({});

    useEffect(()=>{
        if(loading)
        {
        axios.get("http://localhost:4000/Client").then(response => {
            console.log("cd1data",response.data);
            let fitData=response.data.filter((i)=> i.id==val);
             setData(fitData[0]);
            console.log("value",val);
            console.log("fitData",fitData);
           
        })

        setLoading(false);
    }

    });
  

    return(
        <>
          <pre className='bg-success text-white w-75 h-85  p-3'>
              {`Selected Client Id : ${data.id}  
 Client Name:  ${data.clientName}
 Mobile Number: ${data.contctno}
 Address: ${data.area} `}</pre>
        </>
    )
}

export default ClientApiDetails;