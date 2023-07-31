import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LACTIONS = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocation, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LACTIONS,
    {
      variables: { name },
    }
  );
 console.log(error)
  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button on onClick={() => getLocation()}>
        Search
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Something when wrong!</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
