import React from "react";
import banner from "../../Assets/images/banner.png"

export default function Banner({data}) {

  return (

    <section class="banner">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">

        {data?.map((e)=>{
          return(
          <div class="carousel-item active">
            <div class="banner-box">
              <div class="banner-img"><img src={banner} alt="" /></div>
              <div class="container-f luid">
                <div class="banner-txt">
                  <h1>{e?.heading}</h1>
                  <p>{e?.description}
                  </p>
                  <a>Learn More</a>
                </div>
              </div>
              <h5>industrial</h5>
            </div>
          </div>
          )
        })}
   
        </div>
      </div>
    </section>
  )
}
