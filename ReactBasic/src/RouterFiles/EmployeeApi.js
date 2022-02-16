import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Employee(){

    const [empData,setEmpData]=useState([]);
    const[loading,setLoading]=useState(true);

    const getRefresh=()=>{

        axios.get("http://localhost:4000/Employee").then(response=>{
            console.log(response.data);
            setEmpData(response.data);
        })
    }
    useEffect(()=>{
        if(loading)
        {
            getRefresh();
        }

        setLoading(false);
    });

const onUpdate=()=>{

}

const onDelete=()=>{

}

    return(
        <>
        <div className='col-7 border border-dark bg-light m-3 p-2'>
            <h3 className='bg-primary text-white'>Employee Detail List</h3>
            <table className='table table-bordered'>
                <tbody>
                    <tr className='bg-secondary text-white'>
                        <td>Employee ID</td>
                        <td>Employee Name</td>
                        <td>Employee ID</td>
                        <td>Employee ID</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                    {empData.map((data,idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{data.id}</td>
                                <td>{data.employeeName}</td>
                                <td>{data.address}</td>
                                <td>{data.city}</td>
                                <td><button className='btn btn-info' onClick={onUpdate}>update</button></td>
                                <td><button className='btn btn-danger' onClick={onDelete}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );

}

export default Employee;