const CardItem = (props) => {
  const { cardItemDetail } = props;
  const {
    id,
    heading,
    mainHeading,
    description,
    imageUrl,
    imageOrder,
    contentOrder,
  } = cardItemDetail;

  return (
    <div className="h-1/2 flex flex-col md:flex-row justify-evenly items-center w-screen my-1">
      <img src={imageUrl} alt="hs" className={`h-56 order-${imageOrder}`} />
      <div className={`order-${contentOrder}`}>
        <h1>{heading}</h1>
        <h1>{mainHeading}</h1>
      </div>
    </div>
  );
};

export default CardItem;
