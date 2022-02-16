import React from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';

import Dashboard from './Dashboard';
import ClientData from './ClientData';
import ClientApi from './ClientApi';
import VendorData from './VendorData';
import ClientDetails from './ClientDetails';
import ClientApiDetails from './ClientApiDetails';
import VendorApi from './VendorApi';
import Error from './Error';

function DemoRouter(){

    return(
        <>
       {/* <div className="text-center"><h5>Routing</h5></div> */}
            <Router>
                <div className="row">
                    <div className="col-md-2 m-">
                        <ul>
                            <li className="m-2"><Link to="/">Dashboard</Link></li>
                            <li className="m-2"><Link to="/client">Client </Link></li>
                            <li className="m-2"><Link to="/vendor">Vendor </Link></li>
                            <li className="m-2"><Link to="/clientapi">ClientApi </Link></li>
                            <li className="m-2"><Link to="/vendorapi">VendorApi </Link></li>

                        </ul>
                    </div>
                    <div className="col-md-10">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/client" element={<ClientData/>}/>
                            <Route path="/client/:id/:name" element={<ClientDetails/>}/>
                            <Route path="/vendor" element={<VendorData/>}/>
                            <Route path="/clientapi" element={<ClientApi/>}/>
                            <Route path="/clientapi/:id" element={<ClientApiDetails/>}/>
                            <Route path="/vendorapi" element={<VendorApi/>}/>
                            <Route path="/*" element={<Error/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        
        </>
    );

}

export default DemoRouter;
