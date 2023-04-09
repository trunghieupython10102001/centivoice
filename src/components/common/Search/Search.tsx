import "./style.scss";
import SearchIcon from "../../../assets/icons/search.png";

const Search = () => {
  return (
    <div className="searching">
      <input type="text" placeholder="Tìm kiếm" className="searching-input" />
      <div className="icon">
        <img src={SearchIcon} alt="search" />
      </div>
    </div>
  );
};

export default Search;
