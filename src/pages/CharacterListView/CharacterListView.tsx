import { Flex, Text, Spinner, SimpleGrid } from '@chakra-ui/react';
import useGetAllCharacterLists from '../../queries/useGetCharacterLists';
import CharacterCard from '../../components/card/charactercard';
import useGetPlanets from '../../queries/useGetPlanets';


const CharacterListView = () => {

    const { data, isLoading, isError } = useGetAllCharacterLists();
    const {data: planets} = useGetPlanets();

    const mappedPlanetTitle = new Map<string, string>(planets?.results?.map((i: {url: string, name: string}) => [i.url, i.name]));

    const characters = data?.results

    if (isError) {
        return <Text>Ooops! an error occured!</Text>
    }

    if (isLoading) {
        return <Spinner size="xl" data-testid="loading-spinner"/>
    }

    return (
        <div>
            <Flex justifyContent="center">
                <Text fontSize="3xl">Character Lists</Text>
            </Flex>
            <SimpleGrid spacing={5} p={25} templateColumns='repeat(2, 1fr)' columns={[1, 2, 3]}>
                {
                    characters?.map((character, i) => (
                        <CharacterCard
                            key={i}
                            homePlanet={mappedPlanetTitle?.get(character.homeworld)}
                            id={i + 1}
                            character={character}
                        />
                    ))
                }
            </SimpleGrid>

        </div>
    )
}

export default CharacterListView