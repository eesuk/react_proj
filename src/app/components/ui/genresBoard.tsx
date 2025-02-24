import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";
import { GenreTypes } from "app/API/fake.api/genres.api";

const GenreList = styled.div`
  color: #e0e5ec;
  padding: 25px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 51px;
  font-size: large;
  background-color: #1f2936;
  border-radius: 8px;
  border: solid 1px #e0e5ec;
  max-height: 400px;
`;

const GenresBoardStyle = styled.li`
  margin-right: 10px;
  font-size: 14px;
  font-style: italic;
  border: solid 1px #e0e5ec;
  padding: 5px;
  border-radius: 4px;
  &:hover {
    color: #1f2936;
    background-color: #e0e5ec;
  }
`;

interface GenresBoardPropTypes {
  genres: { [key: string]: GenreTypes };
  onSelectedGenre: (genre: GenreTypes) => void;
  onClear: () => void;
}

const GenresBoard: React.FC<GenresBoardPropTypes> = ({
  genres,
  onSelectedGenre,
  onClear,
}) => {
  return (
    <GenreList>
      <span>По жанру:</span>
      <ul>
        {Object.keys(genres).map((genre) => {
          return (
            <li
              key={genres[genre].id}
              id={genres[genre].id}
              onClick={() => {
                onSelectedGenre(genres[genre]);
              }}
              role="button"
            >
              <GenresBoardStyle>{genres[genre].name}</GenresBoardStyle>
            </li>
          );
        })}
        <li onClick={onClear} role="button">
          Все фильмы
        </li>
      </ul>
    </GenreList>
  );
};

export default GenresBoard;

// GenresBoard.propTypes = {
//   genres: PropTypes.object.isRequired,
//   onSelectedGenre: PropTypes.func.isRequired,
//   onClear: PropTypes.func.isRequired,
// };
