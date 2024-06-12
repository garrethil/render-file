import { useContext } from "react";
import { CardContext } from "../utils/CardContext";

const DetailsPage = () => {
  const { selectedVideo } = useContext(CardContext);

  if (!selectedVideo) {
    return <div>No card selected.</div>;
  }

  return (
    <div>
      <h1>Details Page</h1>
      <h2>{selectedVideo.title}</h2>
      <p>{selectedVideo.desc}</p>
    </div>
  );
};

export default DetailsPage;
