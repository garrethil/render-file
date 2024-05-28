const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
