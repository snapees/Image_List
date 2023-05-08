import React from "react";

const ImageList = (props) => {
  // console.log(props);
  const images = props.images.map((image) => {
    return (
      <div key={image.id}>
        <img src={image.webformatURL} alt="image" />;
      </div>
    );
  });
  return (
    <div>
      <div>{images}</div>
    </div>
  );
};

export default ImageList;
