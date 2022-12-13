import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetAccounts } from '../../../Action/CustomerAction';

 class Accounts extends Component {


    // constructor(){
    //     super();
    //     alert("account");
    //     var user=JSON.parse(localStorage.getItem("user"));
    //     console.log("at account com",user)
    //     this.props.dispatch(GetAccounts(user.username))

    // }

    componentDidMount(){
        
        var user=JSON.parse(localStorage.getItem("user"));
        console.log("at account com",user)
        this.props.dispatch(GetAccounts(user.username))
    }

  render() {
    return (
      <div>
         
        <div style={{padding:"3% 50px"}}>
                        <table className="table table-striped table-hover">
                            <thead className="table">
                                <tr><h2>Accounts</h2></tr>
                                <tr>
                                    <th scope="col" >SI.no</th>
                                    <th scope="col">Account no.</th>
                                    <th scope="col">Account Type</th>
                                    <th scope="col">Created On</th>
                                    <th scope="col">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.accounts?.map((item,index)=>
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.accountNo}</td>
                                <td>{item.accountType}</td>
                                <td>{item.created}</td>
                                <td>{item.balance}</td>
                                 </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
      </div>
    )
  }
}

function mapStatetoProps(state){
    console.log(state.customer.accounts);
    const {accounts}=state.customer
    return {
        accounts
    };
}

export default connect(mapStatetoProps)(Accounts);