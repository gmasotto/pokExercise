import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePokemonStore = create(
  persist(
    (set, get) => ({
      pokemons: [], // effective store
      populatePokemons: (pokemonList) => set(() => ({ pokemons: pokemonList })), // to populate
      retrievePokemon: (name) => {
        // to search by name
        return get().pokemons.find(
          (p) => p.name.toLowerCase() === name.toLowerCase()
        );
      },
    }),
    {
      name: "pokemons",
    }
  )
);
