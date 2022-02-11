import React from 'react';

function FetchUserDetails(props)
{
    return(
        <>
        <h2 className='text-primary'>This is My User Details Text</h2>
        <h1>{props.userid}</h1>
        </>
    );
}

export default FetchUserDetails;