import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { character } from "../../mocks/handlers/character/fixtures";
import CharacterDetailsPage from "./CharacterDetails";


const queryClient = new QueryClient();
const TestComponent = () => (
  <QueryClientProvider client={queryClient}>
    <CharacterDetailsPage />
  </QueryClientProvider>
);

describe("Character Details Page", () => {
  it("should render a loading spinner while fetching the details page", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should display the contents in the details page", async () => {
    render(<TestComponent />);
    await waitFor(() =>
      expect(screen.getByText("Eye Color")).toBeInTheDocument());
    expect(screen.getByText('Hair Color')).toBeInTheDocument()
    expect(screen.getByText('Gender')).toBeInTheDocument()
    expect(screen.getByText('planet')).toBeInTheDocument()
    expect(screen.getByText('Film Tags')).toBeInTheDocument()
    expect(screen.getByText(`${character.name}`)).toBeInTheDocument()
    expect(screen.getByText(`${character.hair_color}`)).toBeInTheDocument()
    expect(screen.getByText(`${character.eye_color}`)).toBeInTheDocument()
    expect(screen.getByText(`${character.gender}`)).toBeInTheDocument()
    expect(screen.getAllByTestId('film-tags')).toHaveLength(character.films.length)

  });

});
