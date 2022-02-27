const ADPDCTReducer  = function(state, action)
{
    console.log("reducer is called");
    switch(action.type)
    {
        case 'INPUT-CHANGE':
            return {...state, objValue : action.payload.obj};
        default :
            return null;
    }
    
}

export default ADPDCTReducer;