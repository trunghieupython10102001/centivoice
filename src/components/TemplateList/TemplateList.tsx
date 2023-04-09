import { Swiper, SwiperSlide } from "swiper/react";
import VoiceItem, { VoiceItemProps } from "../common/VoiceItem/VoiceItem";
import "./style.scss";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
export interface TemplateListProps {
  title: string;
  data: Array<VoiceItemProps>;
}

const TemplateList = ({ title, data }: TemplateListProps) => {
  return (
    <div className="template-list">
      <div className="head">
        <div className="title">{title}</div>
      </div>

      <div className="stories">
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
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <VoiceItem isStory {...item}></VoiceItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TemplateList;
