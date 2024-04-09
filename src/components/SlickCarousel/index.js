import Slider from "react-slick"; // Import Slider component from react-slick
import { v4 } from "uuid"; // Import v4 function from uuid library

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array containing carousel content
const carouselContent = [
  {
    id: v4(),
    imageUrl:
      "https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712675868/ai-generated-executive-person-smile-confidence-attractive-modern-lady-female-office-portrait-beauty-women-adult-caucasian-young-business-professional-lifestyle-closeup-cheerful-businesswoman-looking-happy-face-free-photo_fv4afj.jpg",
    comment:
      "I stumbled upon this website and could not be happier with the valuable content it offers! From insightful articles to practical tips, its become my go-to resource for [topic/industry]. Keep up the fantastic work!",
    name: "Rosy Cru",
    role: "CEO of NxtWave",
  },
  {
    id: v4(),
    imageUrl:
      "https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712675979/2ea6e58d-e7cf-4846-a601-82fcbb654838_sw3len.jpg",
    comment:
      '"As someone new to Nxt Trendz, I found the information provided on this website incredibly helpful in navigating the complexities of [subject matter]. The user-friendly layout and clear explanations make learning enjoyable and accessible. Highly recommend!"',
    name: "Daisy George",
    role: "Vice President of Marketing",
  },
  {
    id: v4(),
    imageUrl:
      "https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712675979/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office_bx8dwg.jpg",
    comment:
      "What a gem of a website! The well-researched articles and expert advice have been instrumental in enhancing my knowledge and skills in coding. Whether you are a novice or an expert, there's something here for everyone. Kudos to the team behind this invaluable resource!",
    name: "Roy Burke",
    role: "Product Developer",
  },
];

// SlickCarousel component
const SlickCarousel = () => {
  // Settings for the Slider component
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen bg-blue-100 flex flex-col justify-center items-center">
      {/* Slider component with settings */}
      <Slider {...settings} className="w-3/4 max-w-lg">
        {/* Map over carouselContent array to render each item */}
        {carouselContent.map((eachItem) => (
          <div
            key={eachItem.id} // Unique key for each carousel item
            className="flex flex-col md:flex-row justify-center items-center"
          >
            {/* Image */}
            <img
              src={eachItem.imageUrl}
              alt="carousel"
              className="rounded-md max-h-96"
            />
            {/* Comment, name, and role */}
            <div className="">
              <p className="my-3">{eachItem.comment}</p>
              <h1 className="text-sky-700">{eachItem.name}</h1>
              <p className="text-gray-600">{eachItem.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel; // Export SlickCarousel component
