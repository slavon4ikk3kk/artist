import React from 'react'
import images from "../../assets/index"
import s from "./Hero.module.css"
const Hero = () => {
  return (
    <div className={s.heroContainer}>
        <p className={s.label}>Discover Your Next Favorite Artist Today</p>
        <p className={s.description}>Dive into a world of music discoveries with ArtistsHub – your personal guide to the boundless universe of sound. Explore, filter, and learn about your favorite artists all in one place.</p>
        <button type='button' className={s.button}>Explore Artist <img src={images.rightArrow} className={s.rightArrow}/></button>
    </div>
  )
}

export default Hero