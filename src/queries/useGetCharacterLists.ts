import { useQuery, UseQueryResult } from "react-query";
import { CharacterLists } from "../types/character";

const getAllCharacters = (): Promise<CharacterLists> => {
  return fetch("https://swapi.dev/api/people/?page=1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching character lists", e);
    });
};

const useGetAllCharacterLists = (): UseQueryResult<CharacterLists, unknown> =>
  useQuery(["characters"], () => getAllCharacters());

export default useGetAllCharacterLists;