import React from "react";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

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
          <Link to={`/${character.id}`}>
            <img src={character.image} alt={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
