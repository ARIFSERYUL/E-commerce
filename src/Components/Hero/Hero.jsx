import React from 'react'
import './Hero.css'
import  hand_icon from '../Assets/hand_icon.png'
import  arrow from '../Assets/arrow.png'
import  hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
      <h2>NEEW ARRIVALS ONLY</h2>
      <div>
          <div className='hero-hand-icon'>
          <p>
          Welcome to<span> Arif Mall</span>
          </p>
         
          </div>
         
      </div>
      <div className='hero-latest-btn'>
      <div>Latest collectin</div>
      <img src={arrow} alt=''/>
      </div>
      </div>
      <div className='hero-right'>
      <img src={hero_image} alt='' width= "700px"/>
      </div>
    </div>
  )
}

export default Hero
