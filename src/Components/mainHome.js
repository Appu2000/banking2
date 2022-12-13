import React, { Component } from 'react'
import '../Components/mainHome.css'
import demologo from '../Components/resouces/images/logo3.png'
import home from '../Components/resouces/images/home2.png'
import wave1 from '../Components/resouces/images/wave1.png'
import loan from '../Components/resouces/images/loan.jpg'
import study from '../Components/resouces/images/study.png.svg'
import images from '../Components/resouces/images/images.png'
import network from '../Components/resouces/images/network.png'
import facebook from '../Components/resouces/images/facebook-icon.png'
import instagram from '../Components/resouces/images/instagram-icon.png'
import twitter from '../Components/resouces/images/twitter-icon.png'
import whatsapp from '../Components/resouces/images/whatsapp-icon.png'
import linkedin from '../Components/resouces/images/linkedin-icon.png'
import snapchat from '../Components/resouces/images/snapchat-icon.png'
import easytube from '../Components/resouces/img/icontude.jpg'
import cashback from '../Components/resouces/img/cashback.jpg'
import creditcard from '../Components/resouces/img/creditcard.jpg'



export const Nav = () => {
    return (
        <div>
            <section id="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={demologo} style={{ height: "55px", padding: "5px 15px" }} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" >
                            <ul className="navbar-nav ml-auto" style={{ justifyContent: "right" }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#top">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-us">About us</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#social-media">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login"> Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </div>
    )
}




export default class MainHome extends Component {


    render() {
        return (
            <div>
                <Nav />
                {/* Banner section */}
                <section id="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="promo-title">Most Trustworthy Bank </p>
                                <p>
                                    Digital banking (online and mobile banking) makes managing finances easy. With digital banking technology, you can pay bills, deposit checks and transfer money from wherever you’re located.
                                </p>
                                <a href="/login" class="express">Get Started</a>
                            </div>
                            <div className="col-md-6">
                                <img src={home} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <img src={wave1} className="bottom-img" />
                </section>
                {/* Services Section  */}
                <section id="services">
                    <div className="container text-center">
                        <h1 className="title">What We Do...?</h1>
                        <div className="row text-center">
                            <div className="col-md-4 services">
                                <img src={study} className="service-img" />
                                <h4>Saving Account</h4>
                                <p>
                                    Savings account provides a safe place to put cash and can help you save money for a specific goal
                                </p>
                            </div>
                            <div className="col-md-4 services">
                                <img src={images} className="service-img" />
                                <h4>Gold Loan</h4>
                                <p>
                                    As per the current rates, our Easy Bank provides the lowest interest for a gold loan starting at 7.60%.
                                </p>
                            </div>
                            <div className="col-md-4 services">
                                <img src={loan} className="service-img" />
                                <h4>Personal Loan</h4>
                                <p>
                                    A loan that does not require collateral or security and is offered with minimal documentation.
                                </p>
                            </div>
                            {/* <button  type="button" className="btn btn-primary">All Services</button> */}
                        </div>
                    </div>
                </section>

                {/* Offers */}

                <section id="services">
                    <div className="container text-center">
                        <h1 className="title">What We Offering...?</h1>
                        <div className="row text-center">
                           

                            <div className="col-md-4 services">
                                <h2>Debit/Credit Card Transactions</h2>
                                <h1>25<span>%off</span></h1>
                                <img src={creditcard}  className="service-img" />
                                <h4>Discount on every purchase</h4>
                                <p>
                                    Our banks, gives Upto 25% discount on every online Purchase (min purchase 1000Rs)
                                </p>
                                {/* <button>Know More</button> */}
                                {/* <div class="ribbon">Special Offer!</div> */}
                            </div>

                            <div className="col-md-4 services">
                                <h2>Easy Prime Access</h2>
                                <h1>10<span>%off</span></h1>
                                <img src={easytube}  className="service-img" />

                                <h4>EasyTude</h4>
                                <p>
                                EasyTude is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device.                                </p>
                                {/* <button>Know More</button> */}

                                {/* <div class="ribbon">Special Offer!</div> */}
                            </div>

                            <div className="col-md-4 services">
                                <h2>Cashback</h2>
                                <h1>10<span>%</span></h1>
                                <img src={cashback} className="service-img" />
                                <h4>Cashback offer</h4>
                                <p>
                                    Get a Cashback of 10% on your first 5 payments like(electricity,waterbill,recharge) using our bank Application
                                </p>
                                {/* <button>Know More</button> */}
                                {/* <div class="ribbon">Special Offer!</div> */}
                            </div>
                            {/* <button  type="button" className="btn btn-primary">All Services</button> */}
                        </div>
                    </div>
                </section>
                {/* About us */}
                <section id="about-us">
                    <div className="container">
                        <h1 className="title text-center">Why Choose Us...?</h1>
                        <div className="row">
                            <div className="col-md-6 about-us">
                                <p className="about-title">
                                    Why We're different
                                </p>
                                <ul>

                                    <li>We focus on you and your family's financial health.</li>
                                    <li>Our dedicated security team and 24/7 surveillance system means that we are always on guard to anticipate, address and help prevent fraud.</li>
                                    <li>We're constantly developing new, better ways to secure your data and create seamless digital banking experiences.</li>
                                    <li>keep your financial and personal details out of the hands of hackers</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <img src={network} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Social Media section */}
                <section id="social-media" >
                    <div className="container text-center">
                        <p>Find Us On Social Media</p>
                        <div className="social-icons">
                            <a href="#"><img src={facebook} /></a>
                            <a href="#"><img src={instagram} /></a>
                            <a href="#"><img src={twitter} /></a>
                            <a href="#"><img src={whatsapp} /></a>
                            <a href="#"><img src={linkedin} /></a>
                            <a href="#"><img src={snapchat} /></a>
                        </div>
                    </div>
                </section>
                <section>
                    {/* <img src={wave2} className="bottom-img"  style={{backgroundColor:"#180041"}}/> */}
                    <footer className="sticky-footer">
                        {/* <h2>Footer Stick to the Bottom</h2> */}
                        <ul>
                            <li><a href="#top">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            {/* <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Articles</a></li> */}
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <p> © Copyright EasyBank 2022.</p>
                    </footer>
                </section>
            </div>

        )
    }
}
