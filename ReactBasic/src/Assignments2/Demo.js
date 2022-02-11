import React, {useState,useEffect} from 'react';
function Demo(){
  
    const [ filtr, setFiltr ]=useState("");
    const[id,setId]=useState("");
const onBtnClick=()=>{
    let value="Tester"
    setFiltr(value);
}
    return(
        <>
            <h1  style={{"color":"red"}}>value:{filtr}</h1>
            {/* <input type="text" name="id" value={id} onChange={onChangeHandler}/> */}
            <button onClick={onBtnClick}>Click</button>
        </>
    );
}

export default Demo;