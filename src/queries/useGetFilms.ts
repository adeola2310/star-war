import { useQuery, UseQueryResult } from "react-query";
import { FilmList } from "../types/film";

const getFilms = (): Promise<FilmList> => {
  return fetch(`https://swapi.dev/api/films`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching films", e);
    });
};

const useGetFilmsBy = (): UseQueryResult<FilmList, unknown> =>
  useQuery(["films"], () => getFilms());

export default useGetFilmsBy;
