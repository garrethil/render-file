import { createContext, useState } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
