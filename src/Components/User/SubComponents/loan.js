import React, { Component } from 'react'
import { Sidebar, UserNav } from '../userHome'
import '../SubComponents/loan.css'
import homeloan from '../../resouces/images/homeloan.jpg'
import goldloan from '../../resouces/images/goldloan.jpeg'
import loan from '../../resouces/images/loan.jpg'
// import study from '../../resouces/images/st'
import { AiFillCloseCircle } from 'react-icons/ai'
import { CreateRequest } from '../../../Action/CustomerAction'
import { connect } from 'react-redux'

class Loan extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      option: true,
      emiCalc: false,
      value: "1234",
      Title: "",
    }
  }

  mail = { id: 0, sender: "", header: "", content: "", status: "pending" }
  componentDidMount() {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    this.mail.sender = user.username;
    // this.props.dispatch(GetProfile(user.username));
  }

  open = (value) => {

    switch (value) {
      case 1: {
        this.setState({ show: true });
        this.setState({ option: false });
        this.setState({ Title: "Home Loan" })
        this.mail.header = "loan";
        this.mail.content = "interested in home loan";
        this.props.dispatch(CreateRequest(this.mail));
        break;
      }
      case 2: {
        this.setState({ show: true });
        this.setState({ option: false });
        this.setState({ Title: "Gold Loan" })
        this.mail.header = "loan";
        this.mail.content = "interested in Gold Loan";
        this.props.dispatch(CreateRequest(this.mail));
        break;
      }
      case 3: {
        this.setState({ show: true });
        this.setState({ option: false });
        this.setState({ Title: "Personal Loan" })
        this.mail.header = "loan";
        this.mail.content = "interested in Personal Loan";
        this.props.dispatch(CreateRequest(this.mail));
        break;
      }
      default: {
        this.setState({ show: false });
        this.setState({ option: true });

      }

    }
   
    alert(value)
    console.log("option :", this.state.option, " show", this.state.show, " value :", this.state.value)
  }

  calc = () => {


    let loanAmount = document.getElementById("amount");
    let interestRate = document.getElementById("interest");
    let loanDuration = document.getElementById("loanTenure");
    let noOfMonths = loanDuration.value * 12;
    console.log(interestRate.value, loanAmount.value, loanDuration.value)



    let r = parseFloat(interestRate.value) / 12 / 100;
    let P = loanAmount.value;
    let n = noOfMonths;

    //formula EMI= (P * r * (1 + r)^n ) / ((1+r)^n - 1)
    let EMI = (P * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    alert(EMI);
    document.getElementById("emi").innerText = "₹" + Math.round(EMI);

  }


  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

            <UserNav />
            <div>
              <section id="services" style={{ display: this.state.option ? "block" : "none" }}>
                <div className="container22 text-center" >
                  <h1 className="title">LOANS </h1>
                  <div className="row text-center">

                    <div className="col-md-4 services">
                      <img src={homeloan} className="service-img" />
                      <h4>Home Loan</h4>
                      <p>
                        As per the current rates, our Easy Bank provides the lowest interest for a home loan starting at 15.40%.
                      </p>
                      <button className='btn btn-primary' onClick={() => this.open(1)}>Apply</button>
                    </div>

                    <div className="col-md-4 services" >
                      <img src={goldloan} className="service-img" />
                      <h4>Gold Loan</h4>
                      <p>
                        As per the current rates, our Easy Bank provides the lowest interest for a gold loan starting at 7.60%.
                      </p>
                      <button className='btn btn-primary' onClick={() => this.open(2)}>Apply</button>
                    </div>
                    <div className="col-md-4 services">
                      <img src={loan} className="service-img" />
                      <h4>Personal Loan</h4>
                      <p>
                        A loan that does not require collateral or security and is offered with minimal documentation.
                      </p>
                      <button className='btn btn-primary' onClick={() => this.open(3)}>Apply</button>
                    </div>
                  </div>
                </div>
              </section>

              <div className='cont' style={{ display: this.state.show ? "block" : "none" }}>
                <div className='header'>
                  <div className='headerTitle'>
                    <h1 style={{ padding: "10px" }}> {this.state.Title} </h1>

                  </div>
                  <div className='close' onClick={() => this.open(4)}>
                    <h5>
                      <AiFillCloseCircle size={30} />
                    </h5>
                  </div>
                </div>

                <div className='blockcontent'>
                  <h3> Thanks for Showing interest, </h3>
                  <h3>Our Staffs will contact you through phone within 24hrs and</h3>
                  <h3> guide you throughout process,</h3>
                  <br />
                  <h3 style={{ textAlign: "center" }}>Thank you for your patience</h3>
                  <div style={{ textAlign: "right" }}>
                    <h3>Yours Regarding,</h3>
                    <h3>Management</h3>
                  </div>

                </div>
              </div>


              <div style={{ display: this.state.emiCalc ? "block" : "none" }}>


                <div className="container2" style={{ margin: "auto" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className="heading">EMI Calculator</p>
                    {/* <div className='close' onClick={() => this.open(5)}>
                      <h5>
                        <AiFillCloseCircle size={30} />
                      </h5>
                    </div> */}
                  </div>
                  <div className="input-container2">
                    <label htmlFor="amount">Loan Amount(₹)</label>
                    <input type="number" id="amount" required />
                  </div>
                  <div className="input-container2">
                    <label htmlFor="interest">Interest Rate(%)</label>
                    <input type="number" id="interest" step="0.01" required />
                  </div>
                  <div className="input-container2 loan-tenure-container2">
                    <label htmlFor="loanTenure">Loan Tenure</label>
                    <input type="text" id="loanTenure" required />
                    <div className="radio-container2">
                      <input type="radio" name="btn" id="year" /><label htmlFor="year">Year</label>
                      {/* <input type="radio" name="btn" id="month"><label for="month">Month</label> </input>   */}
                    </div>
                  </div>
                  <div className="submit-container2">
                    <button onClick={this.calc} className="btn btn-primary" > submit</button>
                  </div>
                  <div className="output">
                    <p>Monthely EMI                           <span id="emi">₹</span></p>
                    {/* <p >Total Interest Payable             <span id="totalInterest"    >₹</span></p>
<p >Total Payment(Principal + Interest)<span id="totalPayment">₹</span> </p> */}
                  </div>
                </div>

              </div>

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

export default connect(mapStatetoProps)(Loan);