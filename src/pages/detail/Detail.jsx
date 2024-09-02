import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemonStore } from "@store/pokemon-store";
import { capitalizeFirstLetter, loadPokeTypeImage } from "@utils/utils";
import StatisticsCard from "@components/statistics/StatisticsCard";
import CharacteristicsCard from "@components/charateristics/CharacteristicsCard";

const Detail = () => {
  const navigate = useNavigate();
  let { name } = useParams();
  const [pokemonDetail, setpokemonDetail] = useState();
  const { retrievePokemon } = usePokemonStore((state) => ({
    retrievePokemon: state.retrievePokemon,
  }));
  useEffect(() => {
    const found = retrievePokemon(name);
    if (found) {
      setpokemonDetail(found);
    } else navigate(`/notfound`); // if i dont find the pokemon in the store go to not found page
  }, []);

  return (
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginTop: "0.5rem" }}
      >
        <Grid item xs={12} md={4}>
          <Paper>
            <img
              src={pokemonDetail?.image}
              alt={pokemonDetail?.name}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ paddingLeft: "1rem" }}
            >
              {pokemonDetail?.types.map((t, index) => {
                return (
                  <img
                    key={index}
                    src={loadPokeTypeImage(t.type.name)}
                    width="40"
                    style={{ paddingRight: "0.3rem" }}
                  />
                );
              })}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Typography variant="h2" component="div">
              #{pokemonDetail?.id} {capitalizeFirstLetter(pokemonDetail?.name)}
            </Typography>
          </Paper>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            style={{ marginTop: "0.2rem" }}
          >
            <Grid item xs={12} md={6}>
              <StatisticsCard
                pokemonStats={pokemonDetail?.stats}
              ></StatisticsCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <CharacteristicsCard
                weight={pokemonDetail?.weight}
                height={pokemonDetail?.height}
                baseXp={pokemonDetail?.base_experience}
              ></CharacteristicsCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;
