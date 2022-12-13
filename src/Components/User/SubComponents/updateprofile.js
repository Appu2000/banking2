import React, { Component } from 'react'
import { Sidebar, UserNav } from '../userHome'
import '../SubComponents/updateprofile.css'
import { connect } from 'react-redux';
import { GetProfile, SendProfile } from '../../../Action/CustomerAction';

class Updateprofile extends Component {

    componentDidMount() {
        var user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        this.profile.userName=user.username;
        this.props.dispatch(GetProfile(user.username));

    }

    profile = { userName: "", firstName: "", lastName: "", dob: "", contactNo: "", alernativeContactNo: "", email: "", salary: 0, address: "", alernativeAddress: "", aadharcard: "", pancard: "", employment: "" }

  
    nameSeparator = (name) => {
        

        var fname = "";
        var i;
        for (i = 0; i < name.length; i++) {
            fname = fname + name.charAt(i);
            if (name.charAt(i) == " ") {
                this.profile.firstName = fname
                
                break;
              
            }
        }
        var lname = "";
        for (var j = i+1; j < name.length; j++) {

            lname = lname + name.charAt(j);
            this.profile.lastName = lname
         
        }
        console.log('name:'+fname+" "+lname)
    }


    Submit = () => {


        console.log(this.profile);

        var name=document.getElementById("name").value;

        this.nameSeparator(name)

        var dob=document.getElementById("dob").value;

        this.profile.dob=dob;

        var add=document.getElementById("address").value;

        this.profile.address=add;

        var email=document.getElementById("email").value;

        this.profile.email=email;

        var ph=document.getElementById("ph").value;

        this.profile.contactNo=ph;

        var aadhar=document.getElementById("aadhar").value;

        this.profile.aadharcard=aadhar;

        var pan=document.getElementById("pan").value;

        this.profile.pancard=pan;

        var employment=document.getElementById("employment").value;

        this.profile.employment=employment;

        var salary=document.getElementById("salary").value;

        this.profile.salary=salary;

        var aPh=document.getElementById("aPh").value;

        this.profile.alernativeContactNo=aPh;
       
        var aAddress=document.getElementById("aAddress").value;

        this.profile.alernativeAddress=aAddress;

        console.log(this.profile)

        this.props.dispatch(SendProfile(this.profile));

        window.location.href = '/userhome';

    }


    render() {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar />

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

                    <UserNav />
                    <div>
                        <div className="contain">
                            <div className='form'>
                                <div className="row">
                                    <div className="col">
                                        <h3 className="title1">Profile</h3>
                                        <div className="inputBox">
                                            <span>Name </span>
                                            <input type="text" id="name" value={this.props.profile.firstName+" "+this.props.profile.lastName}  />
                                        </div>
                                        <div className="inputBox">
                                            <span>Date Of Birth</span>
                                            <input type="date" id="dob" value={this.props.profile.dob}  />
                                        </div>

                                        <div className="inputBox">
                                            <span>address </span>
                                            <input type="text" id="address" value={this.props.profile.address}  />
                                        </div>
                                        {/* <div className="inputBox">
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
                                        </div> */}
                                        {/* <h5>Alternative Address</h5> */}
                                        {/* <hr/> */}
                                        <div className="inputBox">
                                            <span>Alternative Address</span>
                                            <input type="text" id="aAddress" defaultValue={this.props.profile.alernativeAddress}  />
                                        </div>

                                        <div className="inputBox">
                                            <span>Email</span>
                                            <input type="email" id="email" value={this.props.profile.email}  />
                                        </div>

                                    </div>
                                    <div className="col">


                                        
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
                                            <input type="text" id="ph" value={this.props.profile.contactNo} />
                                        </div>
                                        <div className="inputBox">
                                            <span>Alternative Contact no. </span>
                                            <input type="text" id="aPh" defaultValue={this.props.profile.alernativeContactNo}  />
                                        </div>

                                        <div className="inputBox">
                                            <span>Aadhar Card no.</span>
                                            <input type="text" id="aadhar" value={this.props.profile.aadharcard} placeholder="9876 7654 5632"  />
                                        </div>
                                        <div className="inputBox">
                                            <span>Pan Card no.</span>
                                            <input type="text" id="pan" value={this.props.profile.pancard} placeholder="123ASDF456"  />
                                        </div>
                                        <div className="flex">
                                            <div className="inputBox">
                                                <span>Employment</span>
                                                <input type="text" id="employment" value={this.props.profile.employment} placeholder="Employement" />
                                            </div>
                                            <div className="inputBox">
                                                <span>Salary</span>
                                                <input type="text" id="salary" value={this.props.profile.salary} placeholder="Salary"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-primary" onClick={this.Submit}> Submit</button>


                            </div>
                        </div>

                    </div>


                </div>
            </div>

        )
    }
}

function mapStatetoProps(state) {
    console.log(state);
    const { profile } = state.customer
    return {
        profile
    }
}

export default connect(mapStatetoProps)(Updateprofile);