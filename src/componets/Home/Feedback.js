import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import feed1 from "../../Assets/images/feed1.png"

export default function Feedback({ category, test,home }) {
    const feedback = {
        loop: category?.allTestimonial?.length >= 2 ? true : false,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1.2
            },
            768: {
                items: 1.5
            },
            992: {
                items: 1
            }
        }
    }


    return (
        <>
            <section class="feedback">
                <div class="container">
                    <div class="feed-inr">
                        <h2>{category?.client_heading}</h2>
                        {/* <div class="owl-carousel owl-theme owl-feed"> */}
                      {category?.allTestimonial?.length > 0 &&  <OwlCarousel class="owl-carousel owl-theme owl-feed" {...feedback}>
                            {category?.allTestimonial?.map((item) => {
                                return (

                                    <div class="item">
                                        <div class="feed-main">
                                            <div class="feed-top">
                                                <p>{item.client_message}</p>
                                            </div>
                                            <div class="feed-btm d-flex justify-content-start align-items-center">
                                                <div class="feeder-img"><img src={item.image ? home?.testimonialImageUrl + item.image:feed1} alt="" /></div>
                                                <div class="feeder-name">
                                                    <h4>{item.client_name}</h4>
                                                    <h5>{item.client_designation}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                   
                        </OwlCarousel>}
                        {/* </div> */}
                    </div>
                </div>
                <div class="feed-join d-flex justify-content-start align-items-center">
                    <div class="join-box">
                        <h6>Join our team</h6>
                        <h4>We Improve Profitability With Leading Construction Solutions</h4>
                        <Link to="/contact-us">quick contact us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

