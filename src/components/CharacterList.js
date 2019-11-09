import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")

      .then(res => {
        console.log(res);
        setCharacters(res.data.results)
      })

      .catch(error => {
        console.log("Error: ", error);
      })

  }, []);
  console.log(characters);
  return (
    <section className="character-list">
      
      {characters.map(character => (
        <CharacterCard character={character}
        
        />
        ))}
        
      </section>
  );
}
export default CharacterList;