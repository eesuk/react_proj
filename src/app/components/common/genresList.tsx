import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Genre from "./genre";
import { GenreTypes } from "app/API/fake.api/genres.api";
import { MovieInfoStatic, MovieInfo } from "../style/movieStyle";

interface GenresListPropTypes {
  items: GenreTypes[];
}

const GenresList: React.FC<GenresListPropTypes> = ({ items }) => {
  return (
    <MovieInfoStatic>
      Жанр:
      <MovieInfo>
        {items.map((genre) => (
          <Genre key={genre.id} name={genre.name} id={genre.id} />
        ))}
      </MovieInfo>
    </MovieInfoStatic>
  );
};

export default GenresList;

/* interface GenresListPropTypes {
  items: { [key: string]: GenreTypes };
}

const GenresList: React.FC<GenresListPropTypes> = ({ items }) => {
  return (
    <li className="movie_info_static">
      Жанр:
      <span className="movie_info">
        {Object.keys(items).map((item) => {
          return (
            <Genre
              key={items[item].id}
              name={items[item].name}
              id={items[item].id}
            />
          );
        })}
      </span>
    </li>
  );
};

export default GenresList;*/
