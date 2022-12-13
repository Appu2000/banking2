import React, { Component } from 'react'
import { GetAccountByAccountNo } from '../../Action/ManagerAction';
import { connect } from 'react-redux';
import { ManagerNav } from '../Manager/managerHome';
import { UpdateAccount } from '../../Action/CustomerAction';

class ManageAccount extends Component {
    userAcc = { accountNo: 0, accountType: "", created: "", userName: "", chequeStatus: "", creditcardStatus: "", balance: 0 }

    id = 0
    handleSearch = () => {
        // alert("ki",this.id);
        console.log(this.id);
        this.props.dispatch(GetAccountByAccountNo(this.id));
    }

    IssueChequeBook = () => {
        this.userAcc = this.props.account;
        this.userAcc.chequeStatus = 'issued';
        this.props.dispatch(UpdateAccount(this.userAcc));
        this.props.dispatch(GetAccountByAccountNo(this.id));
        console.log(this.userAcc)
    }

    render() {
        return (
            <div>
                <ManagerNav />

                <div style={{ position: "absolute", margin: "10% 40%" }}>
                    <div style={{ display: "flex", justifyContent:"center" }}>

                        <div class="form-floating mb-3" style={{ marginTop: "9px" }}>

                            <div class="ui action input" style={{ paddingBottom: "25px", }}>
                                <input type="text" placeholder="Search..." onChange={e => this.id = e.target.value} />
                                <button class="ui primary button" onClick={this.handleSearch}>Search</button>
                            </div>

                            {/* <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" style={{ width: "300px", height: "50px" }} onChange={e => this.id = e.target.value} required/>
                                    <label for="floatingInput">Account number</label> */}
                        </div>
                        {/* <div style={{}}>
                                    <button class="btn btn-primary" type="button" style={{ width: "100px", marginBottom: "25px", background:"#4481eb" }} onClick={this.handleSearch}>Search</button>
                                </div> */}
                    </div>

                    <div style={{alignItems:"center"}}>
                        {/* padding: "40px 214px" */}
                        <div class="card text-center" style={{ minWidth: "400px" ,textAlign:"left" }}>
                            <div class="card-header" style={{ backgroundColor: "#e5e5de", fontSize: "22px", fontWeight: "bold" }}>
                                {this.props.account.userName}
                            </div>
                            <div class="card-body" style={{ width: "" ,textAlign:"left",padding:"20px" }}>

                                <h4 class="card-title">Account Number : {this.props.account.accountNo}</h4>
                                <h4 class="card-title">Account Type : {this.props.account.accountType}</h4>
                                <h4 class="card-title">Created on : {this.props.account.created}</h4>
                                <h4 class="card-title">Cheque Status : {this.props.account.chequeStatus}</h4>
                                <h4 class="card-title">Credit Card Status : {this.props.account.creditcardStatus}</h4>
                                <h4 class="card-title">Balance : {this.props.account.balance}</h4>

                                {/* <p class="card-text">You can approve your bank customer by clicking below button</p> */}
                                <button class="btn btn-primary" style={{ background: "#4481eb", marginRight: "5px" }} onClick={this.IssueChequeBook}>Issue Cheque Book</button>

                            </div>
                            <div class="card-footer text-muted" style={{ backgroundColor: "#e5e5de" }}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStatetoProps(state) {
    console.log(state.manager);
    const { account } = state.manager
    return {
        account
    }
}

export default connect(mapStatetoProps)(ManageAccount);
// export default ManageAccount