import React,{useEffect,useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// page name path
import { ApiGetNoAuth } from './Api/Api';
import Brands from './pages/Brands';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import ProductListing from './pages/ProductListing';
import Header from './componets/Header';
import Footer from './componets/Footer';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import TermsConditions from './pages/TermsConditions';
import Testimonials from './pages/Testimonials';
import ScrollTop from './componets/ScrollTop';


function App() {
const [state,setState] =useState([])

  useEffect(() => {
    ApiGetNoAuth("footer")
    .then((res) => {
        setState(res?.data?.result)
    })
    .catch((err) => console.log("AData", err))
  }, []);
  return (
   <>
      <BrowserRouter basename={"/dev"}>
      <Header state={state} />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/product-listing' element={<ProductListing />} />
          <Route path='/product-details/:slug' element={<ProductDetails />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/Testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
   </>
  );
}

export default App;
