import React,{useState,useEffect} from 'react';
import axios from 'axios';

function VendorApi(){

    const [vendorData,setVendorData]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{

        if(loading){

            axios.get("http://localhost:4001/Vendor").then(response=>{
                console.log(response.data);
                setVendorData(response.data);
            })
        }

        setLoading(false);
    })
    return(
        <>
        <div className='col-8 border border-dark bg-light m-3 p-3'>
            <h5 className='bg-primary text-white m-2 p-2'>Vendor Detail List</h5>
            <table className='table table-bordered m-2'>
                <tbody>
                    <tr>
                        <th>Vendor ID</th>
                        <th>Vendor Name</th>
                        <th>Contact Number</th>
                        <th>Status</th>
                    </tr>
                  { vendorData.map((data,idx)=>{
                      return(
                          <tr key={idx}>
                              <td>{data.id}</td>
                              <td>{data.vendorName}</td>
                              <td>{data.contctno}</td>
                              <td>{data.type}</td>
                          </tr>
                      );
                   })
                }
                </tbody>
            </table>
        </div>
        </>
    );

}

export default VendorApi;