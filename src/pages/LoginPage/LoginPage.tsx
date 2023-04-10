import "./style.scss";
import FacebookCircle from "../../assets/icons/facebook-circle.png";
import GoogleIcon from "../../assets/icons/google.png";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left">
        <div className="brand-name">
          <span className="orange">centi</span>
          <span className="purple">voice</span>
        </div>
        <div className="slogan">
          <div>
            <span className="purple">Touch</span>
            <span className="orange"> your sense</span>
          </div>
          <div>
            <span className="purple"> from</span>
            <span className="orange"> our scene</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="overlay"></div>
        <div className="login-form">
          <form action="">
            <div className="form-group">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input className="input" type="text" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="input-label">
                Mật khẩu
              </label>
              <input
                className="input"
                type="text"
                name="password"
                id="password"
              />
            </div>
            <div className="forgot-password">
              <span>Quên mật khẩu?</span>
            </div>
            <button className="login-btn" type="button">
              Đăng nhập
            </button>
            <div className="no-account">Bạn chưa có tài khoản? Đăng ký</div>
            <div className="social-login">
              <div className="icon">
                <img src={FacebookCircle} alt="" />
              </div>
              <div className="text">Đăng nhập bằng Facebook</div>
            </div>
            <div className="social-login">
              <div className="icon">
                <img src={GoogleIcon} alt="" />
              </div>
              <div className="text">Đăng nhập bằng Google</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
