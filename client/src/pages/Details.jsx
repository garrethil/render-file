import { useContext } from "react";
import { CardContext } from "../utils/CardContext";

const DetailsPage = () => {
  const { selectedVideo } = useContext(CardContext);

  if (!selectedVideo) {
    return <div>No card selected.</div>;
  }

  return (
    <div>
      <h2>{selectedVideo.title}</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{selectedVideo.desc}</pre>
    </div>
  );
};

export default DetailsPage;
