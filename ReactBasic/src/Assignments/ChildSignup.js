import React, { Component } from 'react';
class ChildSignup extends Component{
    constructor(props)
    {
        super();
        this.state={msg:""}
    }

    render()
    {
        let {username,password}=this.props;
        // let{msg}=this.state;
        // msg='Login SuccessFull..!';
        // if(username==="shan" && password==="Shan123")
        // {
        //     this.setState({msg:msg});
        // }
        //  console.log(msg);
        return(
            <>
            {(username==="shan" && password==="Shan123")?<h3 className='text-success'>Success</h3>:<h3 className='text-danger'>Failed</h3>}
            
            <div className='bg-danger text-white '>
            <h3 >{username.length ? null:"Please enter Username"}</h3>
            <h3  >{password.length>=4 ? null:"Password must be 4 char."}</h3>
            <h3  >{password.length>9 ? "Password must be between 4-9 char.":null}</h3>
            </div>
            
          
        
            </>
         );  
    }
}  

export default ChildSignup;