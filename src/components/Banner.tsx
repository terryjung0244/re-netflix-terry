import React from "react";
import { MovieModel } from "service/type/model/movie";

interface BannerProps {
  topRatedMovieList: MovieModel[];
}

const Banner = ({ topRatedMovieList }: MovieModel[]) => {
  console.log(topRatedMovieList);
  return <div>Banner</div>;
};

export default Banner;
