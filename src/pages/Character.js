import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1> something went wrong</h1>;

  return (
    <div className="Character">
      <img src={data.character.image} alt={data.character.image} width={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episonde">
          {data.character?.episode?.map((episode) => {
            return (
              <div>
                {episode.name} -{episode.episode}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
