import { gql, useQuery } from "@apollo/client";

//// get all characters
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

export const useCharacters = () => {
  const { data, error, loading } = useQuery(GET_ALL_CHARACTERS);

  return { error, loading, data };
};
