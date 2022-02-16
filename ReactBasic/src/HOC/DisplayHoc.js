import React,{useState} from 'react';
import DisplayDeatilsHoc from './DisplayDeatilsHoc';

export default function DisplayHoc(){

    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const upadteVal = (val1)=>{
        console.log("onupdate at Display", val1);

        setValue1(val1);

    }
    
    const onClickHandler=(val1)=>{
        console.log("onupdate at Display", val1);
        setValue2(val1);
    }

    return(
        <>
        <h5>Display1 : {value1}</h5>
        <h5>Display2 : {value2}</h5>
            <DisplayDeatilsHoc onUpdate={upadteVal} onClick={onClickHandler} />
        </>
    );
}