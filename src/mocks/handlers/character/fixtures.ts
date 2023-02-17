import { CharacterLists, CharacterType } from "../../../types/character"


export const character: CharacterType = {
    name: 'Darth Vader',
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "male",
    homeworld: "n/a",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: ""
}

export const characters: CharacterLists = {
    count: 0,
    next: "",
    previous: "",
    results: [
        {
            name: 'Luke Skywalker',
            height: '',
            mass: '',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '',
            gender: 'male',
            homeworld: 'https://swapi.dev/api/planets/1/',
            films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            species: [],
            vehicles: [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/"
            ],
            starships:[
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/"
            ],
            created: '',
            edited: '',
            url: 'https://swapi.dev/api/people/1/',
        }
      
    ]
}