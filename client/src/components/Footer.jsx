import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useAdmin } from "../utils/AdminContext"; // Adjust the import path as needed

const Footer = () => {
  const { enableAdminMode } = useAdmin();

  return (
    <footer className="bg-headerBG text-center p-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Render File.</p>
        <div className="flex justify-center space-x-4 my-4">
          <a href="/about" className="hover:underline text-lg">
            <img
              src="/file-black.svg"
              alt="Render File Logo"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.youtube.com/@render_file"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/render.file"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-lg"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-3 mt-3">
        <address
          className="credits text-gray-400"
          onClick={enableAdminMode} // Ensure the onClick handler is a function
        >
          by Garret Hildebrandt
        </address>
      </div>
    </footer>
  );
};

export default Footer;
