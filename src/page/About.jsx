import React from 'react'
import AboutHero from '../component/about/AboutHero'
import AboutSection from '../component/about/AboutSection'
import AboutValues from '../component/about/AboutValues'
import InstraSection from '../component/InstraSection'

const About = () => {
  return (
    <div className='about'>
      <AboutHero/>
      <AboutSection/>
      <AboutValues/>
      <InstraSection/>
    </div>
  )
}

export default About
