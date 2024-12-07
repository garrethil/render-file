import Schedule from "../components/Schedule";
import "../index.css"; // Import the CSS file
import { CarouselDefault } from "../components/Carousel";
import About from "../components/About.jsx";
import Vault from "../components/Vault.jsx";

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col items-centerp-4 mb:p-6 lg:p-8">
        <Schedule />
      </div>
      <About />
      <CarouselDefault />
      <Vault />
    </div>
  );
}
