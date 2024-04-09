import { IoMdMenu } from "react-icons/io";

const Header = () => (
  // Navigation bar container
  <nav className="py-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Website logo */}
      <img
        className="h-8 w-auto"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      {/* Navigation links for larger screens */}
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Individual
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Enterprise
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-300">
              Resources
            </a>
          </li>
        </ul>
      </div>
      {/* Login and Get Started buttons for larger screens */}
      <div className="hidden md:block">
        <button className="button text-black">Log in</button>
        <button className="bg-blue-500 text-white px-4 py-2 mx-3 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
      {/* Menu icon for smaller screens */}
      <div className="md:hidden">
        <IoMdMenu className="mx-4" />
      </div>
    </div>
  </nav>
);
export default Header;
