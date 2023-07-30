import React from "react";
import { gql, useQuery } from "@apollo/client";


////
const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

const CharactersList = () => {
  const {data, loading, error} = useQuery(GET_ALL_CHARACTERS);
  console.log(data)
  return <div>CharactersList</div>;
};

export default CharactersList;
