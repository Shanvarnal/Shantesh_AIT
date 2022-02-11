import React, { Component } from 'react';
import ChildSignup from './ChildSignup';
class Signup extends Component{
    constructor()
    {
        super();
        this.state={username:"",password:"", showNotify:false}
    }

    onChangeHandler=(event)=>
    {
        let{name,value}=event.target;
        console.log(name,value);
        if(name==='username')
        {
            this.setState({username:value});
        }
        if(name==='password')
        {
            this.setState({password:value});
        }
    }
    onCLickHandler=()=>
    {
        this.setState({showNotify:true})
    }
    render()
    {
        let { username,password }=this.state;
        return(
            <>
            <div className='form-group'>
                <label>Username:</label>
                <input type="text" className='from-control' name="username" value={username} onChange={this.onChangeHandler}/>
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input type="password" className='from-control' name="password" value={password} onChange={this.onChangeHandler}/>
            </div> 
            <div className='form-group'>
                <button onClick={this.onCLickHandler}>Submit</button>
            </div> 
                {this.state.showNotify ? <ChildSignup username={username} password={password}/> :null}
               
            </>
        );
    }
}


export default Signup;