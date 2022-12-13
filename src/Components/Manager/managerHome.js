import React, { Component, useEffect, useState } from 'react'

import '../Manager/managerhome.css'

import help from '../User/resource/images/help.png';
import pic from '../User/resource/images/pic.jpg';
import logo from '../User/resource/images/logo3.png'

import setting from '../User/resource/images/setting.png'
import logout from '../User/resource/images/logout.png'

import { connect, useSelector } from 'react-redux';




// export const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [openChatBot, setOpenChatBot] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);

//     const menuItem = [
//         {
//             path: "/userhome",
//             name: "Dashboard",
//             icon: <FaTh />
//         },
//         {
//             path: "/transaction",
//             name: "Transactions",
//             icon: <CgArrowsExchange size={25} />
//         },
//         {
//             path: "/deposit",
//             name: "Deposit",
//             icon: <FaRegChartBar />
//         },
//         {
//             path: "/loan",
//             name: "Loan",
//             icon: <GiTakeMyMoney size={25} />
//         },
//         {
//             path: "/transhistory",
//             name: "Transtion History",
//             icon: <FaHistory />
//         },
//         // {
//         //     path: "/inverst",
//         //     name: "Invest",
//         //     icon: <GiMoneyStack size={25} />
//         // },
//         {
//             path: "/mail",
//             name: "Others",
//             icon: <BsFillEnvelopeFill />
//         },

//     ]
//     return (

//         <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
//             <div style={{ display: "flex" }}>
//                 <div style={{ maxWidth: "250px" }}>
//                     <div className="top_section" style={{padding: isOpen ? "10.3px" : "24.4px"}}>
//                         <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Menu</h1>
//                         <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
//                             <FaBars onClick={toggle} />
//                         </div>
//                     </div>


//                     {
//                         menuItem.map((item, index) => (
//                             <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                                 <div className="icon">{item.icon}</div>
//                                 <div style={{ display: isOpen ? "block" : "none" }} className="link_text" >{item.name}</div>
//                             </NavLink>

//                         ))
//                     }
//                     <div style={{ display: "flex" }} onClick={() => setOpenChatBot(!openChatBot)}>
//                         <div className='icon' style={{ padding: "15px" }} ><SiProbot size={25} />
//                         </div>
//                         <div style={{ padding: "17px 2px ", fontSize: "18px" }}>
//                             Help
//                         </div>

//                     </div>
//                 </div>

//                 <div className='chatbot'>
//                     <HelperBot value={openChatBot} />
//                 </div>


//             </div>



//         </div>


//     );
// };








export const ManagerNav = () => {
 

    

    const ToggleMenu = () => {
        var menu = document.getElementById("subMenu");
        if (menu.className == "sub-menu-wrap open-menu") {
            menu.className = "sub-menu-wrap"
        }
        else {
            menu.className = "sub-menu-wrap open-menu";
            // GetName();
        }
    }

    // const Logout =()=>{
    //     localStorage.removeItem("accounts");
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("profile");
    //     localStorage.setItem("profile",JSON.stringify(profile={firstName:"Profile"}))
    //     window.location.href="/";
    // }

    return (

        <div className="hero">
            <nav >
                <img src={logo} className="logo" />
                <ul>
                    <li><a href="/managerhome">Home</a></li>
                    <li><a href="/request">Requests</a></li>
                    <li><a href="/manageacc">Manage Account</a></li>
                    <li><a href="/profileUpdate">Profile Update</a></li>
                    {/* <li><a href="#">About</a></li> */}
                    <li><a style={{color:"white"}} href="/">logout</a></li>
                </ul>
                <img src={pic} className="user-pic" onClick={() => ToggleMenu()} />
                <div className="sub-menu-wrap" id="subMenu">
                    <div className="sub-menu">
                        <div className="user-info">
                            <img src={pic} />
                            <h2>Profile</h2>
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
                        <a href='/' className="sub-menu-link">
                            <img src={logout} />
                                <p>Logout</p> 
                            <span>&gt;</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    )
}




class ManagerHome extends Component {

  

    
 
    render() {
        return (
            <div style={{ display: "flex" }}>
                {/* <Sidebar /> */}

                <div style={{ display: "flex", flexDirection: "column", width: "100%" }} >

                  <ManagerNav/>
                   
                    
                    
                </div>
            </div>
        )
    }
}
function mapStatetoProps(state) {
    
    return {
     
    };
}
export default connect(mapStatetoProps)(ManagerHome);