import React, { Component } from 'react';

import axios from 'axios';

class Employee extends Component{

    constructor(){
        super();
        this.state={allDepartment:[],Employee:[],Designation:[],selectedIndx:0,selectedIndx1:0,dropflag:false,dropflag1:false};
    }

    componentDidMount(){
        axios.get("http://localhost:4000/department").then(response => {
            this.setState({ allDepartment: response.data });
            console.log(response.data);
        })
        axios.get("http://localhost:4000/employee").then(response => {
            this.setState({ Employee: response.data });
            console.log(response.data);
        })

        axios.get("http://localhost:4000/designation").then(response => {
            this.setState({ Designation: response.data });
            console.log(response.data);
        })


    }

    onDDlChange=(e)=>{
        let { value } = e.target;
        console.log(value);
        this.setState({ selectedIndx: value, dropflag:true, dropflag1:false, selectedIndx1:0});
       
    }

    onDDlChange1=(e)=>{
        let { value } = e.target;
        console.log("desg",value);
        this.setState({ selectedIndx1: value,dropflag1:true,dropflag:false,selectedIndx:0});
       
    }

    render(){
       let {allDepartment,Employee,Designation,selectedIndx,selectedIndx1,dropflag1,dropflag}=this.state;
       console.log("setedD:",allDepartment);
       console.log("setedE:",Employee);

            Employee.map((item,index)=>{
            let emp=item;
            let dptName="";
            let desName="";
            allDepartment.map((data,idx)=>{
                let dpt=data;
                // console.log("check-data",dpt);
                if(item.departmentID===dpt.id)
                {
                    dptName=dpt.departmentName;
                }
            })
            Designation.map((data,idx)=>{
                let dpt=data;
                // console.log("check-data",dpt);
                if(item.designationID===dpt.id)
                {
                    desName=dpt.designationName;
                }
            })
            emp.departmentName=dptName;
            emp.designationName=desName;
            console.log("check-emp",emp);
        })
        return(
            <>
          <div className='row'>
          <div className='col-3 border border-dark bg-secondary text-white m-3 p-3'>
            <h5 className='bg-primary'>Deparments List</h5>
            <select onChange={this.onDDlChange} name="selectedIndx" value={selectedIndx}>
                {allDepartment.map((item,idx)=>{
                    return (
                        <option key={idx} value={item.id}>{item.departmentName}</option>
                    )
                })}
            </select>
            </div>
            <div className='col-3 border border-dark bg-secondary text-white m-3 p-3'>
            <h5 className='bg-primary'>Designation List</h5>
            <select onChange={this.onDDlChange1} name="selectedIndx1" value={selectedIndx1}>
                {Designation.map((item,idx)=>{
                    return (
                        <option key={idx} value={item.id}>{item.designationName}</option>
                    )
                })}
            </select>
            </div>
          </div>
           
            <div className='col-8 m-3 p-3 border border-dark bg-light '>
                <h5 className='bg-primary text-white'>Employee Details</h5>
                    <table className="table table-borderd">
                        <tbody>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Salary</th>
                                <th>Department ID</th>
                                <th>Department Name</th>
                                <th>Designation ID</th>
                                <th>Designation Name</th>
                            </tr>
                            {Employee.map((item, idx) => {
                                return (
                                   (parseInt(selectedIndx1)===0 && parseInt(selectedIndx)===0 ? 
                                        (<tr key={idx}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.salary}</td>
                                            <td>{item.departmentID}</td>
                                            <td>{item.departmentName}</td>
                                            <td>{item.designationID}</td>
                                            <td>{item.designationName}</td>
                                        </tr>)
                                        :
                                   
                                        (dropflag?  parseInt(item.departmentID) === parseInt(selectedIndx) :
                                        parseInt(selectedIndx)===0 || dropflag1?  parseInt(item.designationID) === parseInt(selectedIndx1)  :
                                        parseInt(selectedIndx1)===0 )
                                        &&
                                            (
                                                <tr key={idx}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.salary}</td>
                                                    <td>{item.departmentID}</td>
                                                    <td>{item.departmentName}</td>
                                                    <td>{item.designationID}</td>
                                                    <td>{item.designationName}</td>
                                                </tr>
                                            )
                                   )        
                                )
                            })}
                        </tbody>
                    </table>
                </div>
           
            
            </>
        )
    }
}

export default Employee;