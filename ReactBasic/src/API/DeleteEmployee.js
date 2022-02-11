import React, { Component } from 'react';
import axios from 'axios';
class ListEmployee extends Component {
    constructor()
    {
        super();
        this.state = {Employees:[]};
    }
    componentDidMount() {     
        axios.get("http://localhost:4000/Employee").then(response => {
            this.setState({ Employees: response.data });
        })
    }
    onDelete = (eid)=>{
        axios.delete("http://localhost:4000/Employee/" + eid).then(resp=>{
            console.log("Delete ", resp);
        })
    }
    render() {
        let {  Employees } = this.state;
      return(
          <>
          <h5>Delete a Employee </h5>
             <table className="table">
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Delete</th>
                </tr>
                {Employees.map((item, idx) => {
                    return (
                        <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.employeeName}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td><button className="btn btn-danger" onClick={()=>this.onDelete(item.id)}>Delete</button></td>
                            </tr>)
                })}                
            </tbody>
        </table>
          </>
      )
    }
}
export default ListEmployee
