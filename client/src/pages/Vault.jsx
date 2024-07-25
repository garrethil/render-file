import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../utils/CardContext";
import axios from "axios";
import "../index.css"; // Import the CSS file

export default function Vault() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setSelectedVideo } = useContext(CardContext);
  const navigate = useNavigate();

  const axios_endpoint = axios.create({
    baseURL: "https://renderfile-6f797c2d85db.herokuapp.com",
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

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h1 className="text-xl my-5 p-2">The Render File Vault</h1>
      <img
        src="/renderFile2.png"
        alt="Render File Event"
        className="mx-5 mb-4 border-4 border-gray-300 rounded md:w-1/2"
      />
      <h2 className="text-xl font-bold my-4 p-2">Past Renderings</h2>
      <div className="flex flex-col gap-4 w-full vault-item pb-4">
        {data.map((video) => (
          <div
            key={video.videoId}
            onClick={() => handleCardClick(video)}
            className="w-full p-2 cursor-pointer flex items-center justify-between lg:justify-around"
          >
            <h3 className="text-sm video-title">{video.title}</h3>
            <h4 className="text-sm hidden md:block">{video.date}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
