import { rest } from "msw";
import { characters } from "./fixtures";

export const handlers = [
  rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
    return res(
        ctx.json(characters));
  }),
];

