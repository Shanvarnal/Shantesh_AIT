import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
function ClientApi(){

    const [clientData,setClientData]=useState([]);
    const [loading,setLoading]=useState(true);
    const[trFlag1,setTrFlag1]=useState(false);
    const[val,setVal]=useState(-1);

    useEffect(()=>{
        if(loading)
        {
        axios.get("http://localhost:4003/Client").then(response => {
            setClientData(response.data);
            console.log("cdata",response.data);
        })

        setLoading(false);
    }

    });

    const onSubmit=(para)=>
    {
        // setTrFlag1(true);
        setVal(para);
    }

    return(
        <>
          <div className='col-8 border border-dark m-5 p-3 bg-light '>
       <h3 className='bg-primary text-white'>Client List</h3>
       <table className='table table-bordered  '>
           <tbody>
                <tr>
                  <th>Client Id</th> 
                  <th>Client Name</th> 
                  {/* <th>Mobile Number</th> 
                  <th>Address</th>   */}
                </tr>
                {clientData.map((data,idx)=>
                {
                    return(
                        <>
                        
                        <tr key={idx}>
                            <td>{data.id}</td>
                            <td>{data.clientName}</td>
                            {/* <td>{data.contctno}</td>
                            <td>{data.area}</td> */}
                            <td><Link className='btn btn-info' to={`/clientapi/${data.id}`}>Select</Link></td>
                            <td><button className='btn btn-info' onClick={()=>onSubmit(idx)}>Info</button></td>
                        </tr>
                        { val==idx?
                            <tr className='bg-warning' >
                            <td>{data.contctno}</td>
                            <td>{data.area}</td>
                            </tr>
                            :null
                       }

                    </>
                    )
                })}
           </tbody>
       </table>
       </div>
        </>
    );
}

export default ClientApi;