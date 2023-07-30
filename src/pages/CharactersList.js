import React from "react";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <div className="CharacterList">
      {data.characters.results?.map((character) => {
        return (
          <div>
            <img src={character.image} alt={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
