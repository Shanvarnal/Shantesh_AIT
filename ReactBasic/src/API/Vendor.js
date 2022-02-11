import React, { Component } from 'react';

import axios from 'axios';

class Vendor extends Component{

    constructor(){
        super();
        this.state={vendorData:[],vflag:false,vendor:{id:"",vendorName:"",contctno:"",type:""},alertMessage:"",selectedIndx:''}
        
    }  

    componentDidMount(){
       
        axios.get("http://localhost:4001/Vendor/").then(response => {
            this.setState({ vendorData: response.data });
            console.log("vdata",response.data);
        })

    }
    callRefresh=()=>{

        axios.get("http://localhost:4001/Vendor/").then(response => {
            this.setState({ vendorData: response.data });
            console.log("call fresh",response.data);
        })

        let{vendor,alertMessage}=this.state;
        vendor.id="";
        vendor.vendorName="";vendor.contctno="";vendor.type="";
        alertMessage="";
        this.setState({vendor:vendor,alertMessage:alertMessage});
    }
    onChangeHandler = (e)=>
    {
        let {name, value,checked }= e.target;
        let { vendor } = this.state;
        this.setState({vendor:{...vendor,[name]:value}});
        console.log("emp",vendor);

        if (name === 'type') {
            value=checked;
            vendor.type = ""+value;
            this.setState({vendor});
            console.log( vendor.type);
        }
       
    }

    onUpdate=(idx)=>{
        let{vendorData,vendor,vflag}=this.state;
        let ven=vendorData[idx-1];
        this.setState({vendor:ven,vflag:true});
    }

    onDelete = (vid)=>{
        axios.delete("http://localhost:4001/Vendor/" + vid).then(resp=>{
            console.log("Delete ", resp);
            this.callRefresh();
        })

        
    }
    
    onFromSubmit = (e)=>
    {
        e.preventDefault();
        const { vendor,vflag } = this.state;
        if(vflag){

            const URL = " http://localhost:4001/Vendor/" + vendor.id;
            axios.put(URL, this.state.vendor).then(response=>{
                console.log(response);
                if(response.statusText ==="OK")
                {
                    this.setState({showMessage:'Record has been updated'});
                }
                this.callRefresh();
            });
           
          
        }
        const URL = " http://localhost:4001/Vendor/";
        axios.post(URL, this.state.vendor).then(response=>{
            console.log(response);
            if(response.statusText ==="Created")
            {
                this.setState({alertMessage:'Record inserted successfully..'});
            }
            this.callRefresh();
        });
       
        console.log(vendor);
    }
   render(){
         let{vendorData,vendor,alertMessage}=this.state;
       return(
           <>
                
                <div className='row'>
                 <div className="col-3 bg-secondary text-white border border-dark m-5 p-5 ">
                    <h5 className=' bg-primary'>Vendor Data Entry</h5>
                    <h4 className='alert-success '>{alertMessage}</h4>
                   <form className='formGroup' onSubmit={this.onFromSubmit}>
                        <label>Vendor Id:</label><br/>
                        <input type="text" className='form-control' name="id" value={vendor.id} onChange={this.onChangeHandler}/><br/>
                        <label>Vendor Name:</label><br/>
                        <input type="text" className='form-control' name="vendorName" value={vendor.vendorName} onChange={this.onChangeHandler}/><br/>
                        <label>Conatct No:</label><br/>
                        <input type="text" className='form-control' name="contctno" value={vendor.contctno} onChange={this.onChangeHandler}/><br/>
                        <label>Type: </label>
                        <input type="checkbox" className="m-3" name="type" checked={vendor.type} onChange={this.onChangeHandler} /><br/>
                        <input type="submit" className='btn btn-success'/><br/>
                    </form>
                </div>

                <div className='col-6 bg-light text-white border border-dark m-5 p-5'>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Vendor Id</th>
                                <th>Vendor Name</th>
                                <th>Contact Number</th>
                                <th>Type</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            {vendorData.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                         <td>{item.id}</td>
                                        <td>{item.vendorName}</td>
                                        <td>{item.contctno}</td>
                                         <td>{item.type}</td>
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


export default Vendor;