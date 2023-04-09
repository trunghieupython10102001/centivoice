import Cover from "../../components/Cover/Cover";
import Header from "../../components/Header/Header";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import Trending from "../../components/Trending/Trending";

const HomePage = () => {
  return (
    <div>
      <Cover />
      <Trending />
      <JoinCommunity />
    </div>
  );
};

export default HomePage;
