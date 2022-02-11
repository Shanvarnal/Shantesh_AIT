import React, { Component } from 'react';
import UserDetails from './UserDetails';

function User()
{
    return(
        <>
            <h1>This is User</h1>
            <UserDetails userRole="Admin"/>
        </>
    );
}

export default User;

