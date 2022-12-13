import React, { Component } from 'react'
import '../Components/signin.css'
import log from '../Components/resouces/img/log.svg'
import register from "../Components/resouces/img/register.svg"
import { connect } from 'react-redux'
import { AuthUser, GetUser, RegisterUser } from '../Action/AuthenticationAction';


class Signin extends Component {


    Change = () => {

        var container1 = document.getElementById("con");
        if (container1.className == "container1 sign-up-mode") {
            container1.className = "container1";
        }
        else {
            container1.className = "container1 sign-up-mode";
        }

    }

    constructor() {
        super();
        this.state = {
            flag: false,
            jwt: "",
            
        }
    }



    componentDidUpdate() {

        if (this.props.user) {
           
            let user = this.props.user;
            console.log(this.props.user.role);
            if (user.role == "USER") {
                // alert("user");
                localStorage.setItem("user", JSON.stringify(this.props.user))
                window.location.href = "/userhome";
                
            }
            else if (user.role == 'MANAGER') {
                // alert("manager");
                window.location.href = "/managerhome"
                
            }                 
            
        }
       

        if (this.props.token.length > 0 && this.state.flag) {

            console.log("inside if", this.props.token)
            this.props.dispatch(GetUser(this.props.token))
            this.setState({ flag: false })

        }
    }

    authuser = { username: "", password: "" }

    onSignIn = () => {
        // alert(this.authuser.username);
        localStorage.clear();
        this.authuser.username=document.getElementById("name").value;
        this.authuser.password=document.getElementById("pass").value;

        console.log(this.authuser)
        console.log(this.authuser.username+" "+this.authuser.password);

        this.props.dispatch(AuthUser(this.authuser));
        this.setState({ flag: true })
    }

    registeruser = { username: "", email: "", password: "", role: "USER" }

    onSignUp = () => {
        localStorage.setItem('registerUserName',JSON.stringify(this.registeruser.username));
        console.log(this.registeruser);
        localStorage.setItem("user", JSON.stringify(this.registeruser))
        this.props.dispatch(RegisterUser(this.registeruser))
        window.location.href="/createprofile"
    }

    render() {

        return (
            <div className="container1" id='con'>
                <div className="forms-container1">
                    <div className="signin-signup">
                        <form className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Username"
                                id='name'
                                    // onChange={e => this.authuser.username = e.target.value}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Password"
                                id='pass'
                                    // onChange={e => this.authuser.password = e.target.value}
                                />
                            </div>
                            <input type="submit" defaultValue="Login" className="btn solid" onClick={this.onSignIn} />
                            {/* <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
                        </form>
                        <form action='/createprofile' className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Username"
                                    onChange={e => this.registeruser.username = e.target.value}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope" />
                                <input type="email" placeholder="Email"
                                    onChange={e => this.registeruser.email = e.target.value}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Password"
                                    onChange={e => this.registeruser.password = e.target.value}

                                />
                            </div>
                            <input type="submit" className="btn" defaultValue="Sign up" onClick={this.onSignUp} />
                            {/* <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
                        </form>
                    </div>

                </div>
                <div className="panels-container1">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={this.Change}>
                                Sign up
                            </button>
                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={this.Change}>
                                Sign in
                            </button>
                        </div>
                        <img src={register} className="image" alt="" />
                    </div>
                </div>
            </div>


        )

    }
}

function mapStatetoProps(state) {
    console.log(state)
    const token = state.jwt.jwt
    const user = state.jwt.user
    return {
        token, user
    };
}

export default connect(mapStatetoProps)(Signin);