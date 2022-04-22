import React, { useEffect } from 'react'
import Sidebar from './common/Sidebar'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import LandingPage from './components/LandingPage/LandingPage'
import Review from './components/Review/Review'
import Services from './components/Services/Services'
import Social from './components/Social/Social'
import TrustedVendor from './components/Vendors/TrustedVendor'

const Home = () => {

  useEffect (()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <LandingPage/>
    <Services/>
    <TrustedVendor/>
    <Blogs/>
    <Review/>
    <Social/>
    <Footer/>

    </>
  )
}

export default Home