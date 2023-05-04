import React, { useState, useEffect } from 'react'
import Banner from '../componets/Home/Banner'
import Feedback from '../componets/Home/Feedback'
import Leading from '../componets/Home/Leading'
import Product from '../componets/Home/Product'
import Welcome from "../componets/Home/Welcome"
import gototop from "../Assets/images/go-to-top.png"
import Share from '../componets/Home/Share'
import ScrollTop from '../componets/ScrollTop'
import { ApiGetNoAuth } from '../Api/Api'
import Loader from '../componets/loader/Loader'
import MajorCustomer from '../componets/Home/MajorCustomer'

const Home = () => {
  // const { setLoader } = useGlobalContext();
  const [data, setData] = useState([])
  const [category, setCategory] = useState([]);
  const [about, setAbout] = useState([]);
  const [home, setHome] = useState([])
  const [test, setTest] = useState([])
  const [product, setProduct] = useState([])
  const [Customers, setCustomers] = useState([])

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    ApiGetNoAuth("home",).then(async (res) => {
      if (res?.data?.result) {
        setData(res?.data?.result?.homeBanners);
        setCategory(res?.data?.result?.homeContent);
        setAbout(res?.data?.result?.allBands);
        setHome(res?.data?.result);
        setTest(res?.data?.result?.allTestimonial);
        setProduct(res?.data?.result?.allProduct);
        setCustomers(res?.data?.result?.customerImages);

      }
    });
    setLoading(false)
    window.scrollTo(0, 0)
    window.document.title = "SASP - HomePage"
  }, []);
  return (
    <div>
      {loading && <Loader />}
      <Share />
      <Banner data={data} />
      <Leading category={category} home={home} />
      <Welcome about={about} category={category} home={home} />
      <Product category={category} product={product} home={home} />
      <MajorCustomer home={home} category={category} Customers={Customers}/>
      <Feedback test={test} category={category} home={home} />
      
   
     
    </div>
  )
}

export default Home