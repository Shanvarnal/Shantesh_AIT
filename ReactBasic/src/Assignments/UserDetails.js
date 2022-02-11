import React, { Component } from 'react';

function UserDetails(props)
{
    return(
        <>
            <h1>This is UserDetails</h1>
            <h2>Role: {props.userRole}</h2>
        </>
    );
}

export default UserDetails;