import React, { Component } from 'react';

class CounterChange extends Component{
    constructor()
    {
        super();
        this.state={counter:0}
    }
    addCounter=()=>
    {
        let{counter}=this.state;
        counter++;
        this.setState({counter:counter});
    }
    subCounter=()=>
    {
        let{counter}=this.state;
        if(counter>0)
        counter--;
        this.setState({counter:counter});
    }

    render()
    {
        return(
            <>
            <h1>{this.state.counter}</h1>
            <button onClick={this.addCounter}>Increase</button>
            <button onClick={this.subCounter}>Decrease</button>
            </>
        );
    }
}

export default CounterChange