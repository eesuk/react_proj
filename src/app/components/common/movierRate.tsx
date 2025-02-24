import React from "react";
import PropTypes from "prop-types";

interface MovieRatePropTypes {
  rate: number;
}

const MovieRate: React.FC<MovieRatePropTypes> = ({ rate }) => {
  let color;

  if (rate < 4) {
    color = "bg-danger";
  } else if (rate < 7) {
    color = "bg-secondary";
  } else if (rate < 9) {
    color = "bg-success";
  } else {
    color = "bg-warning";
  }

  return <i className={color + " movie_rate"}>{rate}</i>;
};

MovieRate.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default MovieRate;
