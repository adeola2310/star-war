import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../../mocks/server";
import CharacterListView from "./CharacterListView";

const queryClient = new QueryClient();
// mocked the react router to avoid this error: useNavigate() may be used only in the context of a <Router> component
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

const TestComponent = () => (
  <QueryClientProvider client={queryClient}>
    <CharacterListView />
  </QueryClientProvider>
);

describe("Character List View", () => {
  it("should render a loading spinner while fetching the list of characters", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
  it("should render the title text in the character list page", async () => {
    render(<TestComponent />);

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );
    expect(screen.getByText("Character Lists")).toBeInTheDocument();
  });
  it("should render a number of ten character card on the character list view page", async () => {
    render(<TestComponent />);

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );
    expect(screen.getAllByTestId("cards")).toHaveLength(10);
  });
  it.skip('Renders Error text when backend server response with error', async () => {
    server.use(
      rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
        return res(ctx.status(403))
      })
    );

    render(<TestComponent />);
    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
      expect(screen.getAllByTestId("cards")).not.toBeInTheDocument();


      const fetchedText = screen.getByText('Ooops! an error occured!');
      expect(fetchedText).toBeInTheDocument();
    })
  });
});
