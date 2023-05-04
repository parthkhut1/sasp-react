import React, { useEffect, useState } from "react";

import productlisting from '../Assets/images/product-listing-banner.png'
import loadmore from "../Assets/images/load-more.png"
import gototop from "../Assets/images/go-to-top.png"
import prod1 from "../Assets/images/prod1.png"
import prod2 from "../Assets/images/prod2.png"
import prod3 from "../Assets/images/prod3.png"
import prod4 from "../Assets/images/prod4.png"
import prod5 from "../Assets/images/prod5.png"
import prod6 from "../Assets/images/prod6.png"
import prod7 from "../Assets/images/prod7.png"
import prod8 from "../Assets/images/prod8.png"
import prod9 from "../Assets/images/prod9.png"
import Share from "../componets/Home/Share";
import ScrollTop from "../componets/ScrollTop";
import { ApiPost, ApiPostNoAuth } from "../Api/Api";
import { Link, useLocation } from "react-router-dom";
import Loader from "../componets/loader/Loader";


function ProductListing() {

  const [product, setProduct] = useState([])
  const [data, setData] = useState({});
  const[loading,setLoading] =useState(false)
  const [page, setPage] = useState(1);


  useEffect(() => {

    const body = {
      "params": {
        "page": page,
        limit: 9
      }
    }
    setLoading(true)
    ApiPostNoAuth("get-all-product", body)?.then((res) => {
      setData(res?.data?.result)
      setProduct([...product,...res?.data?.result?.allProduct])
    })?.catch((err) => console.log("err", err))
    setLoading(false)

    window.scrollTo(0, 0)
    window.document.title = "SASP - Producx`t-Listing"
  }, [page]);

 

  return (
    <>
      <body>
    {loading && <Loader />}

        <Share />

        <section class="inner-banner">
          <img src={productlisting} alt="" class="inr-bnr-img" />
          <div class="container">
            <div class="inner-banner-text">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Products</li>
                </ol>
              </nav>
              <h1 class="pr-deet">Product Listings</h1>
            </div>
          </div>
        </section>

        <section class="pro-list">
          <div class="container">
            <h2>Showing <b>{data?.currentProductCount}</b> of {data?.allProductCount} results for Products</h2>
            <div class="pro-list-inr">
              <div class="row align-items-stech">
                {product?.map((e) => {
                  return (
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="pro-list-box">
                        <div class="pro-list-img"><img src={data?.imageUrl + e?.get_product_main_image?.image} alt="" class="prolt-main" />
                          <div class="proder">
                            <img src={data?.iconImageUrl + e?.product_icon} alt="" />
                          </div>
                        </div>
                        <div class="pro-list-txt">
                          <h3>{e?.product_title}</h3>
                          <h6>{e?.get_brand?.name}</h6>
                          <p style={{ height: '80px', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: e?.description }} />
                          <Link to={`${'/product-details/' + e?.product_slug}`}>More Details</Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div class="col-lg-12"  style={{cursor:"pointer"}}>
                  <a class="load-more" onClick={() => setPage(page + 1)}k><img src={loadmore} alt=""/>LOAD MORE</a>
                </div>
              </div>
            </div>
          </div>
        </section>
  
      </body>
    </>
  )
}

export default ProductListing