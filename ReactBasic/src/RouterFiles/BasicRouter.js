import React from 'react';
import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom';

import Demo from '../Assignments/Demo';

function BasicRouter(){

    return(
        <>
        <h5>Routing</h5>
        <BrowserRouter>
        <Routes> 
           <Route path="demo" element={<Demo/>}/>
        </Routes>
        </BrowserRouter>
        
        </>
    );

}

export default BasicRouter;

