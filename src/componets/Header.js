import React, { useEffect } from "react";
import Hdcall from "../Assets/images/hd-call.png"
import logo1 from "../Assets/images/logo1.png"
import hdmes from "../Assets/images/hd-mssg.png"
import { Link, NavLink } from "react-router-dom";


function Header({ state }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    window.document.title = "SASP - Home Page"
  });

  return (
    <>
      <header class="">
        <div class="container-fluid">
          <div class="header-inr">
            <div class="header-top">
              <div class="logo"><Link to="/"><img src={logo1} alt="" /></Link></div>
              <div class="header-cont">
                <div class="hdcont-box">
                  <img src={Hdcall} alt="" />
                  <div class="hdcont-txt">
                    <p>Make a Call</p>
                    <a href={`tel:${state?.footer?.phone}`}>
                      <span>{state?.footer?.phone}</span></a>
                  </div>
                </div>
                <div class="hdcont-box">
                  <img src={hdmes} alt="" />
                  <div class="hdcont-txt">
                    <p>E-mail Us</p>
                    <a href={`mailto:${state?.footer?.email}`}><span>{state?.footer?.email}</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-bottom">
              <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link" to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/product-listing">Products</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/brands">Brands</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div class="hbtm-r8">
                <Link to="">Enquiry Now </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )

}

export default Header

