import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const data=[{id:101,name:"Vendor1",moNum:89756646,status:"Active"},
{id:102,name:"Vendor2",moNum:89756646,status:"DeActive"},
{id:103,name:"Vendor3",moNum:89756646,status:"Active"},
{id:104,name:"Vendor4",moNum:89756646,status:"DeActive"},
{id:105,name:"Vendor5",moNum:89756646,status:"Active"},
{id:106,name:"Vendor6",moNum:89756646,status:"DeActive"},
{id:107,name:"Vendor7",moNum:89756646,status:"Active"}];

function VendorData (){
    const[vendorArr,setVendorArr]=useState(data);

    return(
        <>
         <div className='col-8 border border-dark m-5 p-3 bg-light '>
       <h3 className='bg-primary text-white'>Vendor List</h3>
       <table className='table table-bordered  '>
           <tbody>
                <tr>
                  <th>Vendor Id</th> 
                  <th>Vendor Name</th> 
                  <th>Mobile Number</th> 
                  <th>Status</th>  
                </tr>
                {vendorArr.map((data,idx)=>
                {
                    return(
                        <tr key={idx}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.moNum}</td>
                            <td>{data.status}</td>
                        </tr>
                    )
                })}
           </tbody>
       </table>
       </div>
      
        </>
    );
}

export default VendorData;