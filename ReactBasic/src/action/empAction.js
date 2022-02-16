// Action name AddEmployee
const AddEmp = function(Emp)
{
    console.log("action is performed");
    return {type:'ADD-EMPLOYEE', payload :Emp}
}

export default AddEmp;