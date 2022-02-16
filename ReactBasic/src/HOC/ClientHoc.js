import React from 'react';
import HOC from './Hoc';
const ClientFunc = ()=>{
    return(
        <>
            <h5>Client Component for Hoc</h5>
        </>
    )
}
const ClientHoc  = new HOC(ClientFunc)
export default ClientHoc;