import PropTypes from "prop-types";
import PokemonCard from "@components/card/PokemonCard";
import { useMemo } from "react";
import { usePokemonStore } from "@store/pokemon-store";
const PokemonList = ({ dataAreLoading, searcByName, filterType }) => {
  /**
   * Here i could pass pokemons as prop because the data directlty come to parent.
   * But i want take advantage from store with card detail too
   */
  const { pokemons } = usePokemonStore((state) => ({
    pokemons: state.pokemons,
  }));

  const listData = useMemo(() => {
    return pokemons
      .filter((p) => p.name.includes(searcByName.toLowerCase()))
      .filter((p) =>
        p.types.some((t) => t.type.name.includes(filterType.toLowerCase()))
      );
  }, [pokemons, searcByName, filterType]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {dataAreLoading && <p>Pokemon are loading...</p>}
      {listData.map((p) => (
        <PokemonCard
          key={p.id}
          types={p.types}
          name={p.name}
          id={p.id}
          image={p.image}
        />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  dataAreLoading: PropTypes.bool,
  searcByName: PropTypes.string,
  filterType: PropTypes.string,
};

export default PokemonList;
