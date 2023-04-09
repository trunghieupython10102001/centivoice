import "./style.scss";
import FacebookCircleIcon from "../../assets/icons/facebook-circle.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import GmailIcon from "../../assets/icons/gmail.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h1 className="main-title">
          <span className="orange">CENTI</span>
          <span className="purple">VOICE - Touch </span>
          <span className="orange">your sense </span>
          <span className="purple">from </span>
          <span className="orange">our scene</span>
        </h1>
        <div className="term">
          Email: <span>centivoice.network@gmail.con</span>
        </div>
        <div className="term">Chính sách bảo mật</div>
        <div className="term">Cộng đồng</div>
        <div className="term">Điều khoản sử dụng</div>
      </div>
      <div className="right">
        <div className="icon">
          <img src={FacebookCircleIcon} alt="facebook" />
        </div>
        <div className="icon">
          <img src={InstagramIcon} alt="instagram" />
        </div>
        <div className="icon">
          <img src={GmailIcon} alt="gmail" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
