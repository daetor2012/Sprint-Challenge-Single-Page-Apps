import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";
import axios from "axios";



export default function CharacterCard(props) {
  let id = props.id;
  const [character, setCharacter] = useState(props.character);
  useEffect(()=> {
    if(id) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
          setCharacter(res.data);
        })
        .catch(e => {
          console.log(e);
        })

        
    }
  }, [])

  if(!character) return null;
  return (
        <div>
          <Card key={character.id}>
            <CardBody>
              <CardTitle>Name: {character.name}</CardTitle>
              <CardText>Status: {character.status}</CardText>
              <CardText>Species: {character.species}</CardText>
              <CardText>Gender: {character.gender}</CardText>
            </CardBody>
        </Card>
      </div>
  )
}
