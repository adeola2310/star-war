import { PlanetList } from "../types/planets";


export const mapPlanet =(planets: PlanetList): Map<unknown, unknown>=>{
    const mappedPlanetTitle = new Map(planets?.results?.map((i: { url: string; name: string; }) => [i.url, i.name]));
    return mappedPlanetTitle
}

// export const mappedPlanetTitle = new Map<string, string>(planets?.results?.map((i: {url: string, name: string}) => [i.url, i.name]));
