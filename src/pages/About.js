import React, {useState, useEffect } from 'react'
import OwlCarousel from "react-owl-carousel"
import Aboutebg from "../Assets/images/about-bg.png"
import ac1 from "../Assets/images/ac1.png"
import ac2 from "../Assets/images/ac2.png"
import ac3 from "../Assets/images/ac3.png"
import wl1 from "../Assets/images/wl1.png"
import wl2 from "../Assets/images/wl2.png"
import num1 from "../Assets/images/num1.png"
import num2 from "../Assets/images/num2.png"
import num3 from "../Assets/images/num3.png"
import num4 from "../Assets/images/num4.png"
import whobg from "../Assets/images/whobg.png"
import ScrollTop from '../componets/ScrollTop'
import Share from '../componets/Home/Share'
import { Link } from 'react-router-dom'
import { ApiGetNoAuth } from '../Api/Api'
import Loader from '../componets/loader/Loader'
import gototop from "../Assets/images/go-to-top.png"



function About() {
const [state, setState] = useState();
const [loading, setLoading] = useState(false);


    useEffect(() => {
    setLoading(true)

        ApiGetNoAuth("about-us")
        .then((res) => {
     
          setState(res?.data?.result)
        })
        .catch((err) => console.log("AData", err))
        setLoading(false)
  
        window.scrollTo(0, 0)
        window.document.title = "SASP - About"
    },[]);
console.log("state",state);
    const major = {
        loop:state?.customerImages?.length >= 6 ? true : false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: -22
            },
            375: {
                items: 2,
                margin: -14
            },
            576: {
                items: 3,
                margin: -14
            },
            992: {
                items: 4,
                margin: -14
            },
            1200: {
                items: 5,
                margin: -14
            }
        }
    }
    return (
        <body>
        {loading && <Loader />}
            <Share />
            <section class="inner-banner">
                <img src=
                {state?.contentImageUrl + state?.aboutUs?.page_image}
                alt="" class="inr-bnr-img" />
                <div class="container">
                    <div class="inner-banner-text">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                        <h1 class="pr-deet">{state?.aboutUs?.main_heading}</h1>
                    </div>
                </div>
            </section>

            <section class="pro-list abt-main">
                <div class="container">
                    <div class="abt-company">
                        <div class="container">
                            <div class="abt-comp-head">
                                <h3>{state?.aboutUs?.mission_vision_title}</h3>
                                <p>{state?.aboutUs?.mission_vision_description}</p>
                            </div>
                            <div class="abt-comp-inr">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="abt-comp-box">
                                            <img src={ac1} alt="" class="ac-img" />
                                            <h4>{state?.aboutUs?.mission_vision_point1_h}</h4>
                                            <p>{state?.aboutUs?.mission_vision_point1_d}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="abt-comp-box">
                                            <img src={ac2} alt="" class="ac-img" />
                                            <h4>{state?.aboutUs?.mission_vision_point2_h}</h4>
                                            <p>{state?.aboutUs?.mission_vision_point2_d}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                        <div class="abt-comp-box">
                                            <img src={ac3} alt="" class="ac-img" />
                                            <h4>{state?.aboutUs?.mission_vision_point3_h}</h4>
                                            <p>{state?.aboutUs?.mission_vision_point3_d}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="who">
                <div class="whobg"><img src={whobg} alt="" /></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-6 col-md-12">
                            <div class="who-txt">
                                <h5>{state?.aboutUs?.who_we_are_title}</h5>
                                <h3>{state?.aboutUs?.who_we_are_heading}</h3>
                                <p>{state?.aboutUs?.who_we_are_desc}</p>
                                <div class="who-list">
                                    <ul class="d-flex justify-content-between align-items-start">
                                        <li>
                                            <div class="who-list-box">
                                                <div class="wl-box-top d-flex justify-content-start align-items-center flex-wrap">
                                                    <img src={wl1} alt="" />
                                                    <h4>{state?.aboutUs?.who_we_are_point1_h}</h4>
                                                </div>
                                                <p>{state?.aboutUs?.who_we_are_point1_d}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="who-list-box">
                                                <div class="wl-box-top d-flex justify-content-start align-items-center flex-wrap">
                                                    <img src={wl2} alt="" />
                                                    <h4>{state?.aboutUs?.who_we_are_point2_h}</h4>
                                                </div>
                                                <p>{state?.aboutUs?.who_we_are_point2_d}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="number">
                <div class="container">
                    <div class="number-inr d-flex justify-content-between align-items-center">
                        <div class="number-box">
                            <img src={num1} alt="" />
                            <div class="num-txt">
                                <h3>{state?.aboutUs?.total_project}</h3>
                                <p>Total Project</p>
                            </div>
                        </div>
                        <div class="number-box">
                            <img src={num2} alt="" />
                            <div class="num-txt">
                                <h3>{state?.aboutUs?.expert_employee}</h3>
                                <p>Expert Emplyed</p>
                            </div>
                        </div>
                        <div class="number-box">
                            <img src={num3} alt="" />
                            <div class="num-txt">
                                <h3>{state?.aboutUs?.trusted_brand}</h3>
                                <p>Trusted Brands</p>
                            </div>
                        </div>
                        <div class="number-box">
                            <img src={num4} alt="" />
                            <div class="num-txt">
                                <h3>{state?.aboutUs?.happy_client}</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="major-cust abt-major">
                <div class="container">
                    <div class="major-head">
                        <h2>{state?.aboutUs?.customer?.customer_title}<br />{state?.aboutUs?.customer?.customer_description}</h2>
                    </div>
                    {state?.customerImages?.length > 0 && <OwlCarousel class="owl-carousel owl-theme owl-major" {...major}>
                    {state?.customerImages?.map((item)=>{
                        return (
                            <div class="item">
                            <div class="major-box d-flex justify-content-center align-items-center">
                                <img src={state?.customerImageUrl + item?.image} alt="" />
                            </div>
                        </div>
                        )
                    })}
                    </OwlCarousel>}
                </div>
            </section>
          
            
        </body>
    )
}

export default About