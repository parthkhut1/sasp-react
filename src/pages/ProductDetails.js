import React, { useEffect, useState } from "react";
import productlist from "../Assets/images/product-listing-banner.png"
import proder3 from "../Assets/images/proder3.png"
import productdeetaftr from '../Assets/images/product-deet-aftr.png'
import prod3 from "../Assets/images/prod3.png"
import prod4 from "../Assets/images/prod4.png"
import n1 from "../Assets/images/n1.png"
import n2 from "../Assets/images/n2.png"
import n3 from "../Assets/images/n3.png"
import n4 from "../Assets/images/n4.png"
import nbig1 from '../Assets/images/nbig1.png'
import nbig2 from '../Assets/images/nbig2.png'
import nbig3 from '../Assets/images/nbig3.png'
import nbig4 from '../Assets/images/nbig4.png'
import Share from "../componets/Home/Share";
import ScrollTop from "../componets/ScrollTop";
import { Link, useLocation, useParams } from "react-router-dom";
import {  ApiGetNoAuth } from "../Api/Api";
import Loader from "../componets/loader/Loader";


function ProductDetails() {
  const [product, setProduct] = useState({})
  const [bigImage, setBigImage] = useState("");
  const [loading,setLoading] = useState(false)


  const { slug } = useParams()
 

  useEffect(() => {
    setLoading(true)
    ApiGetNoAuth("get-product/" + slug)?.then((res) => {
      setProduct(res?.data?.result)
      setBigImage(res?.data?.result?.productImages?.[0]?.image)
    }
    )?.catch((err) => console.log("err", err))
    setLoading(false)
    window.scrollTo(0, 0)
    window.document.title = "SASP - Product-Details"
  }, [slug]);

  return (
    <section>
    {loading && <Loader />}
      <Share />
      <section class="inner-banner">
        <img src={productlist} alt="" class="inr-bnr-img" />
        <div class="container">
          <div class="inner-banner-text">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/dev">Home</Link></li>
                <li class="breadcrumb-item"><Link to="/product-listing">Products</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Product Name</li>
              </ol>
            </nav>
            <h1 class="pr-deet">Power & Energy Sectors</h1>
          </div>
        </div>
      </section>

      <section class="pro-list pro-deet-paper">
        <div class="container">
          <div class="product-paper">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="product-paper-left">
                  <div class="paper-left-top">
                    <div class="product-carousel">
                      <div class="left_slider_area d-flex justify-content-between align-items-stech">
                        <div id="thumbnail-slider">
                          <div class="inner">
                            <ul>

                              {product?.productImages?.length > 0 && product?.productImages?.map((item, index) => {
                                return (
                                  <li><a onClick={() => setBigImage(item?.image)}><img class="thumb" src={product?.imageUrl + item?.image} /></a></li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                        <div id="ninja-slider">
                          <div class="slider-inner">
                            <ul>
                              <img class="ns-img" src={product?.imageUrl + bigImage} />
                         
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-name d-flex justify-content-between align-items-center">
                      <div class="pro-name-left">
                        <h2>{product?.productData?.product_title}</h2>
                        <h5>{product?.productData?.get_brand?.name}</h5>
                      </div>
                      <div class="pro-name-right">
                        <h3>Share this product</h3>
                        <ul class="d-flex justify-content-end align-items-center">
                          <li><a href="#" class="blue"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#" class="sky"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#" class="red"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                          <li><a href="#" class="violet"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="paper-left-bottom" >
                    <h3>Product Info</h3>
                    <div dangerouslySetInnerHTML={{ __html: product?.productData?.description }} />
            
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="product-paper-right">
                  <h5>Similar Products</h5>
                  <div class="row">
                    {
                      product?.similarProduct?.map((e) => {
                        return (

                          <div class="col-lg-12 col-md-6 col-sm-6">
                            <div class="pro-list-box">
                              <div class="pro-list-img"><img src={prod3} alt="" class="prolt-main" />
                                <div class="proder">
                                  <img src={proder3} alt="" />
                                </div>
                              </div>
                              <div class="pro-list-txt">
                                <h3>{e?.product_title}</h3>
                                <h6>{e?.get_brand?.name}</h6>
                                <p className="product_description"><div dangerouslySetInnerHTML={{ __html: product?.productData?.description }} /></p>
                                <Link to={`/product-details/${e?.product_slug}`}>More Details</Link>
                              </div>
                              <span class="absol-aftr"><img src={productdeetaftr} alt="" /></span>
                            </div>
                          </div>
                        )
                      })
                    }
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductDetails