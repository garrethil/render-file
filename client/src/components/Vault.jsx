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
    // Set the max height dynamically based on the content's height
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
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <div className="w-full flex flex-col items-center p-4" id="vault">
      <h1 className="text-xl my-5 p-2">The Render File Vault</h1>
      <h2 className="text-xl font-bold my-4 p-2 flex items-center">
        Past Renderings
      </h2>
      <button
        onClick={toggleList}
        className="ml-2 hover:underline border border-gray-500 rounded px-2 py-1"
        aria-label={isExpanded ? "Collapse list" : "Expand list"}
      >
        {isExpanded ? (
          <span>&#9650; Close Vault{/* Upward arrow */}</span>
        ) : (
          <span>&#9660; Open Vault{/* Downward arrow */}</span>
        )}
      </button>
      <div
        ref={listRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="flex flex-col gap-4 w-full pb-4 mt-4 border border-black p-4">
          {data.map((video) => (
            <div
              key={video.videoId}
              onClick={() => handleCardClick(video)}
              className="w-full p-2 flex items-center justify-between lg:justify-around cursor-pointer hover:text-highlight hover:underline"
            >
              <h3 className="text-sm video-title mr-4">{video.title}</h3>
              <h4 className="text-sm hidden md:block">{video.date}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
