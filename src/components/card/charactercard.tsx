import { FC } from "react";
import { Card, Heading, Text, CardBody, Button, CardHeader, CardFooter } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface CharacterCardProp {
  character: any
  id: number
  homePlanet: any
}

const CharacterCard: FC<CharacterCardProp> = ({ character, id, homePlanet }: CharacterCardProp) => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/${id}`;
    navigate(path);
  }

  return (
    <Card data-testid="cards">
      <CardHeader>
        <Heading size='md'> {character.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>Gender: {character.gender}</Text>
      </CardBody>
      <CardBody>
        <Text>Planet: {homePlanet || 'n/a'}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => routeChange()}>View here</Button>
      </CardFooter>
    </Card>
  )
}

export default CharacterCard