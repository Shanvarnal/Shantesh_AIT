import React, { Component } from 'react';

import axios from 'axios';

class AddEmployee extends Component{

    constructor(){
        super();
        this.state={employee:{id:"",employeeName:"",address:"",city:""},statusMessage:""}
    }        


   render(){
         let{employee}=this.state;
       return(
           <>
           <div className="col-3 bg-secondary text-white border border-dark m-5 p-5 ">
                    <h5 className=' bg-primary'>Employee Data Entry</h5>
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
           </>
       )
   }  

} 


export default AddEmployee;