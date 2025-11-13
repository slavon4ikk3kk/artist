import React from 'react'
import s from "./Footer.module.css"
import images from "../../assets/index"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <img src={images.purple} className={s.purple}/>
            <ul className={s.ul}>
                <li>
                    <a href="#artists">
                        Artists
                    </a>
                </li>
                <li>
                    <a href="#about">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#">
                        Reviews
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer