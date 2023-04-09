import "./style.scss";
import CoverVideo from "../../assets/images/cover_video.mp4";
import Button from "../common/Button/Button";

const Cover = () => {
  return (
    <div className="cover">
      <video className="cover-video" autoPlay muted loop>
        <source src={CoverVideo} type="video/mp4" />
      </video>
      <div className="cover-content">
        <div className="subhead">Welcome to</div>
        <div className="mainhead">centivoice</div>
        <div className="buttons">
          <Button bgColor="#500876">Đăng ký</Button>
          <Button bgColor="#ef701e">CentiVoice for Business</Button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
