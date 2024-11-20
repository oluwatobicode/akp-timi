import akp from "../assets/AKP-TIMI/AKP-VIDEO.mp4";

const AkpVideo = () => {
  return (
    <div className="video-container">
      <video
        src={akp}
        controls
        loop
        muted
        className="w-[300px] h-auto rounded-lg"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default AkpVideo;
