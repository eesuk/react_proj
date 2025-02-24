import React from "react";

interface FavouriteMarkPropTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status: boolean;
}

const FavouriteMark: React.FC<FavouriteMarkPropTypes> = ({
  status,
  ...rest
}) => {
  return (
    <button {...rest}>
      <i className={`favourite_mark bi bi-heart${status ? "-fill" : ""}`}></i>
    </button>
  );
};

export default FavouriteMark;
