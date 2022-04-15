import constants from "@/constants";

// Generates a handy URL for the spites of the pokemons

export function generateURLForSprites(results) {
    return results.map((_, index) => {
        return {
            ...results[index],
            imageURL: `${constants.pokemonSpritesBaseURL}/${results[index].pokemon_v2_pokemonsprites[0].id}.png`,
        };
    });
}
