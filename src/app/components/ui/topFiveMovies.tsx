import _ from "lodash";
import React from "react";
import paginate from "../utils/paginate";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieTypes } from "app/API/fake.api/movies.api";

const TopList = styled.div`
  border: solid 1px #2d435d;
  margin-top: 15px;
  margin-left: 30px;
  color: #e0e5ec;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  background-color: #1f2936;
`;

const MovieBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px #e0e5ec;
  width: 150px;
  border-radius: ;
  margin-bottom: 10px;
  background-color: #18202a;
`;

const ImageStyle = styled.img`
  height: 170px;
  width: 120px;
  border-radius: 8px;
  margin-top: 10px;
`;

const Title = styled.span`
  margin-bottom: 12px;
  font-size: 13px;
  color: #8499c3;
`;

interface TopFiveMoviesPropTypes {
  movies: MovieTypes[] | undefined;
}

const TopFiveMovies: React.FC<TopFiveMoviesPropTypes> = ({ movies }) => {
  const moviesSortedByRate = _.sortBy(movies, "rate").reverse();
  const topFive = paginate(moviesSortedByRate, 1, 5);

  return (
    <TopList>
      Топ 5 фильмов
      {topFive.map((movie) => {
        return (
          <Link to={`/movie_page/${movie.id}`}>
            <MovieBoard>
              <ImageStyle src={movie.mainPhoto} />
              <Title>{movie.name}</Title>
            </MovieBoard>
          </Link>
        );
      })}
    </TopList>
  );
};

export default TopFiveMovies;

// TopFiveMovies.propTypes = {
//   movies: PropTypes.array.isRequired,
// };
