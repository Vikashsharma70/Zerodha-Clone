import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductsPage from './landing_page/products/ProductsPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import Signup from "./landing_page/signup/Signup.jsx"
import Login from "./landing_page/login/Login.jsx"

import SupportPage from './landing_page/support/SupportPage.jsx';
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'

// import 'react-toastify/dist/ReactTostify.css'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>} />

    <Route path="/about" element={<AboutPage/>} />
    <Route path="/products" element={<ProductsPage/>} />
    <Route path="/pricing" element={<PricingPage/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />

    <Route path="/support" element={<SupportPage/>} />
    <Route path="/*" element={<NotFound/>} />

  </Routes> 
  <Footer/>
  </BrowserRouter>
)
