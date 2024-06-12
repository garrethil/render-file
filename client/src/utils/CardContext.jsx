import { createContext, useState } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <CardContext.Provider value={{ selectedVideo, setSelectedVideo }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
