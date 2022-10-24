import { parseMovieResponseToMovieModel } from "./../service/type/model/movie";
import { MovieResponse } from "./../service/type/response/movie";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieModel } from "service/type/model/movie";

type InitialStateType = {
  topRatedMovieList: MovieModel[] | null;
  loading: boolean;
  error: Error | string | null;
};

const initialState: InitialStateType = {
  topRatedMovieList: null,
  loading: false,
  error: null,
};

export const getTmdbApi = createAsyncThunk("getTmdbApi", async () => {
  try {
    let topRatedMovieEndPoint = `/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    let responseTopRatedMovieBaseUrl = await fetch(`https://api.themoviedb.org${topRatedMovieEndPoint}`);
    let topRatedMovieResponse: MovieResponse = await responseTopRatedMovieBaseUrl.json();

    const parsedTopRatedMovieData: MovieModel[] = parseMovieResponseToMovieModel(topRatedMovieResponse);

    return parsedTopRatedMovieData;
  } catch (err) {
    throw err;
  }
});

const tmdbSlice = createSlice({
  name: "tmdbSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTmdbApi.pending, (state, action) => {
        state.loading = true; // default는 false, 부르면 -> true
      })
      .addCase(getTmdbApi.fulfilled, (state, action) => {
        state.loading = false; // api을 받아왔으니 -> false
        state.topRatedMovieList = action.payload.parsedTopRatedMovieData;
      })
      .addCase(getTmdbApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string; // 에러값을 string으로 지정;
      });
  },
});

export default tmdbSlice.reducer;
