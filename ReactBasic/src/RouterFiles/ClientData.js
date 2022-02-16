import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const data=[{id:101,name:"ABC PVt LTD",moNum:89756646,area:"New Delhi"},
{id:102,name:"ABC1 PVt LTD",moNum:89756646,area:"Mumbai"},
{id:103,name:"ABC2 PVt LTD",moNum:89549964,area:"New Delhi"},
{id:104,name:"ABC3 PVt LTD",moNum:98644755,area:"Mumbai"},
{id:105,name:"ABC4 PVt LTD",moNum:78456886,area:"Pune"},
{id:106,name:"ABC5 PVt LTD",moNum:67894475,area:"Pune"},
{id:107,name:"ABC6 PVt LTD",moNum:78954585,area:"Pune"}];

function ClientData (){
    const[clientArr,setClientArr]=useState(data);
    const[trFlag1,setTrFlag1]=useState(false);
    const[val,setVal]=useState(-1);
    const onSubmit=(para)=>
    {
        setTrFlag1(true);
        setVal(para);
    }


    return(
        <>
         <div className='col-8 bg-light border border-dark m-5 p-3'>
       <h3 className='bg-primary text-white'>Client List</h3>
       <table className='table table-bordered  '>
           <tbody>
                <tr>
                  <th>Client Id</th> 
                  <th>Client Name</th> 
                  {/* <th>Mobile Number</th> 
                  <th>Address</th>   */}
                </tr>
                {clientArr.map((data,idx)=>
                {
                    return(
                        <>
                       
                        <tr key={idx}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            {/* <td>{data.moNum}</td>
                            <td>{data.area}</td> */}
                            {/* <td><Link className='btn btn-info' to={`/client/${data.id}/${data.name}`}>Select</Link></td> */}
                            <td><button className='btn btn-info' onClick={()=>onSubmit(idx)}>Select</button></td>
                        </tr>
                       {trFlag1 && val==idx?
                            <tr >
                            <td>{data.moNum}</td>
                            <td>{data.area}</td>
                            </tr>
                            :null
                       }
                           </>
                    );
                   
                })}

                   
                
           </tbody>
       </table>
       </div>
      
        </>
    );
}


export default ClientData;