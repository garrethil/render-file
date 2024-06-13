const Footer = () => {
  return (
    <footer className="bg-headerBG text-center p-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Render File.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:underline">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
