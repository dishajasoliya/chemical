import React from 'react'
import heroimg from '../assets/images.png';

const heroimage = () => {
  return (
    <section className="w-full">
      <img
        src={heroimg}
        alt="Hero"
        // className="w-full h-auto max-h-screen object-cover"
      />
    </section>
  )
}

export default heroimage