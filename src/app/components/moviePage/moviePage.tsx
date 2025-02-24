import React, { useEffect, useState } from "react";
import API from "../../API";
import Movie from "../common/movie";
import VideoPlayer from "./videoPlayer";
import Input from "../common/form/input";
import CommList from "./commList";
import Pagintation from "../common/pagination";
import paginate from "../utils/paginate";
import _ from "lodash";
import { FormWrapper } from "../style/fromstyle";
import MoviePhotos from "./moviePhotos";

import { MovieTypes } from "app/API/fake.api/movies.api";
import { CommentariesTypes } from "app/API/fake.api/commentaries";

interface MoviePagePropTypes {
  movieId: string;
}

const MoviePage: React.FC<MoviePagePropTypes> = ({ movieId }) => {
  const [movie, setMovie] = useState<MovieTypes | undefined>();
  const [commentary, setCommentary] = useState<CommentariesTypes>({
    id: "",
    movieId: movieId,
    nickname: "",
    commText: "",
    date: new Date(),
  });
  const [commList, setCommList] = useState<CommentariesTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    API.movies
      .getById(movieId)
      .then((data: MovieTypes | undefined) => setMovie(data));
  }, [movieId]);

  useEffect(() => {
    API.commentaries
      .getById(movieId)
      .then((data: CommentariesTypes[]) => setCommList(data));
  }, [movieId]);

  const handleFavourite = (movieId: string) => {
    if (movie && movie.id === movieId) {
      const updatedMovie = {
        ...movie,
        favouriteMark: !movie.favouriteMark,
      };
      setMovie(updatedMovie);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentary((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentary.commText && commentary.nickname) {
      setCommList((prevState) => [
        ...prevState,
        {
          ...commentary,
          date: new Date(), // Обновляем дату комментария
        },
      ]);
      setCommentary({
        id: "",
        movieId: movieId,
        nickname: "",
        commText: "",
        date: new Date(),
      });
    }
  };

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  if (movie) {
    const pageCorp = paginate(movie.photos, currentPage, 1);
    const sortedCommsByDate = _.orderBy(commList, ["date"], ["desc"]);

    return (
      <div className="movie_page">
        <Movie {...movie} onFavourite={handleFavourite} />
        <MoviePhotos photos={pageCorp} />
        <Pagintation
          itemsCount={movie.photos.length}
          pageSize={1}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <VideoPlayer video={movie.video} />
        <FormWrapper onSubmit={handleSubmit}>
          <Input
            label="Ник:"
            name="nickname"
            value={commentary.nickname}
            type="text"
            onChange={handleChange}
          />
          <Input
            label="Комментарий: "
            name="commText"
            value={commentary.commText}
            type="text"
            onChange={handleChange}
          />
          <button type="submit">Отправить</button>
        </FormWrapper>
        <CommList commList={sortedCommsByDate} />
      </div>
    );
  }

  return null;
};

export default MoviePage;
