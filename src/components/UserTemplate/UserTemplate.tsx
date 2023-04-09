import "./style.scss";
import StarIcon from "../../assets/icons/star.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { trendingList } from "../../data";
import VoiceItem from "../common/VoiceItem/VoiceItem";

const UserTemplate = () => {
  return (
    <div className="user-trending">
      <div className="permonth">
        <div className="title">Mẫu của Quynh Tran</div>
        {/* <div className="premium-sub">
          <div className="icon">
            <img src={StarIcon} alt="" />
          </div>
          <span className="text">Nâng cấp tài khoản premium</span>
        </div> */}
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

export default UserTemplate;
