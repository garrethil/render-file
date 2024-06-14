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
      <img
        src="/renderFile2.png"
        alt="Render File Event"
        className="mx-5 mb-4 border-4 border-gray-300 rounded md:w-1/2"
      />
      <h2 className="text-xl font-bold mb-4">Past Renderings</h2>
      <div className="flex flex-col gap-4 w-full vault-item">
        {data.map((video) => (
          <div
            key={video.videoId}
            onClick={() => handleCardClick(video)}
            className="w-full p-2 cursor-pointer hover:underline flex items-center justify-between lg:justify-around"
          >
            <h3 className="text-sm">{video.title}</h3>
            <h4 className="text-sm hover:text-red-500 hidden md:block">
              {video.date}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
