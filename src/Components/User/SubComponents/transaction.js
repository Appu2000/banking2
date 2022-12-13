import React, { Component } from 'react'
import { Sidebar, UserNav } from '../userHome'
import { Dropdown, Flag } from 'semantic-ui-react'
import { GetAccounts, GetAllAccounts, SendTransaction, UpdateAccount } from '../../../Action/CustomerAction';
import { connect } from 'react-redux';
import { GiSkullWithSyringe } from 'react-icons/gi';


class Transaction extends Component {


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
    // this.props.dispatch(GetAccounts(accounts[0].userName))
    this.props.dispatch(GetAllAccounts());
    // alert("at trans");
  }

  constructor() {
    super();
    this.state = {
      paymentDiv: true,
      accountTransferDiv: false,
      withdrawDiv: false,
      currentAccounts: {},
      options: [],
      error: ""
    }
  }

  active = (div) => {
    // alert(div);
    switch (div) {
      case 1: {
        this.setState({ paymentDiv: true }); this.setState({ accountTransferDiv: false });; this.setState({ withdrawDiv: false }); break;
      }
      case 2: {
        this.setState({ paymentDiv: false }); this.setState({ accountTransferDiv: true });; this.setState({ withdrawDiv: false }); break;
      }
      case 3: {
        this.setState({ paymentDiv: false }); this.setState({ accountTransferDiv: false });; this.setState({ withdrawDiv: true }); break;
      }
      default: {

        this.setState({ paymentDiv: true }); this.setState({ accountTransferDiv: false });; this.setState({ withdrawDiv: false }); break;

      }
    }

  }

  Transaction = { transactionId: 0, accountNo: 0, transactionType: "DEBIT", subType: "Payment", amount: 0, source: 0, status: "success", time: "", balance: 0 };
  Account = { accountNo: 0, accountType: "", created: "", userName: "", chequeStatus: "", creditcardStatus: "", balance: 0 }

  Transfer = () => {
    // alert("at transfer")
    var flag = true;
    var toAccount = {};
    toAccount.accountNo = 0;
    console.log("hi", this.Transaction.amount);
    console.log(this.Transaction);
    console.log(this.Account);
    console.log(this.state.currentAccounts)

    //Account
    if (this.Transaction.accountNo != this.Transaction.source) {
      // alert("ok")
      for (const element of this.state.currentAccounts) {
        console.log(element.accountNo + "equals" + this.Transaction.accountNo);
        if (element.accountNo == this.Transaction.accountNo) {
          // this.setState({ currentAccount: this.accounts[i] });
          this.Account = element;
          // alert("if")
        }
      }
      console.log("at state", this.props.customer.allaccounts.length);
      if (this.props.customer.allaccounts.length) {
        // alert("in");
        for (const element of this.props.customer.allaccounts) {

          if (element.accountNo == this.Transaction.source) {
            toAccount = element;

            flag = false;
            // alert("at this.props")
            console.log("before calc acc :", this.Account, " ", this.Transaction.amount);

            //Calculation
            if (this.Account.balance > parseInt(this.Transaction.amount)) {

              this.Account.balance = this.Account.balance - this.Transaction.amount;
              console.log("after calc acc :", this.Account);
              this.Transaction.balance = parseInt(this.Account.balance);
              this.Transaction.status = "Payment Sucess";
              this.Transaction.source = "to accNo : " + this.Transaction.source;
              //toAccount
              toAccount.balance = parseInt(toAccount.balance) + parseInt(this.Transaction.amount);
              console.log("toAccount Balance : ", toAccount.balance)
              // alert(typeof (toAccount.balance));
              this.setState({ error: "Success" });

            }
            else {
              this.Transaction.status = "insufficient Balance";
              this.Transaction.balance = parseInt(this.Account.balance);
              this.setState({ error: "Insufficient Balance" });
            }


            //transaction
            let T = new Date();

            this.Transaction.time = T.getFullYear() + "/" + (parseInt(T.getMonth())+1) + "/" + T.getDate();
            console.log(this.Transaction);
            console.log("line 123", toAccount)
            this.Dispatcher(this.Account, toAccount, this.Transaction);

          }
        }

        if (flag) {
          this.setState({ error: "Receiver account not Found" });

        }
      }
      else {
        this.setState({ error: "TRY AGAIN" });
      }
    }
    else {
      this.setState({ error: "Cant Transfer to Same Account" });
    }
  }

  Payment = () => {
    // alert("hi");
    let T = new Date();

    this.Transaction.time = T.getFullYear() + "/" + (parseInt(T.getMonth())+1) + "/" + T.getDate();

    for (const element of this.state.currentAccounts) {
      console.log(element.accountNo + "equals" + this.Transaction.accountNo);
      if (element.accountNo == this.Transaction.accountNo) {
        // this.setState({ currentAccount: this.accounts[i] });
        this.Account = element;
        // alert("if")
      }
    }


    if (this.Account.balance > parseInt(this.Transaction.amount)) {
      // alert("161")
      console.log("acc bal : ", this.Account.balance + "  trans amount : ", this.Transaction.amount)
      this.Account.balance = this.Account.balance - this.Transaction.amount;
      console.log("after payment acc :", this.Account);
      this.Transaction.accountNo = parseInt(this.Transaction.accountNo);
      this.Transaction.balance = parseInt(this.Account.balance);
      this.Transaction.amount = parseInt(this.Transaction.amount);
      this.Transaction.source = " to third Party";
      this.Transaction.status = "Payment Success";
      this.setState({ error: "Success" });
    }
    else {
      this.Transaction.status = "insufficient Balance";
      this.Transaction.balance = parseInt(this.Account.balance);
      this.setState({ error: "Insufficient Balance" });
    }
    console.log(this.Transaction);
    var account1 = {}
    this.Dispatcher(this.Account, account1, this.Transaction);
  }


  WidthDraw = () => {
    // alert("withdraw");

    let T = new Date();
    alert(T);

    this.Transaction.time = T.getFullYear() + "/" + (parseInt(T.getMonth())+1) + "/" + T.getDate();

    for (const element of this.state.currentAccounts) {
      console.log(element.accountNo + "equals" + this.Transaction.accountNo);
      if (element.accountNo == this.Transaction.accountNo) {
        // this.setState({ currentAccount: this.accounts[i] });
        this.Account = element;
        // alert("if")
      }

      if (this.Account.balance > parseInt(this.Transaction.amount)) {
        // alert("161")
        console.log("acc bal : ", this.Account.balance + "  trans amount : ", this.Transaction.amount)
        this.Account.balance = this.Account.balance - this.Transaction.amount;
        console.log("after payment acc :", this.Account);
        this.Transaction.accountNo = parseInt(this.Transaction.accountNo);
        this.Transaction.balance = parseInt(this.Account.balance);
        this.Transaction.amount = parseInt(this.Transaction.amount);
        this.Transaction.source = "ATM";
        this.Transaction.subType = "By Cash";
        this.Transaction.status = "Withdrawal Success";
        this.setState({ error: "Success" });
      }
      else {
        this.Transaction.status = "insufficient Balance";
        this.Transaction.balance = parseInt(this.Account.balance);
        this.setState({ error: "Insufficient Balance" });
      }
    }

    console.log(this.Transaction);
    var account1 = {}
    this.Dispatcher(this.Account, account1, this.Transaction);

  }

  Dispatcher = (from, to, transaction) => {
    // alert("at dispatcher");

    console.log(transaction)

    this.props.dispatch(SendTransaction(transaction));

    if (to.accountNo > 0) {
      // alert("hi")
      var transaction2 = transaction;
      transaction2.accountNo = to.accountNo;
      transaction2.source = "from accNo : " + JSON.stringify(from.accountNo);
      transaction2.balance = to.balance;
      transaction2.transactionType = "CREDIT"
      transaction2.subType = transaction.subType;
      console.log(transaction2)

      this.props.dispatch(SendTransaction(transaction2));
      this.props.dispatch(UpdateAccount(to));
    }

    this.props.dispatch(UpdateAccount(from));


    this.props.dispatch(GetAccounts(from.userName));

    // // document.getElementById("form").innerHTML="";
    // // document.getElementById("to").innerHTML="";
    // document.getElementById("amount").value="";

    // // document.getElementById("form1").innerHTML="";
    // document.getElementById("to1").value="";
    // // document.getElementById("method").innerHTML="";
    // document.getElementById("amount1").value="";
 
    // // document.getElementById("from2").innerHTML="";
    // document.getElementById("amount2").value="";
    window.location.reload();
    
  }

  run = setInterval(() => {this.setState({ error: "" });},10000);

  render() {
    return (
      <div >
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

            <UserNav />
            <div >
              <div className="card text-center" style={{ padding: "7% 10%" }} >
                <div style={{ backgroundColor: "#4997ff ", boxShadow: "-4px 4px 25px black", borderRadius: "10px" }}>
                  <div className="card-header" style={{ fontSize: "20px", color: "white" }}>
                    <ul className="nav nav-tabs card-header-tabs" >
                      <li className="nav-item" style={{ width: "33.33%", height: "50px", textDecoration: "none", padding: "15px", backgroundColor: this.state.paymentDiv ? "#4997ff" : "#3347b2" }} onClick={() => this.active(1)}>
                        PAYMENTS
                      </li>
                      <li className="nav-item" style={{ width: "33.33%", textDecoration: "none", padding: "15px", backgroundColor: this.state.accountTransferDiv ? "#4997ff" : "#3347b2" }} onClick={() => this.active(2)}>
                        BANK TRANSFER
                      </li>
                      <li className="nav-item" style={{ width: "33.33%", textDecoration: "none", padding: "15px", backgroundColor: this.state.withdrawDiv ? "#4997ff" : "#3347b2" }} onClick={() => this.active(3)}>
                        WITHDRAW
                      </li>
                    </ul>
                  </div>

                  {/* Payment */}
                  <div className="card-body" style={{ height: "400px", display: this.state.paymentDiv ? "block" : "none" }}>
                    <div>
                      <div class="ui grid" style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px" }}>
                        <div class="three column row">
                          <div class="column">
                            <div class="ui labeled input" style={{ fontSize: "16px" }}>
                              <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>
                                FROM
                              </div>
                              <select class="ui dropdown" id="form" style={{ width: "200px", height: "45px", paddingTop: "", fontSize: "16px" }} onChange={(e) => this.Transaction.accountNo = e.target.value}>
                                <option></option>
                                {this.state.options?.map((item) => {
                                  return (
                                    <option value={item.value} >{item.text}</option>
                                  )
                                })}

                              </select>
                            </div>
                          </div>

                          <div class="column">

                            <div class="ui labeled input" style={{ fontSize: "16px", height: "20px" }}>
                              <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>
                                TO
                              </div>
                              <select class="ui dropdown" id="to" style={{ width: "200px", paddingTop: "", height: "45px" }} onChange={(e) => this.Transaction.subType = e.target.value}>
                                <option value=""></option>
                                <option value="electricity">ELECTRICITY BILL</option>
                                <option value="phone recharge">PHONE RECHARGE</option>
                                <option value="water bill">WATER BILL</option>
                                <option value="dth recharge">DTH RECHARGE</option>
                                <option value="wifi recharge">WIFI RECHARGE</option>
                              </select>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "25px" }}>


                        <div class="ui right labeled input" style={{ padding: "55px", fontSize: "16px" }} onChange={(e) => this.Transaction.amount = e.target.value}>
                          <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>₹</div>
                          <input type="text"  placeholder="Amount" id="amount" />
                          <div class="ui basic label"> only/-</div>
                        </div>

                      </div>

                      <div style={{ display: "flex", justifyContent: "flex-end", padding: "45px" }}>
                        <button class="ui twitter button" style={{ fontSize: "18px", background: "#3347b2" }} onClick={this.Payment}>
                          Pay
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* transfer */}
                  <div className="card-body" style={{ height: "400px", display: this.state.accountTransferDiv ? "block" : "none" }}>
                    <div>
                      <div class="ui grid" style={{ display: "flex", justifyContent: "space-evenly", marginTop: "50px" }}>
                        <div class="three column row">
                          <div class="column">
                            <div class="ui labeled input" style={{ fontSize: "16px", height: "25px" }}>
                              <div class="ui label"  style={{ height: "45px", background: "#3347b2", color: "white" }}>
                                FROM
                              </div>

                              <select class="ui dropdown" id="form1"  style={{ width: "200px", height: "45px", paddingTop: "", fontSize: "16px" }} onChange={(e) => this.Transaction.accountNo = e.target.value}>
                                <option></option>
                                {this.state.options?.map((item) => {
                                  return (
                                    <option value={item.value}>{item.text}</option>
                                  )
                                })}

                              </select>

                            </div>

                          </div>

                          <div class="column">
                            <div class="ui labeled input" style={{ fontSize: "16px" }}>
                              <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>
                                TO
                              </div>
                              <input type="text" id="to1" placeholder="To Account" onChange={(e) => this.Transaction.source = e.target.value} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='ui grid' style={{ marginTop: "45px" }}>
                        <div class="two column row">
                          <div class="column">
                            <div class="ui labeled input" style={{ fontSize: "16px" }}>
                              <div class="ui label"  style={{ height: "45px", background: "#3347b2", color: "white" }}>
                                Method
                              </div>
                              <select class="ui dropdown" id='method' style={{ width: "200px", paddingTop: "", fontSize: "16px", height: "45px" }} onChange={(e) => this.Transaction.subType = e.target.value}>
                                <option value=""></option>
                                <option value="NEFT">NEFT</option>
                                <option value="IMPS">IMPS</option>
                                <option value="RTGS">RTGS</option>
                              </select>
                            </div>
                          </div>

                          <div class="column">
                            <div class="ui right labeled input" style={{ fontSize: "16px", position: "relative" }}>
                              <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>₹</div>
                              <input type="text" placeholder="Amount" id="amount1" onChange={(e) => this.Transaction.amount = e.target.value} />
                              <div class="ui basic label">only/-</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "flex-end", padding: "55px" }}>
                        <button class="ui twitter button" style={{ fontSize: "18px", background: "#3347b2" }} onClick={this.Transfer}>

                          TRANSFER
                        </button>
                      </div>
                      <div>

                      </div>

                    </div>

                  </div>

                  {/* withdrawDiv */}
                  <div className="card-body" style={{ height: "400px", display: this.state.withdrawDiv ? "block" : "none", justifyContent: "space-evenly" }}>

                    <div class="ui labeled input" style={{ fontSize: "16px", height: "25px" }}>

                      <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>
                        FROM
                      </div>

                      <select class="ui dropdown" id="from2" style={{ width: "200px", height: "45px", paddingTop: "", fontSize: "16px" }} onChange={(e) => this.Transaction.accountNo = e.target.value}>
                        <option></option>
                        {this.state.options?.map((item) => {
                          return (
                            <option value={item.value}>{item.text}</option>
                          )
                        })}

                      </select>

                    </div>

                    <div class="ui right labeled input" style={{ padding: "100px", fontSize: "16px" }}>
                      <div class="ui label" style={{ height: "45px", background: "#3347b2", color: "white" }}>₹</div>
                      <input type="text"  placeholder="Amount" id="amount2" onChange={(e) => this.Transaction.amount = e.target.value} />
                      <div class="ui basic label"> only/-</div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "35px" }}>
                      <button class="ui twitter button" style={{ fontSize: "18px", background: "#3347b2" }} onClick={this.WidthDraw}>
                        WITHDRAW
                      </button>
                    </div>
                  </div>
                  
                </div>
                <h1>{this.state.error}</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
function mapStatetoProps(state) {
  console.log(state.customer);
  const { customer } = state
  return {
    customer
  }
}

export default connect(mapStatetoProps)(Transaction);