import React from "react";
import welcomearrow from "../../Assets/images/welcome-arrow.png"
import welcome1 from "../../Assets/images/welcome1.png"

 
export default function  Welcome ({category,home}){
    return(
        
     <section class="welcome">
            <div class="container">
                    <div class="d-flex align-items-stech justify-content-between welcome-tabs">
                        <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <div class="welcome-heading">
                                <h5>About SAPS</h5>
                                <h2>Welcome to SAPS</h2>
                                <p>{category.about_description}
                                </p>
                            </div>
                            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <div class="welcome-box">
                                    <div class="wel-txt">
                                        <span>01</span>
                                        <div class="wel-tin">
                                            <h3>{category.about_title1}</h3>
                                            <p>{category.about_description1}</p>
                                        </div>
                                    </div>
                                    <div class="wel-btn"><a><img src={welcomearrow} alt="" /></a></div>
                                </div>
                            </button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" tabindex="-1">
                                <div class="welcome-box">
                                    <div class="wel-txt">
                                        <span>02</span>
                                        <div class="wel-tin">
                                            <h3>{category.about_title2}</h3>
                                            <p>{category.about_description2}</p>
                                        </div>
                                    </div>
                                    <div class="wel-btn"><a><img src={welcomearrow} alt="" /></a></div>
                                </div>
                            </button>
                            <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" tabindex="-1">
                                <div class="welcome-box">
                                    <div class="wel-txt">
                                        <span>03</span>
                                        <div class="wel-tin">
                                            <h3>{category.about_title3}</h3>
                                            <p>{category.about_description3}</p>
                                        </div>
                                    </div>
                                    <div class="wel-btn"><a><img src={welcomearrow} alt="" /></a></div>
                                </div>
                            </button>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">

                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                <div class="welcome-img"><img src={home?.contentImageUrl + category.about_image1} alt="" /></div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <div class="welcome-img"><img src={home?.contentImageUrl + category?.about_image2} alt="" /></div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                                <div class="welcome-img"><img src={home?.contentImageUrl + category?.about_image3} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}