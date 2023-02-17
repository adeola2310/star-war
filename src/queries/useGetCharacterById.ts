import { useQuery, UseQueryResult } from "react-query";
import { CharacterType } from "../types/character";

const getCharacterById = (id: string): Promise<CharacterType> => {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .catch((e) => {
      throw new Error("Error fetching character by id", e);
    });
};

const useGetCharacterById = (id: string): UseQueryResult<CharacterType, unknown> =>
  useQuery(["character", id], () => getCharacterById(id as string));

export default useGetCharacterById;
