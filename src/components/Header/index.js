import { IoMdMenu } from "react-icons/io";

const Header = () => (
  <nav className="py-4">
    <div className="container mx-auto flex justify-between items-center">
      <img
        className="h-8 w-auto"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="button text-black">Log in</button>
        <button className="bg-blue-500 text-white px-4 py-2 mx-3 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
      <div className="md:hidden">
        <IoMdMenu className="mx-4" />
      </div>
    </div>
  </nav>
);
export default Header;
