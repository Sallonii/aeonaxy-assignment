import { v4 } from "uuid";

import VideoItem from "../VideoItem"; // Import VideoItem component
import CardItem from "../CardItem"; // Import CardItem component
import SlickCarousel from "../SlickCarousel"; // Import SlickCarousel component
import Footer from "../Footer"; // Import Footer component

// Array of card items
const cardItems = [
  {
    id: v4(),
    heading: "AUTOMATIVE EXPERIENCE",
    mainHeading: "Schedule efficiently and save everyone time",
    description:
      "The faster you connect customer, clients or students to right people and resources, the more time everyone gets back.",
    imageUrl:
      "https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712660355/PageContact-header_toid7v.svg",
  },
  {
    id: v4(),
    heading: "SIMPLE AND INTUITIVE",
    mainHeading: "Build and publish a form in minutes",
    description:
      "Quickly get started with a straightforward form building experience.",
    imageUrl:
      "https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712660436/contact-us-form-for-website-and-landing-page-template-with-clients-service-agent-character-business-internet-chatting-and-customers-support-application-interface-illustration-isolated-free-vector_kujlfi.jpg",
  },
  {
    id: v4(),
    heading: "FASTER CONNECTIONS",
    mainHeading: "No more missed opportunities",
    description: "Ember routing forms to your websites.",
    imageUrl:
      "https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712660564/man-avatar-with-calendar-and-search-button-design-free-vector_eeijtp.jpg",
  },
];

// Home component
const Home = () => (
  <>
    {/* Main content */}
    <div className="flex flex-col justify-center min-h-screen items-center text-center">
      <div className="w-3/2 border-solid border-black">
        {/* Heading */}
        <h1 className="text-blue-500 p-4">ROUTING FORMS</h1>
        {/* Main heading */}
        <h1 className="text-stone-700 text-4xl p-4 md:text-6xl">
          Make higher quality connections
        </h1>
        {/* Description */}
        <p className="p-4 text-1xl md:text-3xl">
          Request information from website visitors or invitees and-based on
          their responses route them to the right person and resource
        </p>
        {/* Buttons */}
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 mx-3 rounded-full hover:bg-blue-600">
            Start for free
          </button>
          <button className="button text-black border-solid border-2 border-black rounded-full px-4 py-2 hover:bg-blue-600 hover:border-none hover:text-white">
            Talk with Sales
          </button>
        </div>
      </div>
    </div>
    {/* Better Conversions section */}
    <div className="h-3/6 flex flex-col md:flex-row justify-center items-center">
      <div>
        {/* Heading */}
        <h1 className="text-blue-500 p-4">BETTER CONVERSIONS</h1>
        {/* Subheading */}
        <h1 className="md:w-3/2 text-stone-950 text-2xl p-4 md:text-3xl">
          Screen and qualify website visitors or invitees
        </h1>
      </div>
      {/* Image */}
      <img
        src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712657245/people-character-holding-pencil-and-putting-check-mark-on-checklist-in-survey-form-notebook-and-memory-stickers-business-organization-and-planning-concept-isometric-modern-illustration-vector_j3elvd.jpg"
        alt="better conversions"
        className="h-min md:w-1/2 w-2/2 rounded-md"
      />
    </div>
    {/* VideoItem component */}
    <VideoItem />
    {/* Card items */}
    <div className="flex flex-col justify-center items-center my-2">
      {cardItems.map((eachItem) => (
        <CardItem cardItemDetail={eachItem} key={eachItem.id} />
      ))}
    </div>
    {/* SlickCarousel component */}
    <SlickCarousel />
    {/* Footer component */}
    <Footer />
  </>
);

export default Home;
