import React, { Component } from 'react'
import { Sidebar, UserNav } from '../userHome'
import { connect } from 'react-redux';
import { GetAccounts, GetTransactions } from '../../../Action/CustomerAction';
import { Button } from 'semantic-ui-react';
import '../SubComponents/Transhistory.css';
import { RiFileDownloadLine } from 'react-icons/ri'
import jsPDF from "jspdf";
import "jspdf-autotable";



class TransactionHistory extends Component {


    state = {
        accno: 0,
        showmodel: false
    }

    accounts = []

    componentDidMount() {
        // alert("transhis");

        this.accounts = JSON.parse(localStorage.getItem("accounts"));
        this.setState({ accno: this.accounts[0].accountNo })
        this.props.dispatch(GetTransactions(this.accounts[0].accountNo));
        console.log(this.accounts)
    }

    show = (e) => {
        e.preventDefault();
        this.setState({ showmodel: this.state.showmodel ? false : true });

        // alert(this.state.showmodel)
    }

    Change = (acc) => {
        this.props.dispatch(GetTransactions(acc));
        this.setState({ showmodel: this.state.showmodel ? false : true });
        this.setState({ accno: acc })
    }

    From = ""
    To = ""

    pdfList = []
    FromTo = () => {

        this.pdfList=[]

        console.log("cur status"+this.pdfList)

        var transaction = this.props.transactions;
        console.log(this.From + "  " + this.To)
        console.log(transaction)

        //From
        var year = "";
        var month = "";
        var date = "";
        var i;
        var k;

        for (i = 0; i < this.From.length; i++) {

            if (this.From.charAt(i) == "-") {

                break;
            }
            year = year + this.From.charAt(i);

        }

        for (k = i + 1; k < this.From.length; k++) {

            if (this.From.charAt(k) == "-") {

                break;
            }
            month = month + this.From.charAt(k);
        }


        for (var j = k + 1; j < this.From.length; j++) {
            date = date + this.From.charAt(j);

        }
        console.log("From year:" + year + "* month" + month + "* date" + date)

        //To
        var Toyear = "";
        var Tomonth = "";
        var Todate = "";
        var i;
        var k;

        for (i = 0; i < this.To.length; i++) {

            if (this.To.charAt(i) == "-") {

                break;
            }
            Toyear = Toyear + this.To.charAt(i);

        }

        for (k = i + 1; k < this.To.length; k++) {

            if (this.To.charAt(k) == "-") {

                break;
            }
            Tomonth = Tomonth + this.To.charAt(k);
        }


        for (var j = k + 1; j < this.To.length; j++) {
            Todate = Todate + this.To.charAt(j);

        }
        console.log("To year:" + Toyear + "* month" + Tomonth + "* date" + Todate)

        for (const element of transaction) {
            // console.log(element.time.length);

            var curyear = "";
            var curmonth = "";
            var curdate = "";
            var i;
            var k;

            for (i = 0; i < element.time.length; i++) {

                if (element.time.charAt(i) == "/") {

                    break;
                }
                curyear = curyear + element.time.charAt(i);

            }

            for (k = i + 1; k < element.time.length; k++) {

                if (element.time.charAt(k) == "/") {

                    break;
                }
                curmonth = curmonth + element.time.charAt(k);
            }


            for (var j = k + 1; j < element.time.length; j++) {

                curdate = curdate + element.time.charAt(j);
            }
            // console.log("cur year:" +curyear +"* month"+curmonth+"* date"+curdate)

            // alert(parseInt(year)<parseInt(curyear))

            if ((parseInt(year) < parseInt(curyear) || parseInt(year) == parseInt(curyear)) && parseInt(curyear) <= parseInt(Toyear)) {
                // alert("into year",curmonth);
                if ((parseInt(month) < parseInt(curmonth) || parseInt(month) == parseInt(curmonth)) && parseInt(curmonth) <= parseInt(Tomonth) ) {
                    // alert("into month",curdate,"  ",parseInt(Todate) > parseInt(curdate));
                    if ((parseInt(date) < parseInt(curdate) || parseInt(date) == parseInt(curdate)) && parseInt(curdate) <= parseInt(Todate)) {
                        // alert("date");
                        console.log("cur year:" + curyear + "* month" + curmonth + "* date" + curdate);
                        // console.log(element);
                        
                        this.pdfList.push(element);
                    }


                }
            }

        }

        console.log(this.pdfList)

    }



    exportPDF = () => {

        this.FromTo()

        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const accno=this.state.accno;


        doc.setFontSize(15);

        const title = "EASYBANK";
        const line="---------------------------------------------------------------------------------------------------";
        const account="Account number : "+accno;


        const headers = [["transactionId", "transactionType","subType","amount","source","status","time","balance"]];

        const data = this.pdfList.map(item => [item.transactionId,item.transactionType,item.subType,item.amount,item.source,item.status,item.time,item.balance]);

        let content = {
            startY: 90,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.text(line,marginLeft,50)
        doc.text(account, marginLeft, 65);
        doc.text(line,marginLeft,75)
        doc.autoTable(content);
        doc.save("statement.pdf");

    }

    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <Sidebar />

                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

                        <UserNav />


                        <div >


                            <div style={{ padding: "3% 50px" }}>

                                <div style={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    justifyContent:"space-between",
                                    padding:"5px"
                                }}>
                                    <div onClick={this.show}>
                                        <h2>Account No :<i class="sort down icon" style={{ fontSize: "28px" }}></i> {this.state.accno}</h2>
                                    </div>
                                    <div class="ui labeled input">
                                        <div class="ui label">
                                            From
                                        </div>
                                        <input type="date" placeholder="From" onChange={(e) => this.From = e.target.value} />
                                    </div>

                                    <div class="ui labeled input">
                                        <div class="ui label">
                                            To
                                        </div>
                                        <input type="date" placeholder="To" onChange={e => this.To = e.target.value} />
                                    </div>
                                    <Button onClick={this.exportPDF} style={{ marginLeft: "50px" }}><div style={{ display: "flex" }}><RiFileDownloadLine></RiFileDownloadLine> Download</div></Button>

                                </div>
                             
                                <div className="table table-striped table-hover overlay"
                                    style={{
                                        width: this.state.showmodel ? "180px" : "0px",
                                        height: this.state.showmodel ? "fit-content" : "0px",
                                        backgroundColor: "white", overflow: "hidden",
                                        position: "absolute",
                                        margin: "0px",
                                        marginLeft: "11.5%",
                                        boxShadow: "5px 5px 15px black"
                                    }} >
                                    <div>

                                        {this.accounts?.map((item, index) =>

                                            <div className='accountNo' onClick={() => { this.Change(item.accountNo) }}>{item.accountNo}</div>

                                        )}

                                    </div>
                                </div>
                                <div style={{height:"70vh",overflow:"scroll",overflowX:"hidden"}}>
                                <table className="table table-striped table-hover">

                                    <thead className="table">
                                        <tr>
                                            <th scope="col" >SI.no</th>
                                            <th scope="col" >transactionId</th>
                                            <th scope="col">Transaction Type</th>
                                            <th scope="col">Sub Type</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Source</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.props.transactions?.map((item, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.transactionId}</td>
                                                <td>{item.transactionType}</td>
                                                <td>{item.subType}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.source}</td>
                                                <td>{item.status}</td>
                                                <td>{item.time}</td>
                                                <td>{item.balance}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
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
    console.log(state);
    const { accounts } = state.customer
    const { transactions } = state.customer
    return {
        accounts, transactions
    };
}
export default connect(mapStatetoProps)(TransactionHistory);