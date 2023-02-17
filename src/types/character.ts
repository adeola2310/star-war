export interface CharacterType  {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: [],
    vehicles: string[],
    starships: string[]
    created: string,
    edited: string,
    url: string,
}



export interface CharacterLists{
    count: number,
    next: string,
    previous: string,
    results: CharacterType[]
}