const initializeState = {
    account: {},
    user: {},
    request:[]
}

const ManagerReducer = (state = initializeState, action) => {
    console.log(action.type);

    switch (action.type) {
        case "GETUSER":
            console.log(action.data)
            return { user: action.data };

        case "GETACCOUNT":
            console.log(action.data)
            return { account: action.data };
            
        case "ADDREQUEST":
            console.log(action.data)
            return { request: action.data };

        default:
            console.log(state);
            return state;
    }
}

export default ManagerReducer;