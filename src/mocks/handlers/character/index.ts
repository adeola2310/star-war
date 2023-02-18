import { rest } from "msw";
import { character, characters } from "./fixtures";

export const handlers = [
  rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
    return res(
        ctx.json(characters));
  }),
  rest.get("https://swapi.dev/api/people/:id", (req, res, ctx) => {
    return res(
        ctx.json(character));
  }),
];

