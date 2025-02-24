import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

import GenresList from "./genresList";
import MovieRate from "./movierRate";
import FavouriteMark from "./favouriteMark";
import { MovieTypes } from "app/API/fake.api/movies.api";

import {
  MovieBoardBorder,
  MovieBoard,
  MovieMainImage,
  AllInfo,
  MovieTitle,
  MovieInfoStatic,
  MovieInfo,
  MovieInfoRate,
  ButtonLink,
} from "../style/movieStyle.js";

interface onFavouriteType {
  onFavourite: (id: string) => void;
}

const Movie: React.FC<MovieTypes & onFavouriteType> = ({
  id,
  name,
  originalName,
  year,
  country,
  genre,
  views,
  rate,
  director,
  mainPhoto,
  favouriteMark,
  onFavourite,
}) => {
  return (
    <MovieBoardBorder>
      <MovieBoard id={id}>
        <Link to={`/movie_page/${id}`}>
          <MovieMainImage src={mainPhoto} />
        </Link>
        <AllInfo>
          <MovieTitle>
            {name}
            <MovieInfo>{` (${year})`}</MovieInfo>
          </MovieTitle>
          <MovieInfoStatic>
            Оригинальное название:
            <MovieInfo>{originalName}</MovieInfo>
          </MovieInfoStatic>
          <MovieInfoStatic>
            Страна:
            <MovieInfo>{country}</MovieInfo>
          </MovieInfoStatic>
          <GenresList key={id} items={genre} />
          <MovieInfoStatic>
            Режисер:
            <MovieInfo>{director}</MovieInfo>
          </MovieInfoStatic>
          <MovieInfoStatic>
            Количество просмотров:
            <MovieInfo>{views}</MovieInfo>
          </MovieInfoStatic>
        </AllInfo>
      </MovieBoard>
      <MovieInfoRate>
        Рeйтинг:
        <MovieRate key={id} rate={rate} />
      </MovieInfoRate>
      <Link to={`/movie_page/${id}`}>
        <ButtonLink>Смотреть</ButtonLink>
      </Link>
      <FavouriteMark
        key={id}
        status={favouriteMark}
        onClick={() => onFavourite(id)}
      />
    </MovieBoardBorder>
  );
};

export default Movie;

// Movie.propType = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   originalName: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   genre: PropTypes.object.isRequired,
//   views: PropTypes.number.isRequired,
//   rate: PropTypes.number.isRequired,
//   director: PropTypes.string.isRequired,
//   mainPhoto: PropTypes.string.isRequired,
//   favouriteMark: PropTypes.bool.isRequired,
//   onFavourite: PropTypes.func.isRequired,
// };
