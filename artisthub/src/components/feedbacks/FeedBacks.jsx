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
  const [isModal, setIsModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [isInput, setIsInput] = useState("");
  const [isTextArea, setIsTextArea] = useState("");
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
  function Stars(active) {
    const arr = [];
    for (let index = 1; index < 6; index++) {
      const num = Math.round(active);
      if (index < num) {
        arr.push(<img className={s.star} src={images.purpleStar}></img>);
      } else {
        arr.push(<img className={s.star} src={images.star}></img>);
      }
    }
    return arr;
  }
  function handleInputChange(e){
   setIsInput(e.target.value);
  }
  function handleTextAreaChange(e){
    setIsTextArea(e.target.value);
  }
  function handleStarsChange(value){
     setRating(value);
  }
 async function sendFeedBack(){
   try {
    const response = await fetch(
      "https://sound-wave.b.goit.study/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: isInput,
          descr: isTextArea,
          rating: rating,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    setIsModal(false);
    setIsInput("");
    setIsTextArea("");
    setRating(0);
    fetchFeedBacks();
  } catch (error) {
    console.error("error", error);
  }
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
                <div className={s.starList}>
                  {Stars(el.rating).map((el) => {
                    return el;
                  })}
                </div>
                <p className={s.description}>{el.descr}</p>
                <p className={s.name}>{el.name}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className={s.buttonFeedback} onClick={() => { setIsModal(true) }}>Leave Feedback</button>
      </div>
      {isModal && <div className={s.overlay}>
        <div className={s.modal}>
          <img src={images.icon} className={s.cross} onClick={()=>{setIsModal(false)}}></img>
          <p className={s.submit}>Submit feedback</p>
          <label className={s.label}>Name</label>
          <input placeholder="Emily" className={s.inputName} type="text" onChange={handleInputChange} value={isInput}></input>
          <label className={s.label}>Message</label>
          <textarea placeholder="Type your message..." className={s.textarea} rows={4} onChange={handleTextAreaChange} value={isTextArea}></textarea>
        </div>
        <div className={s.starList}>
           {[1,2,3,4,5].map((star)=>{
            <img key={star} src={star <= rating ? images.purpleStar : images.star} className={s.star} onClick={handleStarsChange(star)}  />
           })}
        </div>
        <button className={s.buttonSubmit} type="Submit" onClick={sendFeedBack}></button>
      </div>
      }
    </div>
  );
};

export default FeedBacks;
