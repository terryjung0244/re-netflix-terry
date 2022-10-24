import { MovieResponse } from "../response/movie";

export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; //Type of number inside of array.
  id: number;
  original_language?: string | null; //? 이 프로퍼티가 있어도 되고 없어도 된다는 말이다.
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_data: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const parseMovieResponseToMovieModel = (topRatedMovieResponse: MovieResponse): MovieModel[] => {
  const parsedTopRatedMovieData: MovieModel[] = topRatedMovieResponse.results.map((movie: MovieModel) => {
    return {
      adult: movie.adult ?? false,
      backdrop_path: movie.backdrop_path ?? "",
      genre_ids: movie.genre_ids ?? [], //Type of number inside of array.
      id: movie.id ?? 0,
      original_language: movie.original_language ?? "",
      original_title: movie.original_title ?? "",
      overview: movie.overview ?? "",
      popularity: movie.popularity ?? 0,
      poster_path: movie.poster_path ?? "",
      release_data: movie.release_data ?? "",
      title: movie.title ?? "",
      video: movie.video ?? false,
      vote_average: movie.vote_average ?? 0,
      vote_count: movie.vote_count ?? 0,
    };
  });
  return parsedTopRatedMovieData;
};
