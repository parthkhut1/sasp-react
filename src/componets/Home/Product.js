import React from 'react'
import OwlCarousel from "react-owl-carousel";
import { Link } from 'react-router-dom';

const Product = ({ category, product, home }) => {

    const owlProduct =
    {
        loop:  product?.length >= 4 ? true : false,
        margin: 33,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    }
 
    return (


        <section class="products">
            <div class="container">
                <div class="product-header">
                    <h5>{category.product_title}</h5>
                    <h3>{category.product_description}</h3>
                </div>
{  console.log(product.map((ele)=> ele),"product")}
{  console.log(product[0],"produc------------t")}
                {product?.length > 0 &&
                    <OwlCarousel
                        className="owl-carousel owl-theme owl-product"
                        {...owlProduct}
                    >
                        {product?.map((e) => {
                            return (
                                <div class="item">
                                    <div class="product-box">
                                        <div class="product-image">
                                            <img src={home?.productImageUrl + e?.get_product_main_image?.image} alt="" class="prod-main" />
                                            <div class="poducter">
                                                <img src={home?.iconImageUrl + e?.product_icon} alt="" />
                                            </div>
                                        </div>
                                        <div class="product-txt">
                                            <h3>{e?.product_title}</h3>
                                            <h6>{e?.get_brand?.name}</h6>
                                            <p style={{ height: '80px', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: e.description }} />
                                            <Link to="/product-listing">More details</Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </OwlCarousel>}

            </div>

        </section>
    )
}
export default Product