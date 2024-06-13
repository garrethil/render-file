import { useContext } from "react";
import { CardContext } from "../utils/CardContext";
import YouTube from "react-youtube";

const DetailsPage = () => {
  const { selectedVideo } = useContext(CardContext);

  if (!selectedVideo) {
    return <div>No card selected.</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl mb-5 underline">{selectedVideo.title}</h2>
      <YouTube videoId={selectedVideo.videoId} className="mb-4" />
      <h4 className="my-3">{selectedVideo.date}</h4>
      <pre
        style={{ whiteSpace: "pre-wrap" }}
        className="m-2 p-2 border-t border-gray-300"
      >
        {selectedVideo.desc}
      </pre>
    </div>
  );
};

export default DetailsPage;
