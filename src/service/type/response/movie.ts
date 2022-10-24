import { MovieModel } from "./../model/movie";

export interface MovieResponse {
  page: number;
  total_page: number;
  total_result: number;
  results: MovieModel[]; //실질적으로 필요한 부분.
}
