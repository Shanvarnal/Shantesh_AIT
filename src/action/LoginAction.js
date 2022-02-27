const LoginAction = function(cnt1,ctn2)
{
    console.log("action is called");
    return {type:'INPUT-CHANGE', payload:{loginflag:cnt1,dashboardflag:ctn2}}
}

export default LoginAction;