import React from 'react';
import { useParams } from 'react-router-dom';
function ClientDetails()
{
    const { id, name } = useParams();
    return(
        <>
            <h5 className='bg-success text-white w-75 h-75  p-3'>Selected Client Id : {id}  :  Client Name  : {name}</h5>
        </>
    )
}

export default ClientDetails;