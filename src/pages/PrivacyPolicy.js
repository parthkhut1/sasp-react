import React, { useState, useEffect } from 'react'
import Share from '../componets/Home/Share'
import ScrollTop from '../componets/ScrollTop';
import { ApiGetNoAuth } from '../Api/Api';
import { Link } from 'react-router-dom';
import Loader from '../componets/loader/Loader';

function PrivacyPolicy() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])


  useEffect(() => {

    setLoading(true)
    ApiGetNoAuth("privacy-policy")
      .then((res) => {
        setData(res?.data?.result)
      })
      .catch((err) => console.log("AData", err))
    setLoading(false)
    window.scrollTo(0, 0)
    window.document.title = "SASP - Privacy & Policy"
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <Share />
      <section class="brand-list terms_ppg">
        <div class="term-paper">
          <div class="container">

            <div class="lead-btm-head">
              <h2>{data?.privacyPolicy?.main_heading}</h2>
              <span class="please">{data?.privacyPolicy?.please_see}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data?.privacyPolicy?.description }} />
            <h5>Don't find what you looking for? <Link to="/contact-us">Contact us</Link> for more details.</h5>
          </div>
        </div>
      </section>
    </div>

  )
}

export default PrivacyPolicy