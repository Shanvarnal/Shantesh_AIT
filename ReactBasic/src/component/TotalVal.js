import React, { Component } from 'react';

class TotalVal extends Component{
    constructor()
    {
        super();
        this.state={total:0}
    }

    onTotalChange=(temp)=>
    {
        let{total}=this.state;
        total=total+temp;
        this.setState({total:total});
        console.log(total,"temp: ",temp)
    }
    render()
    {
        return(
            <>
            <h2>{this.state.total}</h2>
            <button onClick={()=>this.onTotalChange(10)}>10</button>
            <button onClick={()=>this.onTotalChange(20)}>20</button>
            <button onClick={()=>this.onTotalChange(30)}>30</button>
            <button onClick={()=>this.onTotalChange(40)}>40</button>
            <button onClick={()=>this.onTotalChange(50)}>50</button>
            </>
        );
    }
}

export default TotalVal;