import React, { Component, useEffect, useState } from 'react'

import '../User/userHome.css'
import '../User/sliderNav.css'
import help from '../User/resource/images/help.png';
import pic from '../User/resource/images/pic.jpg';
import logo from '../User/resource/images/logo3.png'
import profile from '../User/resource/images/profile.png'
import setting from '../User/resource/images/setting.png'
import logout from '../User/resource/images/logout.png'
import p1 from "../User/resource/images/Home loan.jpg";
import p2 from "../User/resource/images/Internet banking.jpg";
import p3 from "../User/resource/images/credit card.jpg"
import { NavLink } from 'react-router-dom';
import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaThList,
    FaHistory
} from "react-icons/fa";
import { SiProbot } from 'react-icons/si'
import { CgArrowsExchange } from 'react-icons/cg'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { GiTakeMyMoney, GiMoneyStack } from 'react-icons/gi'
import HelperBot from './chatBot';
import Accounts from './SubComponents/accounts';
import { GetProfile } from '../../Action/CustomerAction';
import { connect, useSelector } from 'react-redux';
import CreateAccount from './SubComponents/createAccount';



export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openChatBot, setOpenChatBot] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/userhome",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/transaction",
            name: "Transactions",
            icon: <CgArrowsExchange size={25} />
        },
        {
            path: "/deposit",
            name: "Deposit",
            icon: <FaRegChartBar />
        },
        {
            path: "/loan",
            name: "Loan",
            icon: <GiTakeMyMoney size={25} />
        },
        {
            path: "/transhistory",
            name: "Transtion History",
            icon: <FaHistory />
        },
        // {
        //     path: "/inverst",
        //     name: "Invest",
        //     icon: <GiMoneyStack size={25} />
        // },
        {
            path: "/mail",
            name: "Others",
            icon: <BsFillEnvelopeFill />
        },

    ]
    return (

        <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
            <div style={{ display: "flex" }}>
                <div style={{ maxWidth: "250px" }}>
                    <div className="top_section" style={{padding: isOpen ? "10.3px" : "28.5px"}}>
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Menu</h1>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>


                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text" >{item.name}</div>
                            </NavLink>

                        ))
                    }
                    <div style={{ display: "flex" }} onClick={() => setOpenChatBot(!openChatBot)}>
                        <div className='icon' style={{ padding: "15px" }} ><SiProbot size={25} />
                        </div>
                        <div style={{ padding: "17px 2px ", fontSize: "18px" }}>
                            Help
                        </div>

                    </div>
                </div>

                <div className='chatbot'>
                    <HelperBot value={openChatBot} />
                </div>


            </div>



        </div>


    );
};








export const UserNav = () => {


    const [name,setName]=useState("PROFILE");
    // const profile = useSelector((state) => state.profile)

    // useEffect(()=>{
    //     profile = JSON.parse(localStorage.getItem("profile"));
    //     console.log(profile);
    //     setName(profile.firstName);
    // },[])

    const GetName=()=>{
     
        profile = JSON.parse(localStorage.getItem("profile"));
        console.log(profile);
        setName(profile.firstName);
    }

    const ToggleMenu = () => {
        var menu = document.getElementById("subMenu");
        if (menu.className == "sub-menu-wrap open-menu") {
            menu.className = "sub-menu-wrap"
        }
        else {
            menu.className = "sub-menu-wrap open-menu";
            GetName();
        }
    }

    const Logout =()=>{
        localStorage.removeItem("accounts");
        localStorage.removeItem("user");
        localStorage.removeItem("profile");
        localStorage.setItem("profile",JSON.stringify(profile={firstName:"Profile"}))
        window.location.href="/";
    }

    return (

        <div className="hero">
            <nav style={{backgroundColor:"#4481eb"}} > 
                <img src={logo} className="logo" />
                <ul>
                    <li><a href="/userhome">Home</a></li>
                    <li><a href="/createaccount">Create Account</a></li>
                    {/* <li><a href="#">About</a></li> */}
                    <li><a style={{color:"white"}} onClick={()=>Logout()}>logout</a></li>
                </ul>
                <img src={pic} className="user-pic" onClick={() => ToggleMenu()} />
                <div className="sub-menu-wrap" id="subMenu">
                    <div className="sub-menu">
                        <div className="user-info">
                            <img src={pic} />
                            <h2>{name}</h2>
                        </div>
                        <hr />
                        <a href="/profile" className="sub-menu-link">
                            <img src={pic} />
                            <p>Profile</p>
                            <span>&gt;</span>
                        </a>
                        <a href="/updateprofile" className="sub-menu-link">
                            <img src={setting} />
                            <p>View &amp; Update Profile</p>
                            <span>&gt;</span>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={help} />
                            <p>Help &amp; Support</p>
                            <span>&gt;</span>
                        </a>
                        <div className="sub-menu-link" onClick={()=>Logout()}>
                            <img src={logout} />
                            <p>Logout</p>
                            <span>&gt;</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}


export const Carousel=()=>{

    return(
        <div >
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                 </ol>
                 <div class="carousel-inner">

                <div class="carousel-item active">
                         <img class="d-block w-100" src={p1} height="350px" alt="First slide" />
                         <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                                  <h4>Home Loans</h4>
                                  <p>at 18% interst</p>
                          </div>
                </div>

                <div class="carousel-item">
                          <img class="d-block w-100" src={p2} height="350px" alt="Second slide"/>
                          <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                                  <h4>Internet banking</h4>
                                  <p>banking at fingertips</p>
                          </div>
                </div>

                <div class="carousel-item">
                        <img class="d-block w-100" src={p3} height="350px" alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block" style={{color:"black"}} >
                                  <h4>Credit Cards</h4>
                                  <p>Buy Now, Pay Later</p>
                          </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="sr-only">Previous</span>
             </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="sr-only">Next</span>
              </a>
          </div>
        </div>
        
    )
}


class UserHome extends Component {

  

    
 
    render() {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar />

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >
                    
                    <UserNav />
                    <div style={{padding:"20px"}}>
                    <Carousel/>
                    </div>
                   
                    <Accounts/>
                    
                    
                </div>
            </div>
        )
    }
}
function mapStatetoProps(state) {
    
    return {
     
    };
}
export default connect(mapStatetoProps)(UserHome);