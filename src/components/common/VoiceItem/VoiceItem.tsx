import "./style.scss";

export interface VoiceItemProps {
  imgSrc: string;
  voiceName: string;
  artist: string;
  isStory?: boolean;
}

const VoiceItem = ({ imgSrc, voiceName, artist, isStory }: VoiceItemProps) => {
  return (
    <div className="voice-item">
      <div className={`image ${isStory ? "story" : ""}`}>
        <img src={imgSrc} alt="voice-item" />
      </div>
      <div className="voiceName">{voiceName}</div>
      <div className="artist">{artist}</div>
    </div>
  );
};

export default VoiceItem;
