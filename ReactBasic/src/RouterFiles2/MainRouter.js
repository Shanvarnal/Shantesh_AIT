import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import ClientData from '../RouterFiles/ClientData';
import Dashboard from '../RouterFiles/Dashboard';
import Admin from './Admin';
import Login from './Login';
import Login2 from './Login2';
import Setting from './Setting';
import SideBarApi from './SideBarApi';
import SideBarApi2 from './SideBarApi2';
import Dashboard2 from './Dashboard2';
function MainRouter(){
return(
    <>
    <Router>
         <Routes>
         {/* <Route path="/" element={<Login />} /> */}
         <Route path="/" element={<Login2 />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboard2" element={<Dashboard2 />} />
         <Route path="/employee" element={<ClientData />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/setting" element={<Setting/>} />
         <Route path="/sidebarapi" element={<SideBarApi />} />
         <Route path="/sidebarapi2" element={<SideBarApi2 />} />
         </Routes>

    </Router> 
    </>  
);
   
}

export default MainRouter;