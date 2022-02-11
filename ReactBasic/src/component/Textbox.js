import React, { Component } from 'react';
import TextBoxChild from './TextBoxChild';
class TextBox extends Component{
    constructor()
    {
        super();
        this.state={FullName:"",Address:""}
    }

    onInputChange = (event)=>
    {
        let{ name ,value} = event.target;
        console.log("Input changed: ",name, "Value is: ",value);
       // this.setState({FullName:value})
       if(name==="FullName")
       {
           this.setState({FullName:value});
       }
       if(name==="Address")
       {
           this.setState({Address:value});
       }
    }
    render()
    {
        return(
            <>
            {/* <h1>{this.state.FullName}</h1> */}
            <TextBoxChild fullname={this.state.FullName} address={this.state.Address}/>
            <label>FullName:</label>
            <input type="text" name="FullName" value={this.state.FullName} onChange={this.onInputChange}/>
            {/* <h1>{this.state.Address}</h1> */}
            <label>Address:</label>
            <input type="text" name="Address" value={this.state.Address} onChange={this.onInputChange}/>
            </>
        );
    }
}


export default TextBox;