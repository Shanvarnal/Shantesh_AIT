import React, { Component } from 'react';

class BlurClass extends Component{

    onFocusHandler=(event)=>
    {
        
    }
    onBlurHandler=(event)=>
    {
        
    }
    render()
    {
        return(
            <>
                <label>FirstName</label>
                <input type="text" onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}/>
            </>
        );
    }
}

export default BlurClass;