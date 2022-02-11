
import React from 'react';
import User_Details from './User_Details'

function FetchUser(props)
{
    return(
        <>
        <h2 className="text-primary">This is My User Text</h2>
        <h1>{props.userid}</h1>
        {/* <User_Details userid="My user id is 177727"/> */}
        <hr></hr>
        <label>Enter Number</label>
        <input type={'text'}></input>
        <button className='btn btn-primary'>Add</button>
        <button className='btn btn-success'>Display</button>
        </>
    );
}

export default FetchUser;