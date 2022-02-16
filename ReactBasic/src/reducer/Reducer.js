const reducer = function(state, action)
{
    console.log("reducer method perform", action.type);
    return('reduceTest');
}

export default reducer;