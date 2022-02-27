const reducer = function (state, action) {
    console.log("reducer is called");
    switch (action.type) {
        case 'INPUT-CHANGE':
            return { ...state, userNameValue: action.payload.userName, userIDValue: action.payload.userID, passwordValue: action.payload.password };
        case 'INPUTAPI-CHANGE':
            return { ...state, userDataApiValue:action.payload.userData };
        default:
            return null;
    }

}

export default reducer;