import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { capitalizeFirstLetter, loadPokeTypeImage } from "@utils/utils";

const PokeFilter = ({ setFilterValue, setSearchValue }) => {
  const [pokemonType, setpokemonType] = useState();

  const fetchPokemonTypes = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let result = await response.json();
    return result;
  };

  const { isPending, data } = useQuery({
    queryKey: ["pokeType"],
    queryFn: fetchPokemonTypes,
    staleTime: 30 * 60 * 1000, // the type of the pokemon are alwais the same, don't change so i need to fetch only 1 time
  });

  useEffect(() => {
    if (data) {
      setpokemonType(data);
    }
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          backgroundColor: "white",
          gap: "10px",
          padding: "1rem",
          borderRadius: "5px",
          width: "fit-content",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search Name"
          variant="outlined"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        {isPending ? (
          <span>Loading...</span>
        ) : (
          <Autocomplete
            id="filter-type"
            options={pokemonType?.results || []}
            sx={{ width: 250 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Pokemon Type" />
            )}
            renderOption={(props, option) => {
              // eslint-disable-next-line react/prop-types
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <img
                    src={loadPokeTypeImage(option.name)}
                    width="20"
                    style={{ paddingRight: "0.3rem" }}
                  />
                  {capitalizeFirstLetter(option.name)}
                </li>
              );
            }}
            onInputChange={(_, newInputValue) => {
              setFilterValue(newInputValue);
            }}
          />
        )}
      </div>
    </div>
  );
};

PokeFilter.propTypes = {
  setFilterValue: PropTypes.func,
  setSearchValue: PropTypes.func,
};

export default PokeFilter;
