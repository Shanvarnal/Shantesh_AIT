import React, { Component } from 'react';


class Employee extends Component{
    constructor()
    {
        super();
        this.state={empid:101,empName:"Shan",empSalary:55000}
    }

    render()
    {
        return(
            <>
                <p>{this.state.empid}</p>
                <p>{this.state.empName}</p>
                <p>{this.state.empSalary}</p>
            </>
        );
    }
}

export default Employee;