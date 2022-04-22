import React from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../common/Sidebar'
import Footer from '../../components/Footer/Footer'
import Social from '../../components/Social/Social'
import ArtistDetails from './ArtistDetails'
import LatestReview from './LatestReviewSingle'

import Pricing from './Pricing'

const ArtistDetailsHome = () => {

  const location = useLocation();
  const data = location.state

  return (
    <div>

        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <ArtistDetails location= {data}/>
        <Pricing  location= {data}/>
        <LatestReview  />
        <Social/>
        <Footer/>

    </div>
  )
}

export default ArtistDetailsHome