import Schedule from "../components/Schedule";
import "../index.css"; // Import the CSS file

import About from "../components/About.jsx";
import Vault from "../components/Vault.jsx";

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col items-center p-4 mb:p-6 lg:p-8">
        <Schedule />
      </div>
      <About />
      <Vault />
    </div>
  );
}
