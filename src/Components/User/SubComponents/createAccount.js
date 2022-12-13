import React, { Component } from 'react'
import { Createaccount } from '../../../Action/CustomerAction';

import { Sidebar, UserNav } from '../userHome'

import { connect } from 'react-redux';

class CreateAccount extends Component {


  account = { userName: "", accountNo: 0, accountType: "", created: "", chequeStatus: false, creditcardStatus: null, balance: 0 }

  Create = () => {

    console.log(this.account);
    let T = new Date();
    this.account.created = T.getFullYear() + "/" + T.getMonth() + "/" + T.getDate();

    if (this.account.chequeStatus) {
      this.account.chequeStatus = "requested"
    }
    else {
      this.account.chequeStatus = null;
    }

    var user = JSON.parse(localStorage.getItem("user"));
    console.log("at account com", user)
    this.account.userName = user.username;
    console.log(this.account);
    this.props.dispatch(Createaccount(this.account))
    window.location.href = '/userhome';
  }


  Checkbox = () => {

    if (this.account.chequeStatus == false) {
      this.account.chequeStatus = true;
    }
    else {
      this.account.chequeStatus = false;
    }
  }

  render() {
    return (

      <div style={{ display: "flex", color: "white" }}>
        <Sidebar />

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

          <UserNav />
          <div style={{ margin: "auto", height: "300px", width: "1000px" }}>
            <div style={{ height: "75px", backgroundColor: "#3347b2", textAlign: "center" }}>
              <h1 style={{ padding: "10px" }}>Create new Account</h1>
            </div>
            <div style={{ backgroundColor: "#4997ff", textAlign: "center" }}>
              <div class="form-group" style={{ display: "flex", padding: "5%", justifyContent: "center" }}>
                <h3 style={{ padding: "10px" }}>Account Type</h3> <select class="ui dropdown" style={{ width: "300px", paddingTop: "", fontSize: "18px" }} onChange={(e) => this.account.accountType = e.target.value}>
                  <option value=""></option>
                  <option value="current">Current Account</option>
                  <option value="salary">Salary Account</option>
                  <option value="saving">Saving Account</option>

                </select>
              </div>

              <div class="form-group form-check">
                <label class="form-check-label" for="exampleCheck1" style={{ padding: "25px" }}><h3>Cheque Book</h3></label>

                <input type="checkbox" class="" id="exampleCheck1" style={{ width: "20px", height: "20px" }} value="false" onChange={this.Checkbox} />

              </div>
              <button class="btn btn-primary" onClick={this.Create}>Create</button>

            </div>

          </div>

        </div>
      </div>

    )
  }
}
function mapStatetoProps(state) {

  return {

  };
}

export default connect(mapStatetoProps)(CreateAccount);