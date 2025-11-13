import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import s from "./FeedBacks.module.css";
import images from "../../assets/index.js";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const FeedBacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    async function fetchFeedBacks() {
        const response = await fetch(
            "https://sound-wave.b.goit.study/api/feedbacks?limit=5&page=1"
        );
        const res = await response.json();
        console.log(res);
        setFeedbacks(res.data);
    }
    useEffect(() => {
        fetchFeedBacks();
    }, []);
    function Stars() {
        
    }
    return (
        <div className={s.swiperContainer}>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    style={{ padding: "0 0 30px 0" }}
                >
                    {feedbacks.map((el) => {
                        return (
                            <SwiperSlide style={{ width: "75%" }} className="slide">
                                <div>
                                    for (let index = 0; index < array.length; index++) {
                                        const element = array[index];
                                        
                                    }
                                </div>
                                <p className={s.description}>{el.descr}</p>
                                <p className={s.name}>{el.name}</p>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default FeedBacks;
