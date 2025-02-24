import React from "react";
import { _renderMatches } from "react-router/dist/lib/hooks";
//import PropTypes from "prop-types";
import styled from "styled-components";

const GenreInfo = styled.span`
  margin-right: 10px;
  color: #bac7e2;
`;

interface GenrePropTypes {
  name: string;
  id: string;
}

const Genre: React.FC<GenrePropTypes> = ({ name, id }) => {
  return (
    <GenreInfo id={id} className="genre_info">
      {name}
    </GenreInfo>
  );
};

export default Genre;

// Genre.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };
