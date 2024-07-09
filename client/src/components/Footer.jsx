import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-headerBG text-center p-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Render File.</p>
        <div className="flex justify-center space-x-4 my-4">
          <a href="/about" className="hover:underline text-lg">
            About
          </a>
          <a
            href="https://www.youtube.com/@render_file"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/render.file"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-3 mt-3">
        <address className="credits text-gray-400">
          by Garret Hildebrandt
        </address>
      </div>
    </footer>
  );
};

export default Footer;
