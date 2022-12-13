const initializeState = {
    customer: {},
    accounts: [],
    transactions: [],
    allaccounts:[],
    profile:{}
}

const CustomerReducer = (state = initializeState, action) => {
    console.log(action.type);

    switch (action.type) {

        case "ADDCUSTOMER":
            return { customer: action.data };

        case "ADDACCOUNTS":
            console.log(action.data)
            return { accounts: action.data };

        case "ADDTRANSACTIONS":
            console.log(action.data)
            return { transactions: action.data };

        case "ADDALLACCOUNTS":
            console.log(action.data)
            return { allaccounts: action.data };    
        case "ADDPROFILE":
            console.log(action.data);
            return {profile : action.data}  

        case "CLEARPROFILE":     
             console.log("clearprofile");
             return {profile : ""}

        default:
            console.log(state);
            return state;
    }
}

export default CustomerReducer;