import React, { useState, useEffect } from "react";
import contact from "../Assets/images/contact-banner.png"
import gototop from "../Assets/images/go-to-top.png"
import cf1 from "../Assets/images/cf1.png"
import cf2 from "../Assets/images/cf2.png"
import cf3 from "../Assets/images/cf3.png"
import cf4 from "../Assets/images/cf4.png"
import cf5 from "../Assets/images/cf5.png"
import cr1 from "../Assets/images/cr1.png"
import cr2 from "../Assets/images/cr2.png"
import cr3 from "../Assets/images/cr3.png"
import Share from "../componets/Home/Share";
import ScrollTop from "../componets/ScrollTop";
import { Link } from "react-router-dom";
import { ApiGetNoAuth, ApiPostNoAuth } from "../Api/Api";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Loader from "../componets/loader/Loader";



function ContactUs() {
    const [state, setState] = useState();
  const [loading, setLoading] = useState(false);

    const [name, setName] = useState({
        name: "",
        email: '',
        phonenumber: "",
        subject: "",
        message: ""
    })



    useEffect(() => {
        setLoading(true)
        ApiGetNoAuth("contact-us")
            .then((res) => {
               
                setState(res?.data?.result)
            })?.catch((err) => console.log("AData", err))

            setLoading(false)

        window.scrollTo(0, 0)
        window.document.title = "SASP - Contact Us"
    }, []);


    const initialValues = {
        full_name: "",
        // userData?.first_name
        //   ? userData?.first_name + " " + userData?.last_name
        //   : "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        // captcha: false,
    };
    const validationSchema = Yup.object({
        full_name: Yup.string().required("Please enter your full name!"),
        email: Yup.string()
            .required("Please enter your email address!")
            .email("Please enter a valid email address!")
            .nullable(),
        phone: Yup.string()
            .required("Please enter your phone number!")
            .matches(/^([0-9\s\-+()]*)$/, "Invalid phone number!")
            .min(7, "Phone number must be at least 7 characters!")
            .max(15, "Phone number contains maximum 15 characters!"),
        subject: Yup.string().required("Please select a subject!"),
        message: Yup.string().required("Please enter message!"),
        // captcha: Yup.string().oneOf(
        //     ["true"],
        //     "Please confirm you are not a robot!"
        // ),
    });
    
    const onSubmit = (values, actions) => {
        // setLoading(true);
        const body = {
            params: {
                full_name: values.full_name,
                email: values.email,
                phone_number: values.phone,
                message: values.message,
                subject: values.subject,
            },
        };
        ApiPostNoAuth("contact-us-save", body)
            .then((res) => {
                if (res?.data?.result) {
                    // swal({
                    //     title: "Success",
                    //     text: res?.data?.result?.status?.meaning,
                    //     icon: "success",
                    // });
                    actions.resetForm();
                }
            })
            .catch(async (err) => {
            });
    };


    return (
        <body>
        {loading && <Loader />}
            <Share />
            <section class="inner-banner">
                <img src={state?.imageUrl + state?.contactUs?.page_image} alt="" class="inr-bnr-img" />
                <div class="container">
                    <div class="inner-banner-text">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact us</li>
                            </ol>
                        </nav>
                        <h1 class="pr-deet">Connect with Us</h1>
                    </div>
                </div>
            </section>

            <section class="pro-list pro-deet-paper">
                <div class="container">
                    <div class="product-paper">
                        <div class="row">
                            <div class="col-lg-8 col-md-12">
                                <div class="contact-left-paper">
                                    <div class="cont-lft-hd">
                                        <h2>{state?.contactUs?.heading}</h2>
                                        <p>{state?.contactUs?.desc}
                                        </p>
                                    </div>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                        enableReinitialize={true}
                                    >
                                        {({ values, setFieldValue }) => (
                                            <Form action="" role="form">
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                                        <div class="cont-frm-box">
                                                            <label for="">Name</label>
                                                            <Field
                                                                type="text"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder="Enter your full name here"
                                                                // value={data?.full_name}
                                                                name="full_name"
                                                            // onChange={handlerChange}
                                                            />

                                                            <span className="errorInput" style={{color:"red"}}>
                                                                <ErrorMessage name="full_name" />
                                                            </span>
                                                            {/* <input type="text" placeholder="Enter here" value="Moumita Hazra" required="" /> */}
                                                            <img src={cf1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                                        <div class="cont-frm-box">
                                                            <label for="">Email Address</label>
                                                            <Field
                                                                type="email"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder="Enter here"
                                                                // value={data?.email}
                                                                name="email"
                                                            // onChange={handlerChange}
                                                            />

                                                            <span className="errorInput" style={{color:"red"}}>
                                                                <ErrorMessage name="email" />
                                                            </span>

                                                            <img src={cf2} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                                        <div class="cont-frm-box">
                                                            <label for="">Phone Number</label>
                                                            <Field
                                                                type="number"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder="Enter your phone number here"
                                                                // value={data?.phone}
                                                                name="phone"
                                                            // onChange={handlerChange}
                                                            />

                                                            <span className="errorInput" style={{color:"red"}}>
                                                                <ErrorMessage name="phone" />
                                                            </span>

                                                            <img src={cf3} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                                        <div class="cont-frm-box">
                                                            <label for="">Subject</label>
                                                            <Field
                                                            type="text"
                                                                className="form-control"
                                                                id="exampleFormControlSelect1"
                                                                placeholder="Enter your Subject here"

                                                                // value={data?.subject}
                                                                name="subject"
                                                            // onChange={handlerChange}
                                                            >
                                                            </Field>

                                                            <span className="errorInput" style={{color:"red"}}>
                                                                <ErrorMessage name="subject" />
                                                            </span>
                                                            {/* <input type="text" placeholder="Enter here" required="" /> */}
                                                            <img src={cf4} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="cont-frm-box">
                                                            <label for="">Message</label>
                                                            <Field
                                                                as="textarea"
                                                                maxLength={500}
                                                                className="form-control "
                                                                id="exampleFormControlTextarea1"
                                                                placeholder="Enter your message here"
                                                                //   value={data?.message}
                                                                name="message"
                                                            //   onChange={handlerChange}
                                                            ></Field>

                                                            
                                                            <span className="errorInput" style={{color:"red"}}>
                                                                <ErrorMessage name="message" />
                                                            </span>
                                                            {/* <textarea name="" id="" placeholder="Enter here"></textarea> */}
                                                            <img src={cf5} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <button type="submit" class="cnt-frm-btn">Learn More</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="contact-right-paper">
                                    <div class="cont-lft-hd">
                                        <h2>Information</h2>
                                    </div>
                                    <div class="con-r8-inr">
                                        <div class="cr-box d-flex justify-content-start align-items-start">
                                            <img src={cr1} alt="" class="cr-img" />
                                            <div class="cr-txt">
                                                <h5>Office Address</h5>
                                                <p>{state?.contactUs?.address}</p>
                                            </div>
                                        </div>
                                        <div class="cr-box d-flex justify-content-start align-items-start">
                                            <img src={cr2} alt="" class="cr-img" />
                                            <div class="cr-txt">
                                                <h5>Call Us</h5>
                                                <p><a href="#">{state?.contactUs?.phone}</a></p>
                                            </div>
                                        </div>
                                        <div class="cr-box d-flex justify-content-start align-items-start">
                                            <img src={cr3} alt="" class="cr-img" />
                                            <div class="cr-txt">
                                                <h5>Email Address</h5>
                                                <p><a href="#">{state?.contactUs?.email}</a></p>
                                            </div>
                                        </div>

                                        <div class="cont-sos">
                                            <h3>Connect with social media</h3>
                                            <ul class="d-flex justify-content-start align-items-center">
                                                <li><a href="#" class="blue"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#" class="sky"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#" class="red"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                <li><a href="#" class="violet"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       

        </body>
    )
}

export default ContactUs