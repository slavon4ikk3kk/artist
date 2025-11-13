import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import s from "./FeedBacks.module.css";
import images from "../../assets/index.js";
const FeedBacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    async function fetchFeedBacks() {
        const response = await fetch("https://sound-wave.b.goit.study/api/feedbacks?limit=5&page=1");
        const res = await response.json();
        console.log(res)
        setFeedbacks(res.data);
    }
    useEffect(() => {
        fetchFeedBacks();
    }, [])

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default FeedBacks