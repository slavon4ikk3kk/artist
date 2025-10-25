import React from 'react'
import images from "../../assets/index"
import s from "./AboutUs.module.css"
const About = ({}) => {
  return (
    <div className={s.aboutContainer} id='about'>
        <img src={images.people}></img>
        <img src={images.icon} className={s.icon}></img>
        <p className={s.p}>About ArtistsHub</p>
        <p className={s.description}>At ArtistsHub, our mission is to connect music lovers with the artists they adore. We strive to create a vibrant community where discovering new music is as enjoyable as listening to it.</p>
    </div>
  )
}

export default About;