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
            <ul className={s.logos}>
                <li>
                    <a href="#"><img src={images.instagram} className={s.icons}></img></a>
                </li>
                <li>
                    <a href="#"><img src={images.facebook} className={s.icons}></img></a>
                </li>
                <li>
                    <a href='#'><img src={images.youtubechik} className={s.icons}></img></a>
                </li>
            </ul>
            <p className={s.bottomText}>© 2025 ArtistsHub. All rights reserved</p>
        </footer>
    )
}

export default Footer