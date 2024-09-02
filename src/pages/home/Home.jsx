import { useEffect } from "react";
import PokeFilter from "@components/filter/PokeFilter";
import { usePokeFilter } from "@components/filter/usePokeFilter";
import { useQuery } from "@tanstack/react-query";
import PokemonList from "@components/list/PokemonList";
import { usePokemonStore } from "@store/pokemon-store";
const Home = () => {
  const { populatePokemons } = usePokemonStore((state) => ({
    populatePokemons: state.populatePokemons,
  }));
  const { searchValue, filterValue, setFilterValue, setSearchValue } =
    usePokeFilter();
  const fetchAllPokemon = async () => {
    /**
     * in an optimal case i would create a function to pass
     * parameters to Be and let BE filter because is more efficient
     * than FE on a huge amount of data
     * To make it easier i use filter fuction on FE because i've at most 1302 pokemon
     */

    const response = await fetch(
      // limit to first generation to show less thing, because i need to do another fetch to have images...
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();

    // I need to do this bad thing because i need the type of the pokemon. In the main call is not preset.... so i must make another api call for each element....
    const detailedDataPromises = data.results.map((p) =>
      fetch(p.url).then((res) => res.json())
    );
    const detailedData = await Promise.all(detailedDataPromises);
    // i receive a lot of data that i will not use... so i store only the pieces i need
    const onlyUsedData = detailedData.map((p) => {
      return {
        name: p.name,
        id: p.id,
        base_experience: p.base_experience,
        height: p.height,
        image: p.sprites.front_default,
        stats: p.stats,
        types: p.types,
        weight: p.weight,
      };
    });

    return onlyUsedData;
  };

  const { isPending, data: pokemonData } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchAllPokemon,
    staleTime: 30 * 60 * 1000, // pokmeon of the first generetion will never change... so i only need 1 fetch for all the data
  });

  useEffect(() => {
    if (pokemonData) {
      populatePokemons(pokemonData);
    }
  }, [pokemonData, populatePokemons]);

  return (
    <>
      <PokeFilter
        setFilterValue={setFilterValue}
        setSearchValue={setSearchValue}
      ></PokeFilter>
      <PokemonList
        dataAreLoading={isPending}
        searcByName={searchValue}
        filterType={filterValue}
      ></PokemonList>
    </>
  );
};

export default Home;
