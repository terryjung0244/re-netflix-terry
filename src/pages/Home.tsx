import React, { useEffect } from "react";
import ResponsiveAppBar from "components/ResponsiveAppBar";
import Banner from "components/Banner";
import useAppSelector from "service/hook/useAppSelector";
import { useAppDispatch } from "service/hook/useAppDispatch";
import { getTmdbApi } from "movieSlice/movieSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading, topRatedMovieList, error } = useAppSelector((state) => state.tmdbSlice);

  useEffect(() => {
    dispatch(getTmdbApi);
  }, []);

  console.log(topRatedMovieList);
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Banner topRatedMovieList={topRatedMovieList} />
      </div>
    </div>
  );
};

export default Home;
