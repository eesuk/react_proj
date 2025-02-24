import React from "react";
import styled from "styled-components";

const ImgStyle = styled.img`
  width: 1100px;
  height: 550px;
  margin-bottom: 10px;
`;

interface MoviePhotosPropTypes {
  photos: string[];
}

const MoviePhotos: React.FC<MoviePhotosPropTypes> = ({ photos }) => {
  return (
    <div>
      {photos.map((photo, index) => (
        <ImgStyle key={index} src={photo} alt={`Movie photo ${index}`} />
      ))}
    </div>
  );
};

export default MoviePhotos;
