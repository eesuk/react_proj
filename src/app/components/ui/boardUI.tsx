import React from "react";
import { GenreTypes } from "app/API/fake.api/genres.api";
import { MovieTypes } from "app/API/fake.api/movies.api";
import GenresBoard from "./genresBoard";
import TopFiveMovies from "./topFiveMovies";

interface BoardUIPropTypes {
  genres: { [key: string]: GenreTypes };
  onSelectedGenre: (genre: GenreTypes) => void;
  onClear: () => void;
  movies: MovieTypes[] | undefined;
}

const BoardUI: React.FC<BoardUIPropTypes> = ({
  genres,
  onSelectedGenre,
  onClear,
  movies,
}: BoardUIPropTypes) => {
  return (
    <div>
      <GenresBoard
        genres={genres}
        onSelectedGenre={onSelectedGenre}
        onClear={onClear}
      />
      <TopFiveMovies movies={movies} />
    </div>
  );
};

export default BoardUI;
