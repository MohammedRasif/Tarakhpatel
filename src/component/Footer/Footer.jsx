import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full pb-5">
        <hr  className="text-gray-600"/>
      <footer className="container mx-auto bg-black text-white py-4 flex justify-between items-center px-6">
        <div>
          <h1 className="text-lg">Cadmina - Health Orchestrated</h1>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-gray-300 cursor-pointer" size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-300 cursor-pointer" size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-300 cursor-pointer" size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;