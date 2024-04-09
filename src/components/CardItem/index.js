const CardItem = (props) => {
  // Destructuring props to get cardItemDetail
  const { cardItemDetail } = props;
  const { heading, mainHeading, description, imageUrl } = cardItemDetail;

  return (
    // Container for each card item
    <div className="flex flex-col md:flex-row justify-between items-center md:w-3/4 w-screen my-5 p-3">
      {/* Image section */}
      <img src={imageUrl} alt="hs" className="h-56" />
      {/* Content section */}
      <div className="flex flex-col justify-center items-start md:w-1/2">
        {/* Heading */}
        <h1 className="text-blue-500 m-2">{heading}</h1>
        {/* Main heading */}
        <h1 className="text-stone-950 text-2xl md:text-3xl m-2">
          {mainHeading}
        </h1>
        {/* Description */}
        <p className="m-2">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
