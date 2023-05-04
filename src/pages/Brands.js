import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import gototop from "../Assets/images/go-to-top.png"
import aboutbg from "../Assets/images/about-bg.png"
import loadmore from "../Assets/images/load-more.png"
import ScrollTop from "../componets/ScrollTop";
import Share from "../componets/Home/Share";
import { Link } from "react-router-dom";
import { ApiPostNoAuth } from "../Api/Api";
import Loader from "../componets/loader/Loader";


export default function Brands() {
    const [loading,setLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true)

        const body = {
            "params": {
                "page": page,
                limit: 9
            }
        }
        ApiPostNoAuth("brand", body)?.then((res) => {
            setData(res?.data?.result)
          
            setProduct([...product, ...res?.data?.result?.allBands])
        })?.catch((err) => console.log("err", err))
        setLoading(false)
        
        window.scrollTo(0, 0)
        window.document.title = "SASP - Producx`t-Listing"
    }, [page]);
    return (
        <>
            <body>
            {loading && <Loader />}
                <Header />
                <Share />

                <section class="inner-banner">
                    <img src={aboutbg} alt="" class="inr-bnr-img" />
                    <div class="container">
                        <div class="inner-banner-text">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Brands</li>
                                </ol>
                            </nav>
                            <h1 class="pr-deet">Trusted Brands</h1>
                        </div>
                    </div>
                </section>
                <section class="brand-list">
                    <div class="container">
                        <div class="lead-btm-head">
                            <h2>Trusted by 30,000 world-class brands</h2>
                        </div>
                        <div class="row g-0 align-items-stech">
                            {product?.map((item) => {
                                return (
                                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div class="bl-box bl1">
                                            <div class="bl-img"><img src={data?.bandsImageUrl + item?.image} alt="" /></div>
                                            <p class="bl-txt">{item?.name} </p>
                                        </div>
                                    </div>
                                )
                            })}

                            <div class="col-lg-12"  style={{cursor:"pointer"}}>
                                <a class="load-more" onClick={() => setPage(page + 1)} ><img src={loadmore} alt="" />LOAD MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
            
            </body>
        </>
    )
}

