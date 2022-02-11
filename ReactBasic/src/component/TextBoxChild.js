import React, { Component } from 'react';

class TextBoxChild extends Component{

    constructor(props)
    {
        super();
    }

    render()
    {
        let {fullname, address}=this.props;
        return(
            <>
            <h1>{fullname.length ? fullname :"Enter Full Name"}</h1>
            <h1>{address.length ? address :"Enter Address"}</h1>
            </>
        );
    }

}

export default TextBoxChild;