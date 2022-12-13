import React, { Component } from 'react'
import { GetProfile, SendProfile } from '../../../Action/CustomerAction';
import '../SubComponents/createProfile.css'
import { connect } from 'react-redux';

class CreateProfile extends Component {


    componentDidMount(){
        var userName=JSON.parse(localStorage.getItem("registerUserName"));
        this.profile.userName=userName;
       
    }

    profile = { userName: "", firstName: "", lastName: "", dob: "", contactNo: "", alernativeContactNo: "", email: "", salary: 0, address: "", alernativeAddress: "", aadharcard: "", pancard: "", employment: "" }

    address = ""
    city = ""
    state = ""
    zipcode = ""
    combineAddress1 = () => {
        
        this.profile.address = this.address + " ," + this.city + " ," + this.state + "-" + this.zipcode;
        console.log('address:',this.profile.address)
    }

    name = ""
    nameSeparator = () => {
        
        var fname = "";
        for (var i = 0; i < this.name.length; i++) {
            fname = fname + this.name.charAt(i);
            if (this.name.charAt(i) == " ") {
                this.profile.firstName = fname
                
                break;
              
            }
        }
        var lname = "";
        for (var j = i+1; j < this.name.length; j++) {

            lname = lname + this.name.charAt(j);
            this.profile.lastName = lname
         
        }
        console.log('name:'+this.fname+" "+this.lName)
    }



    Submit = () => {
       
        this.combineAddress1();
        this.nameSeparator();
        console.log(this.profile);

        this.props.dispatch(SendProfile(this.profile));

        window.location.href='/userhome';
    }


    render() {
        return (
            <div>
                <div className="con">
                    <div className='form'>
                        <div className="row">
                            <div className="col">
                                <h3 className="title1">Profile</h3>
                                <div className="inputBox">
                                    <span>Name </span>
                                    <input type="text" placeholder="Full Name" onChange={(e) => this.name = e.target.value} />
                                </div>
                                <div className="inputBox">
                                    <span>Date Of Birth</span>
                                    <input type="date" placeholder="Date Of Birth" onChange={(e) => this.profile.dob = e.target.value} />
                                </div>

                                <div className="inputBox">
                                    <span>address </span>
                                    <input type="text" placeholder="room - street - locality" onChange={(e) => this.address = e.target.value} />
                                </div>
                                <div className="inputBox">
                                    <span>city </span>
                                    <input type="text" placeholder="city" onChange={(e) => this.city = e.target.value} />
                                </div>
                                <div className="flex">
                                    <div className="inputBox">
                                        <span>state </span>
                                        <input type="text" placeholder="state" onChange={(e) => this.state = e.target.value} />
                                    </div>
                                    <div className="inputBox">
                                        <span>zip code :</span>
                                        <input type="text" placeholder="pin code" onChange={(e) => this.zipcode = e.target.value} />
                                    </div>
                                </div>
                                {/* <h5>Alternative Address</h5> */}
                                {/* <hr/> */}
                                <div className="inputBox">
                                    <span>Alternative Address</span>
                                    <input type="text" placeholder="Alernative Address" onChange={(e) => this.profile.alernativeAddress = e.target.value} />
                                </div>

                            </div>
                            <div className="col">


                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type="email" placeholder="email@gmail.com" onChange={(e) => this.profile.email = e.target.value} />
                                </div>
                                {/* <div className="inputBox">
                                        <span>state </span>
                                        <input type="text" placeholder="india" />
                                    </div>
                                    <div className="inputBox">
                                        <span>zip code :</span>
                                        <input type="text" placeholder="123 456" />
                                    </div> */}



                                <div className="inputBox">
                                    <span>Contact no. </span>
                                    <input type="text" placeholder="123 456 7890" onChange={(e) => this.profile.contactNo = e.target.value} />
                                </div>
                                <div className="inputBox">
                                    <span>Alternative Contact no. </span>
                                    <input type="text" placeholder="123 456 7890" onChange={(e) => this.profile.alernativeContactNo = e.target.value} />
                                </div>

                                <div className="inputBox">
                                    <span>Aadhar Card no.</span>
                                    <input type="text" placeholder="9876 7654 5632" onChange={(e) => this.profile.aadharcard = e.target.value} />
                                </div>
                                <div className="inputBox">
                                    <span>Pan Card no.</span>
                                    <input type="text" placeholder="123ASDF456" onChange={(e) => this.profile.pancard = e.target.value} />
                                </div>
                                <div className="flex">
                                    <div className="inputBox">
                                        <span>Employment</span>
                                        <input type="text" placeholder="Employement" onChange={(e) => this.profile.employment = e.target.value} />
                                    </div>
                                    <div className="inputBox">
                                        <span>Salary</span>
                                        <input type="text" placeholder="Salary" onChange={(e) => this.profile.salary = e.target.value} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary" onClick={this.Submit}> Submit</button>
                           
                        
                    </div>
                </div>

            </div>
        )
    }
}

function mapStatetoProps(state) {
    console.log(state);
    const { customer } = state.customer.profile
    return {
        customer
    }
}

export default connect(mapStatetoProps)(CreateProfile);