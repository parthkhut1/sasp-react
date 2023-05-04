import React from "react";
import leadimg from "../../Assets/images/lead-img.png"
import ldyrs from "../../Assets/images/ld-yrs.png"

// import leadimg from "../../asste/images/lead-img.png"
// import ldyrs from "../../asste/images/ld-yrs.png"
import { Swiper } from "../swiper";
 
 export default function Leading ({category,home}){
      return(
        <>
        <section class="leading">
                <div class="lead-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6">
                                <div class="lead-top-img">
                                    <img src={home?.contentImageUrl + category?.mission_vision_image} alt="" />
                                    <div class="ld-yrs">
                                        <img src={ldyrs} alt="" />
                                        <div class="ld-yrs-txt">
                                            <h3>{category?.mission_vision_experience}</h3>
                                            <p>Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="lead-top-txt">
                                    <h2>{category?.mission_vision_title}</h2>
                                    <p>{category?.mission_vision_description}
                                    </p>
                                    <ul>
                                        <li><span>1</span><div class="ld-tt"><h5>{category?.mission_vision_point1_h}</h5><p>{category.mission_vision_point1_d}</p></div></li>
                                        <li><span>2</span><div class="ld-tt"><h5>{category?.mission_vision_point2_h}</h5><p>{category.mission_vision_point2_d}</p></div></li>
                                        <li><span>3</span><div class="ld-tt"><h5>{category?.mission_vision_point3_h}</h5><p>{category.mission_vision_point3_d}</p></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper category={category} home={home} />
             
            </section>
        </>
    )
 }