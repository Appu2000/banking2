import axios from "axios";

export const GetCustomer = (username) => {
    console.log("at action"+username);
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8000/user/getuser",username)
        .then(data => {
            console.log(data);
            return dispatch({
                type: "ADDCUSTOMER",
                data: data.data
            });
        });
    };
}


export const GetAccounts = (username) => {
    console.log("at action"+username);
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8001/account/get/"+username)
        .then(data => {
            console.log(data);
            localStorage.setItem("accounts",JSON.stringify(data.data))
            return dispatch({
                type: "ADDACCOUNTS",
                data: data.data
            });
        });
    };
}

export const GetTransactions = (accountNo) => {
    console.log("at action"+accountNo);
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8001/transaction/get/"+accountNo)
        .then(data => {
            console.log(data);
            return dispatch({
                type: "ADDTRANSACTIONS",
                data: data.data
            });
        });
    };
}


export const GetAllAccounts = () => {
    console.log("at action");
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8001/account/getall")
        .then(data => {
            console.log(data);
            return dispatch({
                type: "ADDALLACCOUNTS",
                data: data.data
            });
        });
    };
}


export const SendTransaction = (trans) => {
    console.log("at action",trans);
    return async function(dispatch, getState) {
        await axios.post("http://localhost:8001/transaction/add",trans)
        .then(data => {
            console.log(data);   
              
        });
    };
}

export const UpdateAccount = (account) => {
    console.log("at action",account);
    return async function(dispatch, getState) {
        await axios.post("http://localhost:8001/account/add",account)
        .then(data => {
            console.log(data); 
              
        });
    };
}


export const GetProfile = (username) => {
    console.log("at action"+username);
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8001/customer/view/"+username)
        .then(data => {
            console.log(data);
            localStorage.setItem("profile",JSON.stringify(data.data))
            return dispatch({
                type: "ADDPROFILE",
                data: data.data
            });
        });
    };
}

export const SendProfile = (profile) => {
    console.log("at action",profile);
    return async function(dispatch, getState) {
        await axios.post("http://localhost:8001/customer/add",profile)
        .then(data => {
            console.log(data);
            return dispatch({
                type: "CLEARPROFILE",
            });      
        });
    };
}

export const Createaccount = (account) => {
    console.log("at action",account);
    return async function(dispatch, getState) {
        await axios.post("http://localhost:8001/account/add",account)
        .then(data => {
            console.log(data);     
        });
    };
}

export const CreateRequest = (mail) => {
    console.log("at action",mail);
    return async function(dispatch, getState) {
        await axios.post("http://localhost:8001/mail/add",mail)
        .then(data => {
            console.log(data);     
        });
    };
}

