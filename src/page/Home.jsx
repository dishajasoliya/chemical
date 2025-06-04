import React from 'react'
import HeroImage from '../component/HeroImage'
import CategorySection from '../component/CategorySection'
import NewArrival from '../component/NewArrival'
import PromoBanner from '../component/PromoBanner'
import InstraSection from '../component/InstraSection'
import Last from '../component/Last'


const Home = () => {
  return (
 <div className='home'>
         <HeroImage/>
          <CategorySection/>
          <NewArrival/>
          <PromoBanner/>
          <InstraSection/>
          <Last/>
 </div>
  )
}

export default Home
