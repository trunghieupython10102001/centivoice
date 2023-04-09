import "./style.scss";
import CheckIcon from "../../assets/icons/check.png";
import MainImage from "../../assets/images/IMG_1740.jpg";
import AppleIcon from "../../assets/icons/apple-logo.png";
import GooglePlay from "../../assets/icons/google-play.png";
import Button from "../common/Button/Button";

const JoinCommunity = () => {
  const features = [
    "Sử dụng voice mẫu miễn phí từ người sáng tạo nội dung",
    "Trở thành voice creator và kiếm tiền từ nội dung sáng tạo của bạn",
    "Tham gia cộng đồng sáng tạo voice của CentiVoice và trải nghiệm mọi tính năng",
    "Cơ hội hợp tác với các nhãn hàng lớn là đối tác của CentiVoice",
  ];

  return (
    <div className="join-community">
      <div className="container">
        <div className="left">
          <h2 className="title">
            Tham gia cộng đồng CentiVoice để trải nghiệm mọi tính năng
          </h2>
          <div className="feature-list">
            {features.map((feature, index) => {
              return (
                <div className="feature-item" key={index}>
                  <div className="icon">
                    <img src={CheckIcon} alt="check-icon" />
                  </div>
                  <p className="text">{feature}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="main-img">
            <img src={MainImage} alt="main-centivoice" />
          </div>
          <div className="download">
            <div className="platform">
              <div className="icon">
                <img src={AppleIcon} alt="appstore" />
              </div>
              <span className="text">AppStore</span>
            </div>
            <div className="platform">
              <div className="icon">
                <img src={GooglePlay} alt="googleplay" />
              </div>
              <span className="text">Google Play</span>
            </div>
          </div>
          <Button bgColor="#500876">Tìm hiểu thêm</Button>
        </div>
      </div>
      <div className="bottom">
        <h2 className="title">Tham gia CentiVoice ngay!</h2>
        <Button bgColor="#500876">Đăng ký</Button>
      </div>
    </div>
  );
};

export default JoinCommunity;
