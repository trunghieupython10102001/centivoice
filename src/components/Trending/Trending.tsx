import "./style.scss";
import SearchIcon from "../../assets/icons/search.png";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingImage from "../../assets/images/IMG_1577.jpg";
import VoiceItem from "../common/VoiceItem/VoiceItem";

import { Pagination } from "swiper";
import Search from "../common/Search/Search";
import { trendingList } from "../../data";

const Trending = () => {
  return (
    <div className="trending">
      <div className="head">
        <h3 className="title">Top xu hướng trên CentiVoice</h3>
        <Search />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {trendingList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <VoiceItem {...item}></VoiceItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {trendingList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <VoiceItem {...item}></VoiceItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trending;
