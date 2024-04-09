import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    // Footer container
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Easy Ahead section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Easy Ahead</h2>
            <p>
              We take the work out of connecting with others so you can
              accomplish more.
            </p>
            {/* Social media icons */}
            <div className="flex mt-4">
              <FaInstagram className="mr-4" />
              <FaFacebook className="mr-4" />
              <FaTwitter className="mr-4" />
              <FaYoutube className="mr-4" />
              <FaLinkedin />
            </div>
          </div>
          {/* About section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>About NxtTrendz</li>
              <li>Contact Sales</li>
              <li>Newsroom</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* Solutions section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>Customer Success</li>
              <li>Sales</li>
              <li>Marketing</li>
            </ul>
          </div>
          {/* Popular Features section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Features</h3>
            <ul className="space-y-2">
              <li>Embed NxtTrendz</li>
              <li>Availability</li>
            </ul>
          </div>
          {/* Support section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Video Tutorials</li>
              <li>Cookies</li>
            </ul>
          </div>
          {/* Add-Ons section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Add-Ons</h3>
            <ul className="space-y-2">
              <li>Download for Chrome</li>
              <li>Download for Firefox</li>
            </ul>
          </div>
          {/* Developers section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>Dev Tools</li>
            </ul>
          </div>
        </div>
        {/* Copyright text */}
        <div className="mt-8 text-center">
          <p>&copy; Copyright NxtTrendz 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
