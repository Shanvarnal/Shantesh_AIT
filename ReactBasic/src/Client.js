import React,{ Component }from 'react';
import './App.css';

class Client extends Component{
    constructor()
    {
        super();
        this.state={
            ClientData:[{id:101,name:"ABC Pvt Ltd",add:"Pune",shares:"10%"},
            {id:102,name:"BBC Pvt Ltd",add:"Pune",shares:"50%"},
            {id:103,name:"KBC Pvt Ltd",add:"Pune",shares:"70%"},
            {id:104,name:"MBC Pvt Ltd",add:"Pune",shares:"60%"},
            {id:105,name:"DBC Pvt Ltd",add:"Pune",shares:"50%"},
            {id:106,name:"CBC Pvt Ltd",add:"Pune",shares:"80%"}],
            sharesDetail:"Not have any shares"
        }
        this.onClickStatus=this.onClickStatus.bind(this);

    }

    onClickStatus(parameter){
        this.setState({sharesDetail:parameter});
        console.log(parameter)
    }
    render(){
        return(
            <>
            {/* <h1>Shares Details:{this.state.sharesDetail}</h1> */}
            <table className='table table-striped' id='table1'>
                <caption><b>Shares Details:{this.state.sharesDetail}</b></caption>
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

export default Client
