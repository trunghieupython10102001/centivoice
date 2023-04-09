import "./style.scss";
import Avatar from "../../assets/images/avatar.jpg";

const ProfileTag = () => {
  return (
    <div className="profile-tag">
      <div className="container">
        <div className="avatar">
          <img src={Avatar} alt="" />
        </div>
        <div className="info">
          <div className="username">Quynh Tran</div>
          <div className="status">
            <span className="status-name">Đang hoạt động</span>
            <div className="active-status"></div>
          </div>
        </div>
      </div>
      <div className="follower">10.2k followers</div>
    </div>
  );
};

export default ProfileTag;
