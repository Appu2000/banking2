import React, { Component } from 'react'
import { Sidebar, UserNav } from '../userHome'
import '../SubComponents/mailform.css'
import { CreateRequest } from '../../../Action/CustomerAction';
import { connect } from 'react-redux';

class Mailform extends Component {

    // Long id;
    // private String sender;
    // private String header;
    // private String content;
    // private String status;


    mail={id:0,sender:"",header:"",content:"",status:"pending"}
    componentDidMount(){
        var user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        this.mail.sender=user.username;
        // this.props.dispatch(GetProfile(user.username));
    }

    onSubmit=()=>{
        // alert("work");
        console.log(this.mail)
        this.props.dispatch(CreateRequest(this.mail));
        window.location.reload();
    }


    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <Sidebar />

                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

                        <UserNav />
                        <div>
                            
                            <div >
                                <div className="email-app">
                                    <nav >
                                        <a href="#" className="btn btn-danger btn-block">New Email</a>
                                        <ul className="nav">
                                            {/* <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-inbox" />History <span className="badge badge-danger">4</span></a>
                                            </li> */}
                                            {/* <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-star" />history</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-inbox" />inbox</a>
                                            </li> */}
                                            {/* <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-trash-o" /> Trash</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-bookmark" /> Important</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-inbox" /> Inbox <span className="badge badge-danger">4</span></a>
                                            </li> */}
                                        </ul>
                                    </nav>
                                    <main className='main'>
                                        <p className="text-center">Request</p>
                                        <form>
                                            <div className="form-row mb-3" >
                                                <label htmlFor="to" className="col-2 col-sm-1 col-form-label"></label>
                                                <div className="col-10 col-sm-11">
                                                    <input type="text" style={{width:"500px",height:"50px"}} className="form-control" id="subject" placeholder="subject" onChange={e=>this.mail.header=e.target.value}/>
                                                </div>
                                            </div>
                                           
                                        </form>
                                        <div className="row">
                                            <div className="col-sm-11 ml-auto">
                                               
                                                <div className="form-group mt-4">
                                                    <textarea className="form-control" id="message" name="body" rows={12} placeholder="Click here to reply" defaultValue={""} onChange={e=>this.mail.content=e.target.value}/>
                                                </div>
                                                <div className="form-group">
                                                    <button  className="ui primary button" onClick={this.onSubmit}>Send</button>
                                                    {/* <button type="submit" className="btn btn-light">Draft</button> */}
                                                    <button  className="negative ui button" onClick={()=>{window.location.reload()}}>Discard</button>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
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
  
    };
  }
  
  export default connect(mapStatetoProps)(Mailform);
