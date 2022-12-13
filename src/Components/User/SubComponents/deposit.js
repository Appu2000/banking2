import React, { Component } from 'react'
import { GetAccounts, SendTransaction, UpdateAccount } from '../../../Action/CustomerAction';
import { Sidebar, UserNav } from '../userHome';
import { connect } from 'react-redux';

class Deposit extends Component {

  constructor() {
    super();
    this.state = {
      currentAccounts: {},
      options: [],
      error: ""
    }
  }

  componentDidMount() {

    var accounts = JSON.parse(localStorage.getItem("accounts"));
    console.log("accounts", accounts);
    this.setState({ currentAccounts: accounts })
    this.setState({
      options: accounts?.map(item => ({
        key: item.accountNo,
        text: item.accountNo,
        value: item.accountNo,
      }))
    })

  }
  Transaction = { transactionId: 0, accountNo: 0, transactionType: "CREDIT", subType: "cash", amount: 0, source: "Bank", status: "success", time: "", balance: 0 };
  Account = { accountNo: 0, accountType: "", created: "", userName: "", chequeStatus: "", creditcardStatus: "", balance: 0 }

  Deposit=()=>{
    // alert("deposit");

    let T = new Date();

    this.Transaction.time = T.getFullYear() + "/" + T.getMonth()+1 + "/" + T.getDate();

    for (const element of this.state.currentAccounts) {
      console.log(element.accountNo + "equals" + this.Transaction.accountNo);
      if (element.accountNo == this.Transaction.accountNo) {
        // this.setState({ currentAccount: this.accounts[i] });
        this.Account = element;
        // alert("if")
      }
    }
    this.Account.balance = parseInt(this.Account.balance) + parseInt(this.Transaction.amount);
    this.Transaction.accountNo = parseInt(this.Transaction.accountNo);
    this.Transaction.balance = parseInt(this.Account.balance);
    this.Transaction.amount = parseInt(this.Transaction.amount);

    console.log(this.Transaction);
    console.log(this.Account);

    this.props.dispatch(SendTransaction(this.Transaction));
    this.props.dispatch(UpdateAccount(this.Account));

    this.props.dispatch(GetAccounts(this.Account.userName));

    this.setState({error:"Success"})

}

  render() {


    return (

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

          <UserNav />
          <div>
            {/* deposit */}
            <div className="card text-center" style={{ padding: "7% 10%"  }}>
              <div style={{ boxShadow: "-4px 4px 25px black"}}>
            <div className="card-header"style={{ background:"#3347b2" ,height:"55px",fontSize:"20px",padding:"15px",color:"white"}} >
              Deposit
              </div>
            <div className="card-body" style={{ height: "400px", justifyContent: "space-evenly",background:"#4997ff" }}>

              <div class="ui labeled input" style={{ fontSize: "16px", height: "25px" }}>

                <div class="ui label" style={{ height: "45px" }}>
                  To
                </div>

                <select class="ui dropdown" style={{ width: "200px", height: "45px", paddingTop: "", fontSize: "16px" }} onChange={(e) => this.Transaction.accountNo = e.target.value}>
                  <option></option>
                  {this.state.options?.map((item) => {
                    return (
                      <option value={item.value}>{item.text}</option>
                    )
                  })}

                </select>

              </div>

              <div class="ui right labeled input" style={{ padding: "100px", fontSize: "16px" }}>
                <label for="amount" class="ui label">₹</label>
                <input type="text" placeholder="Amount" id="amount" onChange={(e) => this.Transaction.amount = e.target.value} />
                <div class="ui basic label"> only/-</div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", padding: "35px" }}>
                <button class="ui twitter button" style={{ background:"#3347b2", fontSize: "18px" }} onClick={this.Deposit} >
                  Deposit
                </button>
              </div>
            </div>
            </div>
            <h1>{this.state.error}</h1>
          </div>
          </div>
        </div>


      </div>
            
      
         
    )
  }
}
function mapStatetoProps(state) {
 
  return {
    
  }
}

export default connect(mapStatetoProps)(Deposit);