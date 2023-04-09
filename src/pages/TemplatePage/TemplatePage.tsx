import "./style.scss";
import TemplateList from "../../components/TemplateList/TemplateList";
import Search from "../../components/common/Search/Search";
import CheckIcon from "../../assets/icons/check-white.png";
import FakeImg from "../../assets/images/IMG_2452.jpg";
import FakeImg1 from "../../assets/images/IMG_6888.jpg";
import FakeImg2 from "../../assets/images/IMG_2558.png";
import FakeImg3 from "../../assets/images/IMG_6214.png";
import FakeImg4 from "../../assets/images/IMG_6683.jpg";
import FakeImg5 from "../../assets/images/IMG_6892.jpg";
import ProfileTag from "../../components/ProfileTag/ProfileTag";
import UserTrending from "../../components/UserTrending/UserTrending";
import UserTemplate from "../../components/UserTemplate/UserTemplate";

const TemplatePage = () => {
  const templateListData = [
    {
      title: "Đang theo dõi",
      data: [
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
      ],
    },
    {
      title: "Đề xuất",
      data: [
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg1,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
      ],
    },
    {
      title: "Tâm trạng",
      data: [
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg2,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
      ],
    },
    {
      title: "Âm nhạc",
      data: [
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg3,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
      ],
    },
    {
      title: "Nhẹ nhàng",
      data: [
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg4,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
      ],
    },
    {
      title: "Hàn lâm",
      data: [
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
        {
          imgSrc: FakeImg5,
          voiceName: "Rolling in the deep",
          artist: "Adele",
        },
      ],
    },
  ];

  return (
    <div className="template-page">
      <div className="head">
        <div className="title">Danh sách mẫu</div>
        <Search />
      </div>
      {templateListData.map((template, index) => (
        <TemplateList key={index} {...template} />
      ))}
      <ProfileTag />
      <UserTrending />
      <UserTemplate />
      <div className="template-footer">
        <div className="left">
          <img src={FakeImg4} alt="" />
        </div>
        <div className="right">
          <div className="title">THAM GIA CENTI+ FOR SOUND CREATOR</div>
          <div className="premium-features">
            <div className="feature-item">
              <div className="icon">
                <img src={CheckIcon} alt="" />
              </div>
              <div className="text">
                Mở khóa tất cả tính năng và tài liệu chuyên môn cho sound
                creator
              </div>
            </div>
            <div className="feature-item">
              <div className="icon">
                <img src={CheckIcon} alt="" />
              </div>
              <div className="text">
                Hợp tác chính thức trong các dự án của CentiVoice
              </div>
            </div>
            <div className="feature-item">
              <div className="icon">
                <img src={CheckIcon} alt="" />
              </div>
              <div className="text">
                Nhận feedback hàng tháng từ mentor để cải thiện kỹ năng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
