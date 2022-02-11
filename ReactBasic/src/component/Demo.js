import React,{Component} from "react"

class DemoSample extends Component{
    constructor(){
        super();
        this.state={
        ClientData:[{id:101,name:"ABC Pvt Ltd",add:"Pune",shares:"10%"},
        {id:102,name:"BBC Pvt Ltd",add:"Pune",shares:"50%"},
        {id:103,name:"KBC Pvt Ltd",add:"Pune",shares:"70%"},
        {id:104,name:"MBC Pvt Ltd",add:"Pune",shares:"60%"},
        {id:105,name:"DBC Pvt Ltd",add:"Pune",shares:"50%"},
        {id:106,name:"CBC Pvt Ltd",add:"Pune",shares:"80%"}],
        sharesDetail:"Not have any shares",
        verfyDelete:false,
        selectedIndex:-1,
        // id:'',cname:"",adds:"",shares:"",
       clientInputData:[{id:'',cname:"",adds:"",shares:""}]
            }

        this.onClickStatus=this.onClickStatus.bind(this);
        // this.assureDelete=this.assureDelete.bind(this);

    }

    onClickStatus(parameter){
        this.setState({sharesDetail:parameter});
        console.log(parameter)
    }

    assureDelete=(indxParameter)=>{
        // let { ClientData }=this.state;
        // ClientData.splice(indxParameter,1);
        // this.setState({ClientData});
         this.setState({verfyDelete:true,selectedIndex:indxParameter})
        console.log("calling alert popup")
        console.log(indxParameter)
    }
    onClickYes=()=>
    {
        let{ClientData}=this.state;
        ClientData.splice(this.state.selectedIndex,1);
        console.log("Clicked on Yes Button")
        this.setState({ClientData,verfyDelete:false})
    }

    onClickNo=()=>{
        this.setState({verfyDelete:false})
        console.log("clicked on No button")
    }
    onChangeHandler=(event)=>{
        let{name,value}=event.target;
      //  console.log(name,value);
      let {clientInputData}=this.state;
        if(name==='id')
        {
            this.setState({id:value})
        }
        if(name==='cname')
        {
            this.setState({cname:value})
        }
        if(name==='adds')
        {
            this.setState({adds:value})
        }
        if(name==='shares')
        {
            this.setState({shares:value})
        }
    }
    onSubmitHandler=()=>
    {
       let {clientInputData}=this.state;
         console.log(clientInputData);
        // let{ClientData}=this.state;
        // ClientData.push(obj);
        // console.log(ClientData)
        // this.setState({ClientData:ClientData})
    }
    render(){
        return(
            <>
            <div className="col-md-8">
                <div className='form-group'>
                    <label>Client ID:</label>
                    <input type="text" className='from-control' name="id" value={this.state.clientInputData.id} onChange={this.onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Client Name:</label>
                    <input type="text" className='from-control' name="cname" value={this.state.clientInputData.cname} onChange={this.onChangeHandler}/>
                </div> 
                <div className='form-group'>
                    <label>Address:</label>
                    <input type="text" className='from-control' name="adds" value={this.state.clientInputData.adds} onChange={this.onChangeHandler}/>
                </div> 
                <div className='form-group'>
                    <label>Shares:</label>
                    <input type="text" className='from-control' name="shares" value={this.state.clientInputData.shares} onChange={this.onChangeHandler}/>
                </div> 
                <div className='form-group'>
                    <button onClick={this.onSubmitHandler}>Submit</button>
                </div> 

            </div>
            {this.state.verfyDelete ?
            <div className="col-md-8">
            <h2>Do you want to delete?</h2>
            <button className='btn btn-info mr-3' onClick={this.onClickYes}>Yes</button>
            <button className="btn btn-info " onClick={this.onClickNo} >No</button>
            </div> : null
            }
            
            <h2>Shares Details:{this.state.sharesDetail}</h2>
            <table className='table table-striped' >
            <tbody>
                <tr>
                    <th>ClientId</th>
                    <th>ClientName</th>
                    <th>Address</th>
                    <th>Check Shares Info</th>
                </tr>
                {
                   this.state.ClientData.map(
                       (data, index)=>{
                           return(
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.add}</td>
                                <td><button className='btn btn-info' onClick={()=>this.onClickStatus(data.shares)}>Check</button></td>
                                <td><button className="btn btn-danger" onClick={()=>this.assureDelete(index)}>Delete</button></td>
                            </tr>
                           );
                       }
                   )  
                }
                
            </tbody> 
        </table>       
        </>
        );
    }
}

export default DemoSample;