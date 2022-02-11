import React, { Component } from 'react';
import './Curd.css';
class Emp extends Component{
    constructor(){
        super();
        this.state={sharesDetail:"Not have any shares",
        verfyDelete:false,
        selectedIndex:-1,
         id:'',ename:"",salary:"",grade:"",
         onUpdateFlag:false,idxm:"",
        employee:[] }
        
        }
        
        onChangeHandler=(event)=>{
            let{name,value}=event.target;
          //  console.log(name,value);
            if(name==='id')
            {
                this.setState({id:value})
            }
            if(name==='ename')
            {
                this.setState({ename:value})
            }
            if(name==='salary')
            {
                this.setState({salary:value})
            }
        }
        onFromSubmit=(event)=>
        {
            event.preventDefault();
            let id=event.target.id.value;
            let ename=event.target.ename.value;
            let salary=event.target.salary.value;
            let{employee,grade,bgclass}=this.state;
            if(salary<=50000)
            {
                this.setState({grade:'D'})
            }
            if(salary>50000 && salary <=100000)
            {
                this.setState({grade:'C'})
            }
            if(salary>100000 && salary<=200000)
            {
                this.setState({grade:'B'})
            }
            if(salary>200000)
            {
                this.setState({grade:'A'})
            }
            let obj=new Object();
            setTimeout(() => {
                let{grade,onUpdateFlag,idxm}=this.state;
                
            obj.id=id;
            obj.ename=ename;
            obj.salary=salary;
            obj.grade=grade;
            //console.log(obj);
            if(!onUpdateFlag)
            { employee.push(obj);
                console.log("emp: ",employee);
                this.setState({employee:employee});
            }else{
                employee[idxm]=obj;
                this.setState({employee:employee});
            }
           

            }, 200);
           
        }
        assureDelete=(indxParameter)=>{
             this.setState({verfyDelete:true,selectedIndex:indxParameter})
            console.log("calling alert popup")
            console.log(indxParameter)
        }
        onClickYes=()=>
        {
            let{employee}=this.state;
            employee.splice(this.state.selectedIndex,1);
            console.log("Clicked on Yes Button")
            this.setState({employee,verfyDelete:false})
        }
    
        onClickNo=()=>{
            this.setState({verfyDelete:false})
            console.log("clicked on No button")
        }

        onClickUpdate=(indxParameter)=>{
            let{employee,onUpdateFlag,idxm}=this.state;
            onUpdateFlag=true;
            idxm=indxParameter;
            let emp=employee[indxParameter];
           // console.log(emp);
             let{id,ename,salary}=this.state;
             id=emp.id;
             ename=emp.ename;
             salary=emp.salary;
            // console.log(id,ename,salary);
             this.setState({onUpdateFlag:onUpdateFlag,idxm:idxm,id:id,ename:ename,salary:salary});

        }

        render(){
            return(
                <>
                <div className='row m-5 '>
                <div className="col-3 bg-secondary text-white border border-dark m-5 p-5 ">
                    <h3 className=' bg-primary'>Employee Data Entry</h3>
                   <form className='formGroup' onSubmit={this.onFromSubmit}>
                        <label>Employee Id:</label><br/>
                        <input type="text" className='form-control' name="id" value={this.state.id} onChange={this.onChangeHandler}/><br/>
                        <label>Employee Name:</label><br/>
                        <input type="text" className='form-control' name="ename" value={this.state.ename} onChange={this.onChangeHandler}/><br/>
                        <label>Salary:</label><br/>
                        <input type="text" className='form-control' name="salary" value={this.state.salary} onChange={this.onChangeHandler}/><br/>
                    
                    <input type="submit" className='btn btn-primary'/><br/>
                    </form>
                </div>
                <div className="col-8 border border-dark">
                {this.state.verfyDelete ?
                <div className='border border-dark bg-light m-2'>
                <h2>Do you want to delete?</h2>
                <button className='btn btn-info mr-5' onClick={this.onClickYes}>Yes</button>
                <button className="btn btn-info mr-5 " onClick={this.onClickNo} >No</button>
                </div> : null
                }
                <h3>Employee Details</h3>
                <table className='table table-bordered' >
                <tbody>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Salary</th>
                        <th>Grade</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {
                       this.state.employee.map(
                           (data, index)=>{
                               return(
                                <tr key={index} className={data.grade+"grade"}>
                                    <td>{data.id}</td>
                                    <td>{data.ename}</td>
                                    <td>{data.salary}</td>
                                    <td>{data.grade}</td>
                                    <td><button className='btn btn-info' onClick={()=>this.onClickUpdate(index)}>Update</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>this.assureDelete(index)}>Delete</button></td>
                                </tr>
                               );
                           }
                       )  
                    }
                    
                </tbody> 
            </table> 
            </div> 
            </div>     
            </>
            );
        }

    }
        

export default Emp;