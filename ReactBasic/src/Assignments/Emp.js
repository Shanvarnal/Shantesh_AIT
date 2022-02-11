import React, { Component } from 'react';

class Emp extends Component{
    constructor()
    {
        super();
        this.state={empData:[{id:101,name:"Shan",salary:50000},
        {id:102,name:"Shail",salary:60000},
        {id:103,name:"Sumit",salary:100000},
        {id:104,name:"Sam",salary:300000},
        {id:105,name:"Sony",salary:150000}],
        sharesDetail:"Click on check",
        Importclass:''}
    }

   
    onClickStatus(parameter){
       if(parameter<=50000)
       {
           let{Importclass}=this.state;
           Importclass="bg-warning'"
           let val="D-"+parameter
        this.setState({sharesDetail:val, Importclass:Importclass});
       }
       if(parameter>50000 && parameter<=100000)
       {
           let val="C-"+parameter
        this.setState({sharesDetail:val});
       }
       if(parameter>100000 && parameter<=200000)
       {
           let val="B-"+parameter
        this.setState({sharesDetail:val});
       }
       if(parameter>200000)
       {
           let val="A-"+parameter
        this.setState({sharesDetail:val});
       }
      
    }
    render()
    {
        return(
            <>
            <h1 >Shares Details:{this.state.sharesDetail}</h1>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>Salary</th>
                       
                    </tr>
                    {this.state.empData.map((data,idx)=>
                    {
                        return( 
                        <tr  key={idx}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td >{data.salary}</td>
                            <td><button className={'btn btn-info' } onClick={()=>this.onClickStatus(data.salary)}>Check</button></td>
                        </tr>
                        )
                       
                    })}
                </tbody>
            </table>
            </>
        );
    }
}

export default Emp;