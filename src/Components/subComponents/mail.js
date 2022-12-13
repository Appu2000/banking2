import React, { Component } from 'react'
import { ManagerNav } from '../Manager/managerHome'
import pic from '../User/resource/images/pic.jpg'
import './mail.css'
import { connect } from 'react-redux'
import { GetAllRequest } from '../../Action/ManagerAction'
import { CreateRequest } from '../../Action/CustomerAction'

class Mail extends Component {

    constructor() {
        super();
        this.state = {
            sender: "",
            header: "",
            content: "",
            status: "",
        }
    }

    componentDidMount() {
        this.props.dispatch(GetAllRequest());
    }

    selectedElement = {}
    Select = (id) => {
        // alert("id" + id)
        var list = this.props.request;
        console.log("list", list);
        for (const element of list) {
            if (element.id == id) {
                console.log(element)
                this.selectedElement = element;
                this.setState({ sender: element.sender });
                this.setState({ header: element.header });
                this.setState({ content: element.content });
                this.setState({ status: element.status })
            }
        }
    }

    Accept = () => {
        if (this.selectedElement.sender.length > 0) {
            this.selectedElement.status = "accepted";
            console.log(this.selectedElement);
            this.props.dispatch(CreateRequest(this.selectedElement));
            window.location.reload();
        }
    }

    Reject = () => {
        if (this.selectedElement.sender.length > 0) {
            this.selectedElement.status = "rejected"
            console.log(this.selectedElement)
            this.props.dispatch(CreateRequest(this.selectedElement))
            window.location.reload();
        }
    }
    render() {
        return (
            <div>
                <ManagerNav />
                {/*  */}
                <div>
                    <div style={{ width: "100%", height: "85vh", padding: "25px" }}>
                        <div style={{ display: "flex" }}>

                            <div style={{ backgroundColor: "#3347b2", height: "80vh", width: "40%", overflow: "scroll" }}>
                                <h1 style={{ paddingLeft: "20px", paddingTop: "10px", color: "white" }}>Inbox</h1>
                                {this.props.request?.map((item) => {
                                    return (
                                        <div style={{ padding: "0px" }}>
                                            <div className="mailbox" onClick={() => this.Select(item.id)}>

                                                <div className='avatar'>
                                                    <img src={pic} style={{ width: "55px", height: "55px", borderRadius: "100px", marginTop: "12px", marginLeft: "5px" }} />
                                                </div>
                                                <div className='content'>
                                                    <p style={{ padding: "0px 8px", paddingTop: "7px", fontSize: "16px" }}>{item.sender}</p>
                                                    <p style={{ padding: "0px 8px", fontSize: "13px", paddingBottom: "12px" }}>{item.header}</p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}

                            </div>
                            <div style={{ width: "100%", heigth: "80vh", backgroundColor: "white", border: "1px solid black" }}>
                                <div style={{ padding: "25px" }}>
                                    <div style={{ height: "75px", fontSize: "32px" }}>
                                        <p ><b>From : </b>{this.state.sender} </p>
                                        <hr />
                                    </div>

                                    <div style={{ backColor: "purple", fontSize: "20px", padding: "20px", textAlign: "center" }}>
                                        <b> Subject : </b>{this.state.header}
                                    </div>

                                    <div style={{ height: "40vh", paddingTop: "25px" }}>
                                        <p style={{ fontSize: "18px" }}>{this.state.content}</p>
                                    </div>
                                </div>
                                <div >
                                    <h3 style={{ textAlign: "center", color: "white", margin: "20px", backgroundColor: this.state.status == 'rejected' ? "#d01919" : "#16ab39" }}>{this.state.status}</h3>
                                </div>
                                <div style={{textAlign: "right"}}>
                                    <button className="negative ui button" style={{padding:"8px",borderRadius:"5px"}} onClick={this.Reject}>Reject</button>
                                    <button className="positive ui button" style={{padding:"8px",borderRadius:"5px"}} onClick={this.Accept}>Accept</button>
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
    console.log(state.manager);
    const { request } = state.manager
    return {
        request
    }
}

export default connect(mapStatetoProps)(Mail);