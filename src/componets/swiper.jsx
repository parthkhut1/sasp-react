import React from 'react'
import OwlCarousel from "react-owl-carousel";
import brand1 from "../Assets/images/brand1.png"
import brand2 from "../Assets/images/brand2.png"
import brand3 from "../Assets/images/brand3.png"
import brand4 from "../Assets/images/brand4.png"
import brand5 from "../Assets/images/brand5.png"

export const Swiper = ({ about, category, home }) => {
  const owBrand = {
    loop:  home?.allBands?.length >= 6 ? true : false,
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
  };
  console.log(category?.brand_title, "category?.brand_title");

  return (
    <div>
      <div class="lead-bottom">
        <div class="container">
          <div class="lead-btm-head">
            <h2>{category?.brand_title}{category?.brand_description}</h2>
          </div>
          <div class="lead-btm-inr">
            {home?.allBands?.length > 0 && <OwlCarousel
              className="owl-carousel owl-theme owl-brand"
              {...owBrand}
            >
              {home?.allBands?.map((item) => {
                return (
                  <div class="item">
                    <div class="brand-box">
                      <div class="brand-img"><img src={home?.bandsImageUrl + item?.image} alt="" /></div>
                      <p>{item?.name}</p>
                    </div>
                  </div>
                )
              })}
            </OwlCarousel>}
          </div>
        </div>
      </div>
    </div>
  )
}
