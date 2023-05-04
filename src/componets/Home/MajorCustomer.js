import React from "react";
import OwlCarousel from 'react-owl-carousel';

import major1 from "../../Assets/images/major1.png"
import major2 from "../../Assets/images/major2.png"
import major3 from "../../Assets/images/major3.png"
import major4 from "../../Assets/images/major4.png"
import major5 from "../../Assets/images/major5.png"

function MajorCustomer({ home, category, Customers }) {
    console.log("home", home, category);
    
    const major = {
        loop: Customers?.length >= 5 ? true : false,
        margin: 37,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    }

    return (



        <section class="major-cust">
            <div class="container">
                <div class="major-head">
                    <h2>{category.customer_title}<br />{category.customer_description}</h2>
                </div>
               {Customers?.length >0 && <OwlCarousel class="owl-carousel owl-theme owl-major" {...major}>
                    {Customers?.map((items) => {
                        return (
                            <div class="item">
                                <div class="major-box d-flex justify-content-center align-items-center">
                                    <img src={home?.customerImageUrl + items?.image} alt="" />
                                </div>
                            </div>
                        )
                    })}

                </OwlCarousel>}
            </div>
        </section>
    )

}

export default MajorCustomer