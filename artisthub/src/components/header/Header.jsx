import React from 'react'
import s from "./Header.module.css";
import images from "../../assets/index.js";
const Header = () => {
  return (
    <header className={s.header}>
    <img src={images.logo} className={s.logo}></img>
    <img src={images.menu} className={s.menu}></img>
    
    </header>
  )
}

export default Header