import React, { useEffect } from 'react'
import BestMehendiArtist from './BestMehendiArtist/BestMehendiArtist'
import MehendiArtist from './MehendiArtist/MehendiArtist'
import Footer from '../components/Footer/Footer'
import Social from '../components/Social/Social'
import LatestMendiReview from './LatestMehendiReview/LatestMendiReview'
import Sidebar from '../common/Sidebar'

const PageHome = () => {

  useEffect (()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>

        <MehendiArtist/>
        <BestMehendiArtist/>
        <LatestMendiReview Name= {"Latest Reviews of Mehndi Artists"}/>
        <Social/>
        <Footer/>
    </div>
  )
}

export default PageHome