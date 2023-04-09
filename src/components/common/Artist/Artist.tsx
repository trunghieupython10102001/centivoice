import "./style.scss";

export interface ArtistProps {
  imgSrc: string;
  name: string;
  title: string;
}

const Artist = ({ imgSrc, name, title }: ArtistProps) => {
  return (
    <div className="artist">
      <div className="artist-avatar">
        <img src={imgSrc} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Artist;
