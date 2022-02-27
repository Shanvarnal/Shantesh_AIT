
const ADPDCTAction = function(cnt1)
{
    console.log("action is called");
    return {type:'INPUT-CHANGE', payload:{obj:cnt1}}
}

export default ADPDCTAction;