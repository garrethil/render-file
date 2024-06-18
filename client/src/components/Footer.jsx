const Footer = () => {
  return (
    <footer className="bg-headerBG text-center p-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Render File.</p>
        <div className="flex justify-center space-x-4 my-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a
            href="https://www.youtube.com/@render_file"
            target="_blank"
            className="hover:underline"
          >
            Youtube
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-3 mt-3">
        <p className="credits text-xs text-gray-400">
          website by garret hildebrandt
        </p>
      </div>
    </footer>
  );
};

export default Footer;
