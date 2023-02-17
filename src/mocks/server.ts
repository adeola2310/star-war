import { setupServer } from "msw/node";
import { handlers } from "./handlers/character";

export const server = setupServer(...handlers);