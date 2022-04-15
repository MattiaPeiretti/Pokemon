import useFetchGraphql from "@/composables/useFetchGraphql";
import constants from "@/constants";

const GQLQuery = `
    query PokeAPIquery {
      pokemon_v2_pokemon{
        id
        name
        height
        weight
        base_experience
        pokemon_v2_pokemonsprites {
          id
        }
      }
    }
    `;

export default function () {
    const { response, fetchData, fetching, error } = useFetchGraphql(
        `${constants.pokemonGraphqlAPIBaseURL}`,
        GQLQuery,
        null,
        null
    );

    return { fetchData, fetching, response, error };
}
