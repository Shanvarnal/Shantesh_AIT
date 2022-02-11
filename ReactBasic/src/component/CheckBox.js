import React,{Component} from "react"

class CheckBox extends Component{
    constructor(){
        super();
        this.state={trnchecked:false};
    }
    onCheck=()=>{
        let { trnchecked }=this.state;
        this.setState({trnchecked:!trnchecked}); //second trnc is above from let
       
    }

    render()
    {
        let { trnchecked }=this.state;
        return(
            <>
            Training: <input type="checkbox" checked={trnchecked}/>
            <button onClick={this.onCheck}>Check</button>
            </>
        );
    }
}

export default CheckBox;