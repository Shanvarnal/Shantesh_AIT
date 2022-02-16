import logo from './logo.svg';
 import './App.css';
import Cal from './Assignments/Calculator' 
import ClientRecord from './Assignments/ClientData';
import Demo from './Assignments/Demo';
import Student2 from './Assignments/Student2';
import Curd from './Assignments/Curd';
import Client from './Assignments/Client';
import Drop from './Assignments/Drop';
import CssDrop from './Assignments/CssDrop';
import Product from './Assignments/Product';
import Employee from './API/Emp';
import AddEmployee from './API/Emp2';
import UpdateEmployee from './API/UpdateEmp';
import Vendor from './API/Vendor';
import BasicRouter from './RouterFiles/BasicRouter';
import DemoRouter from './RouterFiles/DemoRouter';
import EmployeeApi from './RouterFiles/EmployeeApi';
import MainRouter from './RouterFiles2/MainRouter';
import DisplayHoc from './HOC/DisplayHoc';
import ClientHoc from './HOC/ClientHoc';
import VendorHoc from './HOC/VendorHoc';
import AddEmployeeReducer from './AddEmployeeReducer';
function App() {
  return (
    <div className="App">
      {/* <Cal/>*/}
      {/* <Demo/> */}
      {/* <Client/> */}
      {/* <Curd/> */}
      {/* <Student/> */}
      {/* <Student2/>*/}
      {/* <ClientRecord/>  */}
      {/* <Drop/>  */}
      {/* <CssDrop/> */}
      {/* <Product/> */}
      {/* <Employee/> */}
      {/* <AddEmployee/> */}
      {/* <UpdateEmployee/>
      <Vendor/> */}
      {/* <BasicRouter/> */}
      {/* <DemoRouter/> */}
      {/* <EmployeeApi/> */}
      {/* <hr></hr> */}
      {/* <MainRouter/> */}
      <DisplayHoc/>
      <ClientHoc/>
      <VendorHoc/>
      <AddEmployeeReducer/>
     </div>
     
  );
}

export default App;
