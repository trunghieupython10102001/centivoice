import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { Pagination } from "swiper";
import { artistList, creators, trendingList } from "../../data";
import Artist from "../../components/common/Artist/Artist";
import VoiceItem from "../../components/common/VoiceItem/VoiceItem";
import SamAvatar from "../../assets/images/sam-album.webp";

const ActivitiesPage = () => {
  return (
    <div className="activities-page">
      <div className="left">
        <div className="infulencer">
          <div className="title">Cố vấn đang hợp tác cùng CentiVoice</div>
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {artistList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Artist {...item}></Artist>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="infulencer">
          <div className="title">
            Đăng ký tham gia chiến dịch của các nhãn hàng
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {trendingList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <VoiceItem {...item} imgSrc={SamAvatar} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="right">
        <div className="right-title">Top voice creator tháng 3</div>
        <div className="creators">
          {creators.map((creator, index) => {
            return (
              <div key={index} className="creator">
                <span className="num">{index + 1}</span>
                <div className="creator-avatar">
                  <img src={creator.imgSrc} alt="" />
                </div>
                <span className="creator-name">{creator.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
