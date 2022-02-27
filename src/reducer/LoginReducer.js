const LoginReducer  = function(state, action)
{
    console.log("reducer is called");
    switch(action.type)
    {
        case 'INPUT-CHANGE':
            return {...state, loginFlagValue : action.payload.loginflag,dashboardFlagValue : action.payload.dashboardflag};
        default :
            return null;
    }
    
}

export default LoginReducer;