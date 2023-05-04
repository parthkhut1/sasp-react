import React, { useState, useEffect } from 'react'
import Share from '../componets/Home/Share'
import aboutbg from '../Assets/images/about-bg.png'
import feed1 from '../Assets/images/feed1.png'
import ScrollTop from '../componets/ScrollTop'
import { Link } from 'react-router-dom'
import { ApiGetNoAuth } from "../Api/Api";
import Loader from '../componets/loader/Loader'


function Testimonials() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        ApiGetNoAuth("testimonial")
            .then((res) => {
               
                setData(res?.data?.result)
            })
            .catch((err) => console.log("AData", err))
        setLoading(false)
        window.scrollTo(0, 0)
        window.document.title = "SASP - Testimonials"
    }, []);

    return (
        <body>
            {loading && <Loader />}

            <Share />
            <section class="inner-banner">
                <img src={aboutbg} alt="" class="inr-bnr-img" />
                <div class="container">
                    <div class="inner-banner-text">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Testimonials</li>
                            </ol>
                        </nav>
                        <h1 class="pr-deet">Testimonials</h1>
                    </div>
                </div>
            </section>

            <section class="brand-list ttstt">
                <div class="container">

                    <div class="lead-btm-head">
                        <h2>What’s Our Clients Talk About Our Work</h2>
                    </div>

                    <div class="all_testimonialss">
                        {data?.allTestimonial?.map((item) => {
                            return (<div class="feed-main">
                                <div class="feed-top">
                                    <p>{item?.client_message}</p>

                                </div>
                                <div class="feed-btm d-flex justify-content-start align-items-center">
                                    <div class="feeder-img"><img src={item.image ? data?.testimonialImageUrl + item.image : feed1} alt="" /></div>
                                    <div class="feeder-name">
                                        <h4>{item?.client_name}</h4>
                                        <h5>{item?.client_designation}</h5>
                                    </div>
                                </div>
                            </div>)

                        })
                        }

                    </div>

                </div>
            </section>
       
        </body>
    )

}

export default Testimonials