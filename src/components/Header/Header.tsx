import { Link } from "react-router-dom";
import routes from "../../routes";
import "./style.scss";
import Avatar from "../../assets/images/avatar.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">centivoice</h1>
        <div className="menu">
          {routes.map((route, index) => {
            return (
              <Link className="link" to={route.path} key={index}>
                {route.name}
              </Link>
            );
          })}
        </div>
        <div className="profile">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
