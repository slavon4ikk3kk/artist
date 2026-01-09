import React from "react";
import images from "../../assets/index";
import s from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={s.heroContainer}>
      <div className={s.gradient}></div>
      <div className="container">
       <div className={s.centerFlex}>
        <div className={s.leftSide}> 
        <p className={s.label}>Discover Your Next Favorite Artist Today</p>
        <p className={s.description}>
          Dive into a world of music discoveries with ArtistsHub – your personal
          guide to the boundless universe of sound. Explore, filter, and learn
          about your favorite artists all in one place.
        </p>
        <button type="button" className={s.button}>
          Explore Artist{" "}
          <img src={images.rightArrow} className={s.rightArrow} />
        </button>
        </div>
        <div className={s.photosContainer}>
          <div className={s.wrapOne}>
            <img src={images.first} className={s.img} />
            <img src={images.second} className={s.img} />
            <img src={images.third} className={s.img} />
          </div>
          <div className={s.wrapTwo}>
            <img src={images.four} className={s.img} />
            <img src={images.five} className={s.img} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
