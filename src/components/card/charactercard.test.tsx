import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { character } from "../../mocks/handlers/character/fixtures";
import { createMemoryHistory } from 'history';
import CharacterCard, { CharacterCardProp } from "./charactercard";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));
const CardComponent = (props: CharacterCardProp) => (
    <CharacterCard {...props} />
);

describe("Character Card", () => {
    it("should display the contents in the card", () => {
        render(<CardComponent character={character} id={1} homePlanet={undefined} />);
        expect(screen.getByText(`${character.name}`)).toBeInTheDocument();
        expect(screen.getByText(`Gender: ${character.gender}`)).toBeInTheDocument();
        expect(screen.getByText(`Planet: ${character.homeworld}`)).toBeInTheDocument();
        const cardButton = screen.getByRole("button", { name: "View here" });
        expect(cardButton).toBeInTheDocument();

    });

      it("should redirect to the selected character card details page when the view here button is clicked", async () => {
        const history = createMemoryHistory({ initialEntries: ['/1'] });

        render(<CardComponent character={character} id={1} homePlanet={undefined} />);

        const cardButton = screen.getByRole("button", { name: "View here" });
        expect(cardButton).toBeInTheDocument();

         userEvent.click(cardButton);
        await waitFor(async () => {
            expect(history.location.pathname).toEqual('/1');
          });
      });
});
