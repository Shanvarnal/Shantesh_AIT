import React, { Component } from 'react';

class StateUse extends Component{
    constructor(props)
    {
        super();
        this.state={fristState:"This is my first state", changeText:"This is Our Offer."}
    }

    onSubscribe=()=>{
        let {changeText}=this.state;
        changeText="Thank you for subscribe..!"
        this.setState({changeText:changeText})
    }

    render()
    {
        let {fristState}=this.state;
        return(
            <>
                <hr></hr>
                <h1>{this.state.fristState}</h1>
                <h1>{fristState}</h1>
                <h1>{this.state.changeText}</h1>
                <button onClick={this.onSubscribe}>Subscribe</button>
                <hr></hr>
            </>
        );
    }

}

export default StateUse;