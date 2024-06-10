import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-flex-start min-h-screen">
      <Navbar />
      <div className="flex-grow bodySection">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
