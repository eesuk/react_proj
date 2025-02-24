import React from "react";
import { useParams } from "react-router-dom";
import MoviesList from "../components/ui/moviesList.tsx";
import MoviePage from "../components/moviePage/moviePage.tsx";

const Movies = () => {
  const params = useParams();
  const { movieId } = params;
  return <>{movieId ? <MoviePage movieId={movieId} /> : <MoviesList />}</>;
};

export default Movies;
