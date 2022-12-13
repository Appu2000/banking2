import axios from "axios";

export const GetAccountByAccountNo=(accountNo)=>{
    console.log("account number in action : "+accountNo);

    return async function(dispatch, getState){
        await axios.get("http://localhost:8001/account/getById/"+accountNo)
        .then(data=>{
            console.log("action account : "+data);
            return dispatch({
                type: "GETACCOUNT",
                data: data.data
            })
        })
    }
}


export const GetAllRequest=()=>{
    console.log("hi");

    return async function(dispatch, getState){
        await axios.get("http://localhost:8001/mail/getall")
        .then(data=>{
            console.log("action account : "+data);
            return dispatch({
                type: "ADDREQUEST",
                data: data.data
            })
        })
    }
}