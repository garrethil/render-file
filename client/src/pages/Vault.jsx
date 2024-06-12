import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../utils/CardContext";
import axios from "axios";

export default function Vault() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setSelectedVideo } = useContext(CardContext);
  const navigate = useNavigate();

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

  if (loading) return <p>Loading...</p>;
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
    <div className="max-w-full flex flex-col items-center">
      <h2>Past Renderings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((video) => (
          <div
            key={video.videoId}
            onClick={() => handleCardClick(video)}
            className="p-4 border rounded shadow"
          >
            <h3 className="font-bold">{video.title}</h3>
            <h4>{video.date}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
