import React, { Component } from 'react';

class Student2 extends Component{
    constructor()
    {
        super();
        this.state={studentData:{id:"",sname:"",marks:"",grade:"",add:""},
    studentDetails:[],showAlert:false,alertMsg:"",bgclass:"",showDeleteAlert:false,
    updateAlert:false,selectedIndex:-1};
   
    }

    onChangeHandler=(e)=>
    {
        let {name,value}=e.target;
        let{ studentData }=this.state;
        this.setState({studentData:{...studentData,[name]:value}});
        console.log(this.state.studentData);
    }
    
    onFromSubmit=(e)=>
    {
        e.preventDefault();
        let{studentData,studentDetails,showAlert,alertMsg,bgclass,updateAlert,selectedIndex}=this.state;
        if(studentData.id!=="" && studentData.sname!=="" && studentData.marks!=="" && studentData.add!=="" )
        {
            if(studentData.marks>=85)
                {
                    studentData.grade="A";
                    this.setState({studentData:studentData});
                }
                else  if(studentData.marks>=70 && studentData.marks<85)
                {
                    studentData.grade="B";
                    this.setState({studentData:studentData});
                }
                else  if(studentData.marks>=58 && studentData.marks<70)
                {
                    studentData.grade="C";
                    this.setState({studentData:studentData});
                }
                else  if(studentData.marks>=45 && studentData.marks<58)
                {
                    studentData.grade="D";
                    this.setState({studentData:studentData});
                }
                else{
                    studentData.grade="Fail";
                    this.setState({studentData:studentData});
                }
            if(updateAlert===false)
            {
            //this.setState({studentData:studentData});
             console.log("submit",studentData);
                //claculateGrade(studentData.marks);
                
                //this.setState({studentData:studentData});
                console.log("grade",studentData);
               
                    studentDetails.push(studentData);
                    this.setState({studentDetails:studentDetails})
                    // console.log("Details: ",studentDetails);
                    console.log("sub: ",this.state.studentDetails);
                    showAlert=true;
                    alertMsg="Data Registred SuccessFully..!"
                    bgclass="bg-success text-white"
                    this.setState({showAlert:showAlert,alertMsg:alertMsg,bgclass:bgclass});
              
               
            }
            else{
                studentDetails[selectedIndex]=studentData;
                this.setState({studentDetails:studentDetails})
                console.log("sub: ",this.state.studentDetails);
                showAlert=true;
                alertMsg="Data Updated SuccessFully..!"
                bgclass="bg-success text-white"
                this.setState({showAlert:showAlert,alertMsg:alertMsg,bgclass:bgclass});
            }
        
        }
        else{
            showAlert=true;
                alertMsg="Please fill all inputs..!"
                bgclass="bg-danger text-white"
                this.setState({showAlert:showAlert,alertMsg:alertMsg,bgclass:bgclass});
        
        }
        
    }

    onDeleteHandler=(index)=>
    {
        let{showDeleteAlert,selectedIndex}=this.state;
        showDeleteAlert=true;
        selectedIndex=index;
        this.setState({showDeleteAlert:showDeleteAlert,selectedIndex:selectedIndex});
    }
    onYesClick=()=>
    {
        let{studentDetails,showDeleteAlert,selectedIndex}=this.state;
        studentDetails.splice(selectedIndex,1);
        showDeleteAlert=false;
        this.setState({studentDetails:studentDetails,showDeleteAlert:showDeleteAlert});
    }

    onNoClick=()=>
    {
        this.setState({showDeleteAlert:false});
    }

    onUpdateHandler=(index)=>
    {
        let{studentDetails,selectedIndex,studentData,updateAlert}=this.state;
        updateAlert=true;
        selectedIndex=index;
        let std=studentDetails[index];
        console.log("std: ",std);
        studentData.id=std.id;
        studentData.sname=std.sname;
        studentData.marks=std.marks;
        studentData.add=std.add;
        console.log("studData: ",studentData);
        this.setState({updateAlert:updateAlert,selectedIndex:selectedIndex,studentData:studentData});

    }

    render()
    {
        return(
            <>
            <div className="row">
            <div className='col-4 bg-secondary text-white border border-dark m-5 p-3'>
            <h3 className='bg-primary text-white '>Student Data</h3>
            {this.state.showAlert ? <span className={this.state.bgclass}>{this.state.alertMsg}</span>:null}
            <form className='formGroup' onSubmit={this.onFromSubmit}>
                        <label>Student Id:</label><br/>
                        <input type="text" className='form-control' name="id" value={this.state.studentData.id} onChange={this.onChangeHandler}/><br/>
                        <label>Student Name:</label><br/>
                        <input type="text" className='form-control' name="sname" value={this.state.studentData.sname} onChange={this.onChangeHandler}/><br/>
                        <label>Marks:</label><br/>
                        <input type="text" className='form-control' name="marks" value={this.state.studentData.marks} onChange={this.onChangeHandler}/><br/>
                        <label>Address:</label><br/>
                        <input type="text" className='form-control' name="add" value={this.state.studentData.add} onChange={this.onChangeHandler}/><br/>
                    <input type="submit" className='btn btn-success'/><br/>
                    </form>
            </div>
            
            <div className='col-6  bg-light border border-dark m-3 p-3'>
                {this.state.showDeleteAlert?
                <div className='border border-dark m-2 p-2'>
                    <h2 >Do you want to delete record?</h2>
                    <button className='btn btn-danger m-3' onClick={this.onYesClick}>Yes</button>
                    <button className='btn btn-success' onClick={this.onNoClick}>No</button>
                </div> : null}
                <h3  className='bg-primary text-white '>Student Details</h3>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>Address</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        {this.state.studentDetails.map((data,idx)=>{
                            return(
                            <tr key={idx} className={data.grade+"grade"}>
                                <td>{data.id}</td>
                                <td>{data.sname}</td>
                                <td>{data.marks}</td>
                                <td>{data.grade}</td>
                                <td>{data.add}</td>
                                <td><button className='btn btn-info' onClick={()=>this.onUpdateHandler(idx)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={()=>this.onDeleteHandler(idx)}>Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </div>
            </>
        );
    }
}

export default Student2;