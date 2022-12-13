import React, { Component } from 'react';
import { GetProfile } from '../../../Action/CustomerAction';
import '../SubComponents/profile.css'
import { Sidebar, UserNav } from '../userHome';
import { connect } from 'react-redux';
// import pic from '../User/resource/images/pic.jpg';
import pic from '../resource/images/pic.jpg'
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profile: {},

        }

    }

    componentDidMount() {
        var user = JSON.parse(localStorage.getItem("user"));
        console.log("at account com", user)
        this.props.dispatch((GetProfile(user.username)))
        // var profile= JSON.parse(localStorage.getItem('profile'));  
        // this.setState({ profile: profile })
        console.log(this.state.userName);
        // console.log(profile);
    }

    
    render() {
     
        return (
     
            <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
                <Sidebar />

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

                    <UserNav />

                    <div>
                        <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
                            <div className="container py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col col-lg-6 mb-4 mb-lg-0">
                                        <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                                            <div className="row g-0">
                                                <div
                                                    className="col-md-4 gradient-custom text-center text-white"
                                                    style={{
                                                        borderTopLeftRadius: ".5rem",
                                                        borderBottomLeftRadius: ".5rem"
                                                    }}
                                                >
                                                    <img
                                                        src={pic}
                                                        alt="Avatar"
                                                        className="img-fluid my-5"
                                                        style={{ width: 80 ,borderRadius: "40px"}}
                                                    />
                                                    <h5>{this.props.profile?this.props.profile.userName:"Name"}</h5>
                                                    <p>{this.props.profile.employment}</p>
                                                    {/* <i className="far fa-edit mb-5" /> */}
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body p-4">
                                                        <h6>Information</h6>
                                                        <hr className="mt-0 mb-4" />
                                                        <div className="row pt-1">

                                                            <div className="col-6 mb-3">
                                                                <h6>Name</h6>
                                                                <p className="text-muted">{this.props.profile.firstName}</p>
                                                            </div>

                                                            <div className="col-6 mb-3">
                                                                <h6>LastName</h6>
                                                                <p className="text-muted">{this.props.profile.lastName}</p>
                                                            </div>

                                                            <div className="col-6 mb-3">
                                                                <h6>Employment</h6>
                                                                <p className="text-muted">{this.props.profile.employment}</p>
                                                            </div>

                                                            <div className="col-6 mb-3">
                                                                <h6>Aadhar No</h6>
                                                                <p className="text-muted">{this.props.profile.aadharcard}</p>
                                                            </div>

                                                        </div>


                                                        <h6>Contact</h6>
                                                        <hr className="mt-0 mb-4" />
                                                        <div className="row pt-1">
                                                            <div className="col-6 mb-3">
                                                                <h6>Email</h6>
                                                                <p className="text-muted">{this.props.profile.email}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Phone</h6>
                                                                <p className="text-muted">{this.props.profile.contactNo}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Address</h6>
                                                                <p className="text-muted">{this.props.profile.address}</p>
                                                            </div>
                                                        </div>
                                                        {/* <div className="d-flex justify-content-start">
                                                    <a href="#!">
                                                        <i className="fab fa-facebook-f fa-lg me-3" />
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-twitter fa-lg me-3" />
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-instagram fa-lg" />
                                                    </a>
                                                </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                </div>
            </div>


        )
    }
}
function mapStatetoProps(state) {
    console.log(state.customer)
    const {profile}=state.customer
    console.log(profile)
    return {
       profile
    }
}

export default connect(mapStatetoProps)(Profile);