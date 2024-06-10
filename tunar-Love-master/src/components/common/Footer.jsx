import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-2 text-center md:text-left">
                <li>
                  <a href="/" className="text-gray-500 hover:text-gray-700">
                    Products & Service
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 hover:text-gray-700">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 hover:text-gray-700">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-500 hover:text-gray-700">
                    About
                  </a>
                </li>
              </ul>
              <Link to="/">
                <img src="src/assets/Lunar Love.svg" alt="logo" />
              </Link>
              <div className="w-full flex justify-center md:justify-start space-x-4 mt-2">
                <a
                  href="https://facebook.com"
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col gap-3 px-2 text-center md:text-left">
            <h4 className="font-semibold text-lg">Join Our Newsletter</h4>
            <p>
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </p>
            <form className="flex flex-col md:flex-row items-center mb-4 mt-4 space-y-2 md:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l md:rounded-r-none border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <button
                type="submit"
                className="p-2 bg-black text-white rounded-r md:rounded-l-none w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-11/12 mx-auto border-t pt-4 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <li>
              <a href="/" className="hover:underline">
                English
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Legal
              </a>
            </li>
          </ul>
          <div className="text-center md:text-right">
            © 2023 Lunar Love. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
