import React, { Component } from 'react'
import { ManagerNav } from '../Manager/managerHome'
import { connect } from 'react-redux';
import '../User/SubComponents/updateprofile.css'
import { ClearProfile, GetProfile, SendProfile } from '../../Action/CustomerAction';

class ManagerProfileUpdate extends Component {

   
    profile = { userName: "", firstName: "", lastName: "", dob: "", contactNo: "", alernativeContactNo: "", email: "", salary: 0, address: "", alernativeAddress: "", aadharcard: "", pancard: "", employment: "" }

    userName=""
    Search=()=>{
      alert("search");
      console.log(this.userName);
      this.props.dispatch(GetProfile(this.userName));
     
    } 

    

    Submit = () => {
        alert("hi")
        if(this.props.profile.userName){
            this.profile.userName=this.props.profile.userName;
        }

        console.log(this.profile);

        var name=document.getElementById("name").value;

        this.profile.firstName=name;

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

          window.location.reload();
        // this.props.dispatch(ClearProfile());
        
    }
    render() {
        return (
            <div>
                <ManagerNav />
                

                    <div className="contain" style={{padding:"0px"}}>
                    <div style={{backgroundColor:"#e7e6e4",textAlign:"center"}}>
                    <div class="ui action input" style={{paddingBottom:"25px"}}>
                        <input type="text" placeholder="Search..." onChange={e=>this.userName=e.target.value}/>
                        <button class="ui primary button" onClick={this.Search}>Search</button>
                    </div>
                        <div className='form' style={{textAlign:"left"}}>
                            <div className="row">
                                <div className="col">
                                    <h3 className="title1">Profile</h3>
                                    <div className="inputBox">
                                        <span>Name </span>
                                        <input type="text" id="name" defaultValue={this.props.profile.firstName} />
                                    </div>
                                    <div className="inputBox">
                                        <span>Date Of Birth</span>
                                        <input type="date" id="dob" defaultValue={this.props.profile.dob} />
                                    </div>

                                    <div className="inputBox">
                                        <span>address </span>
                                        <input type="text" id="address" defaultValue={this.props.profile.address} />
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
                                        <input type="text" id="aAddress" defaultValue={this.props.profile.alernativeAddress} />
                                    </div>

                                    <div className="inputBox">
                                        <span>Email</span>
                                        <input type="email" id="email" defaultValue={this.props.profile.email} />
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
                                        <input type="text" id="ph" defaultValue={this.props.profile.contactNo} />
                                    </div>
                                    <div className="inputBox">
                                        <span>Alternative Contact no. </span>
                                        <input type="text" id="aPh" defaultValue={this.props.profile.alernativeContactNo} />
                                    </div>

                                    <div className="inputBox">
                                        <span>Aadhar Card no.</span>
                                        <input type="text" id="aadhar" defaultValue={this.props.profile.aadharcard}  />
                                    </div>
                                    <div className="inputBox">
                                        <span>Pan Card no.</span>
                                        <input type="text" id="pan" defaultValue={this.props.profile.pancard}  />
                                    </div>
                                    <div className="flex">
                                        <div className="inputBox">
                                            <span>Employment</span>
                                            <input type="text" id="employment" defaultValue={this.props.profile.employment}  />
                                        </div>
                                        <div className="inputBox">
                                            <span>Salary</span>
                                            <input type="text" id="salary" defaultValue={this.props.profile.salary}  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-outline-primary" onClick={this.Submit}> Submit</button>


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

export default connect(mapStatetoProps)(ManagerProfileUpdate);