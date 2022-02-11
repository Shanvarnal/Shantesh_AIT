import React, { Component } from 'react';

import axios from 'axios';

class UpdateEmployee extends Component{

    constructor(){
        super();
        this.state={employeeData:[],employee:{id:"",employeeName:"",address:"",city:""},alertMessage:"",selectedIndx:''}
    }  

    componentDidMount(){
       
        axios.get("http://localhost:4000/Employee/").then(response => {
            this.setState({ employeeData: response.data });
            console.log(response.data);
        })
    }
    
    onDDlChange=(e)=>{
        let { value } = e.target;
        console.log(value);
        let{employeeData,employee}=this.state;
       // console.log(employeeData[value]);
        if(value>0)
        {
            let emp=employeeData[value-1];
            // employee.id=emp.id;
            // employee.employeeName=emp.employeeName;
            // employee.address=emp.address;
            // employee.city=emp.city;
            this.setState({employee:emp});
        }
       
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let { employee } = this.state;
        this.setState({employee:{...employee,[name]:value}});
        console.log("emp",employee);
       
    }

    onUpdate=(idx)=>{
        let{employeeData,employee}=this.state;
        let emp=employeeData[idx-1];
        this.setState({employee:emp});
    }

    onDelete = (eid)=>{
        axios.delete("http://localhost:4000/Employee/" + eid).then(resp=>{
            console.log("Delete ", resp);
        })
    }

    onFromSubmit = (e)=>
    {
        e.preventDefault();
        const { employee } = this.state;
        const URL = " http://localhost:4000/Employee/" + employee.id;
        axios.put(URL, this.state.employee).then(response=>{
            console.log(response);
            if(response.statusText === "OK")
            {
                this.setState({alertMessage:'Record updated successfully.'});
            }
            
        });
    }
   render(){
         let{employeeData,employee,alertMessage}=this.state;
       return(
           <>
                <select className='m-3' onChange={this.onDDlChange} >
                    <option value="0">--Select--</option>
                {employeeData.map((item,idx)=>{
                    return (
                        <option key={idx} value={item.id}>{item.employeeName}</option>
                    )
                })}
                </select>
                <div className='row'>
                 <div className="col-3 bg-secondary text-white border border-dark m-5 p-5 ">
                    <h5 className=' bg-primary'>Employee Data Entry</h5>
                    <h4 className='alert-success '>{alertMessage}</h4>
                   <form className='formGroup' onSubmit={this.onFromSubmit}>
                        <label>Employee Id:</label><br/>
                        <input type="text" className='form-control' name="id" value={employee.id} onChange={this.onChangeHandler}/><br/>
                        <label>Employee Name:</label><br/>
                        <input type="text" className='form-control' name="employeeName" value={employee.employeeName} onChange={this.onChangeHandler}/><br/>
                        <label>Address:</label><br/>
                        <input type="text" className='form-control' name="address" value={employee.address} onChange={this.onChangeHandler}/><br/>
                        <label>City:</label><br/>
                        <input type="text" className='form-control' name="city" value={employee.city} onChange={this.onChangeHandler}/><br/>
                    <input type="submit" className='btn btn-success'/><br/>
                    </form>
                </div>

                <div className='col-6 bg-light text-white border border-dark m-5 p-5'>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            {employeeData.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                         <td>{item.id}</td>
                                        <td>{item.employeeName}</td>
                                        <td>{item.address}</td>
                                         <td>{item.city}</td>
                                         <td><button className="btn btn-info" onClick={()=>this.onUpdate(item.id)}>Update</button></td>
                                         <td><button className="btn btn-danger" onClick={()=>this.onDelete(item.id)}>Delete</button></td>
                                     </tr>)
                            })}                
                        </tbody>
                    </table>
                </div>

                </div>
           </>
       )
   }  

} 


export default UpdateEmployee;