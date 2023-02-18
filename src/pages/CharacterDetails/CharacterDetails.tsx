import { Spinner, Card, CardBody, Heading, CardHeader, Stack, Box, Text, StackDivider, Flex, Tag } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGetCharacterById from "../../queries/useGetCharacterById";
import useGetFilmsById from '../../queries/useGetFilms';
import useGetPlanets from '../../queries/useGetPlanets';

const CharacterDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetCharacterById(id as string);
    const { data: films } = useGetFilmsById();
    const {data: planets} = useGetPlanets();

    const mappedPlanetTitle = new Map(planets?.results?.map((i: {url: string| undefined, name: string}) => [i.url, i.name]));

    if (isLoading) {
        return <Spinner size="xl" data-testid="loader"/>
    }

    const mappedFilm = new Map<string, string>(films?.results?.map((i: {url: string, title: string}) => [i.url, i.title]));

    return (
        <Card p={6}>
            <CardHeader>
                <Heading size='md'>{data?.name}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Hair Color
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {data?.hair_color}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Eye Color
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {data?.eye_color}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Gender
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {data?.gender}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            planet
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {mappedPlanetTitle?.get(data?.homeworld)}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Film Tags
                        </Heading>
                        {
                                <Flex mt={3} data-testid="film-tags">
                                    {
                                        data?.films?.map((film, i) => (
                                            <Tag key={i}> {mappedFilm?.get(film)}</Tag>
                                        ))
                                    }
                                </Flex>
                        }

                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CharacterDetailsPage