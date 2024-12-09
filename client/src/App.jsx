import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-flex-start min-h-screen font text-black">
      <Navbar />
      <div className="flex-grow bg-custom-gradient">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
