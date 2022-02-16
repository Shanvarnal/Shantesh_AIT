import React from 'react';
// import sore to communicate or sending request to store data
import store from './store/Store';
// import action here to perfom some action
import AddEmp from './action/empAction';

const AddEmployeeReducer = ()=>{

    const onAddEmployee = ()=>{
        console.log("Employee Add Request");
        // making request to store by using dispatch inbuilt methods
        store.dispatch(AddEmp({eid:107,ename:'Shan'}));
    }
    return(
        <>
            <h5>Add Employee</h5>
            <button onClick={onAddEmployee}>Add Employee</button>
        </>
    )
}

export default AddEmployeeReducer;