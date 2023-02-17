import { useQuery, UseQueryResult } from "react-query";
import { PlanetList } from "../types/planets";

const getPlanets = (): Promise<PlanetList> => {
  return fetch(`https://swapi.dev/api/planets`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching planets", e);
    });
};

const useGetPlanets = (): UseQueryResult<PlanetList, unknown> =>
  useQuery(["films"], () => getPlanets());

export default useGetPlanets;
