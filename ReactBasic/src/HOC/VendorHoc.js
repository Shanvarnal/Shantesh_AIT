import React from 'react';
import HOC from './Hoc';
const VendorFunc = ()=>{
    return(
        <>
            <h5>Vendor Component for Hoc</h5>
        </>
    )
}
const VendorHoc  = new HOC(VendorFunc)
export default VendorHoc;