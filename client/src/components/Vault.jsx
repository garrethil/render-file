import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../utils/CardContext";
import axios from "axios";
import "../index.css"; // Import the CSS file

export default function Vault() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // State for collapsing/expanding the list
  const [maxHeight, setMaxHeight] = useState("0px"); // State for dynamic height
  const { setSelectedVideo } = useContext(CardContext);
  const navigate = useNavigate();
  const listRef = useRef(null); // Ref to measure the list's height

  const axios_endpoint = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
  });

  useEffect(() => {
    axios_endpoint
      .get("/api/content")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (listRef.current) {
      setMaxHeight(isExpanded ? `${listRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  if (loading)
    return <p className="text-center align-items-centre">Loading...</p>;
  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>Vault is being filled</p>;
  }

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    navigate(`/vault/${video.videoId}`);
  };

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex flex-col items-center p-4 m-4" id="vault">
      <h1 className="text-xl my-5 p-2">The Render File Vault</h1>
      <button
        onClick={toggleList}
        className="ml-2 hover:underline border-4 border-headerBG rounded-md px-2 py-1"
        aria-label={isExpanded ? "Collapse list" : "Expand list"}
      >
        {isExpanded ? (
          <span>&#9650; Close Vault{/* Upward arrow */}</span>
        ) : (
          <span>&#9660; Open Vault{/* Downward arrow */}</span>
        )}
      </button>
      <div
        className="w-full transition-max-height duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight }}
      >
        <div
          ref={listRef}
          className="flex flex-col mx-auto gap-2 w-3/4 pb-4 mt-4 border-4 border-headerBG rounded-lg p-4 overflow-y-scroll h-[400px]"
        >
          {data.map((video) => (
            <div
              key={video.videoId}
              onClick={() => handleCardClick(video)}
              className="w-full p-3 flex items-center justify-around lg:justify-center cursor-pointer hover:text-highlight hover:underline"
            >
              <h3 className="text-sm video-title mr-10">{video.title}</h3>
              <h4 className="text-sm hidden md:block">{video.date}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
