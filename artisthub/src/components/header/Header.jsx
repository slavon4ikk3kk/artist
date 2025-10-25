import React, { useState } from 'react'
import s from "./Header.module.css";
import images from "../../assets/index.js";
const Header = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <header className={s.header} >
    <img src={images.logo} className={s.logo}></img>
    <img src={images.menu} className={s.menu} onClick={()=>setIsModal(true)}></img>
   {isModal && <div className={s.overlay}>
      <div className={s.modalHeader}>
        <img src={images.logo} className={s.logo}></img>
        <img onClick={()=>setIsModal(false)} src={images.close} className={s.close}></img>
      </div>
      <ul className={s.ul}>
        <li>
          <a href="#artists" onClick={()=>setIsModal(false)}>Artists</a>
        </li>
        <li>
          <a href="#about" onClick={()=>setIsModal(false)}>About Us</a>
        </li>
        <li>
          <a href="#" onClick={()=>setIsModal(false)}>Reviews</a>
        </li>
      </ul>
    </div>
} 
    </header>
  )
}

export default Header