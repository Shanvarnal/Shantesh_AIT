import React,{useState} from 'react';

export default function DisplayDeatilsHoc(props){
    const [value1, setValue1] = useState(0);
    const onDispDetUpdate=()=>{
        const value=10;
        setValue1(value1+value)
        props.onUpdate(value1);
    }

    const onDispDetClick=()=>{
        const value=10*2;
        setValue1(value1+value)
        props.onClick(value1);
    }

    return(
        <>
            <h5>DisplayDeatilsHoc Page</h5>
            <button className='btn btn-primary m-2' onClick={onDispDetUpdate}>Click Update</button>
            <button className='btn btn-primary' onClick={onDispDetClick}>Click ClickEvent</button>
        </>
    );
}