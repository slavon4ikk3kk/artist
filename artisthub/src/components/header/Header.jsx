import React, { useState } from "react";
import s from "./Header.module.css";
import images from "../../assets/index.js";
import { useMediaQuery } from 'react-responsive';
const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width:1440px)' });
  return (
    <div className="container">
      <header className={s.header}>
        <div className={s.gradient}></div>
        <img src={images.logo} className={s.logo}></img>
        {isDesktop ?
          <nav><ul className={s.ul}>
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
          </nav>
          :
          <img
            src={images.menu}
            className={s.menu}
            onClick={() => setIsModal(true)}
          ></img>
        }
        {isModal && (
          <div className={s.overlay}>
            <div className={s.modalHeader}>
              <img src={images.logo} className={s.logo}></img>
              <img
                onClick={() => setIsModal(false)}
                src={images.close}
                className={s.close}
              ></img>
            </div>
            <ul className={s.ul}>
              <li>
                <a href="#artists" onClick={() => setIsModal(false)}>
                  Artists
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsModal(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setIsModal(false)}>
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
