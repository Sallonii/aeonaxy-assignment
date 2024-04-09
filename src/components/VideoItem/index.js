// VideoItem component
const VideoItem = () => (
  // Main container for the video item
  <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden my-5">
    {/* Background image */}
    <div
      className="absolute top-0 w-full h-1/2 bg-cover bg-center z-0"
      style={{
        // Inline style to set the background image
        backgroundImage:
          "url(https://res.cloudinary.com/dwj8ezxgi/image/upload/v1712659456/modern-dark-blue-background-with-golden-lines-element-vector_uoqw4t.jpg)",
      }}
    ></div>

    {/* Content container */}
    <div className="z-10 text-center mb-16">
      {/* Video title */}
      <h2 className="text-xl text-sky-400 font-bold">VIDEO</h2>
      {/* Title of the video */}
      <h1 className="text-3xl text-white font-bold mt-2">
        See What You Can Do With Routing Form
      </h1>
    </div>

    {/* Video player container */}
    <div className="relative z-10 p-2 bg-white rounded-lg shadow-lg mb-20">
      {/* YouTube video player */}
      <iframe
        width="410"
        height="315"
        src="https://www.youtube.com/embed/0IkqkSfepIY?si=OL832quInMP2JwqH"
        title="YouTube video player"
        frameBorder="0"
        // Allowing certain permissions for the embedded player
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // Setting referrer policy
        referrerPolicy="strict-origin-when-cross-origin"
        // Allowing full screen mode
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

// Export VideoItem component
export default VideoItem;
