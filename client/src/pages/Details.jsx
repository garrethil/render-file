import { useContext } from "react";
import { CardContext } from "../utils/CardContext";
import YouTube from "react-youtube";

const DetailsPage = () => {
  const { selectedVideo } = useContext(CardContext);

  if (!selectedVideo) {
    return <div>No card selected.</div>;
  }
  const opts = {
    playerVars: {
      controls: 0,
      modestbranding: 1,
      fs: 1,
    },
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl m-5 underline">{selectedVideo.title}</h2>
      <div className="rounded overflow-hidden">
        <YouTube
          videoId={selectedVideo.videoId}
          opts={opts}
          className="mb-4 "
        />
      </div>
      <pre
        style={{ whiteSpace: "pre-wrap" }}
        className="m-2 p-2 border-t border-gray-300"
      >
        {selectedVideo.desc}
      </pre>
      <h5 className="my-3 text-xs">{selectedVideo.date}</h5>
    </div>
  );
};

export default DetailsPage;
