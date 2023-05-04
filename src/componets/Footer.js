import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import footcall from "../Assets/images/foot-call.png"
import footmail from "../Assets/images/foot-mail.png"
import logo1 from "../Assets/images/logo1.png"
import { ApiGetNoAuth } from "../Api/Api";

function Footer() {
    const [state, setState] = useState();

    useEffect(() => {
        ApiGetNoAuth("footer")
        .then((res) => {
            setState(res?.data?.result)
        })
        .catch((err) => console.log("AData", err))
    }, []);

    return (
        <>

            <footer>
                <div class="footer-inr">
                    <div class="footer-top">
                        <div class="container">
                            <div class="foot-top-inr d-flex justify-content-start align-items-start">
                                <div class="ft-left">
                                    <div class="foot-logo"><a href="#"><img src={logo1} alt="" /></a></div>
                                    <p>
                                    {state?.footer?.footer_desc}
                                   </p>
                                    <ul class="d-flex justify-content-start align-items-center">
                                        <li><Link to={state?.footer?.facebook_link} target='_'> <i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                        <li><Link to={state?.footer?.twitter_link} target='_'><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                        <li><Link to={state?.footer?.instagram_link} target='_'><i class="fa fa-google" aria-hidden="true"></i></Link></li>
                                        <li><Link to={state?.footer?.pinterest_link} target='_'><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                        <li><Link to={state?.footer?.youtube_link} target='_'><i class="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                                <div class="ft-mid d-flex justify-content-between align-items-start flex-wrap">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/Brands">Popular Brands</Link></li>
                                        <li><Link to="/About">About Us</Link></li>
                                        <li><Link to="/Testimonials">Testimonials</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link to="/product-listing">Our Products</Link></li>
                                        <li><Link to="/contact-us">Contact Us</Link></li>
                                        <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                                <div class="ft-right">
                                    <h3>Contact Info</h3>
                                    <ul>
                                        <li><p>
                                        {state?.footer?.address}
                                     
                                        </p></li>
                                        <li class="d-flex justify-content-start align-items-start">
                                            <img src={footcall} alt="" />
                                            <p><a href="#">{state?.footer?.phone}</a></p>
                                        </li>
                                        <li class="d-flex justify-content-start align-items-start">
                                            <img src={footmail} alt="" />
                                            <p><a href="#">{state?.footer?.email}</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copy">
                        <div class="container">
                            <p>Copyright © 2023 <Link to="/">sapsgroup.in</Link> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer