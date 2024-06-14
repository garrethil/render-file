import { useContext } from "react";
import { CardContext } from "../utils/CardContext";
import YouTube from "react-youtube";

const DetailsPage = () => {
  const { selectedVideo } = useContext(CardContext);

  if (!selectedVideo) {
    return <div>No card selected.</div>;
  }
  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl m-3 sm:m-5 underline">
        {selectedVideo.title}
      </h2>
      <div className="w-full max-w-screen-sm rounded overflow-hidden">
        <YouTube
          videoId={selectedVideo.videoId}
          opts={{ ...opts, width: "100%" }}
          className="mb-4 w-full"
        />
      </div>
      <pre
        className="m-2 p-2 sm:p-4 border-t border-gray-300 text-sm sm:text-base lg:text-lg"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {selectedVideo.desc}
      </pre>
      <h5 className="my-3 text-xs sm:text-sm lg:text-base">
        {selectedVideo.date}
      </h5>
    </div>
  );
};

export default DetailsPage;
