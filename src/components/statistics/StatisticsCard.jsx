import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { loadPokeStatsImage } from "@utils/utils";

const ABILITIES = [
  "Hp",
  "Attack",
  "Defense",
  "Special-Attack",
  "Special-Defense",
  "Speed",
];

const StatisticsCard = ({ pokemonStats }) => {
  const getPokemonStat = (stats) => {
    const searchedStats = pokemonStats?.filter(
      (obj) => obj.stat.name === stats.toLowerCase()
    );
    if (searchedStats) {
      return searchedStats[0]?.base_stat;
    }
    return false;
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Statistics</Typography>
        <Divider />
        <List dense>
          {ABILITIES.map((ability) => {
            return (
              <ListItem key={ability}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <img src={loadPokeStatsImage(ability)} alt={ability} />
                  </ListItemAvatar>
                  <Box>
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {ability} : {getPokemonStat(ability)}
                    </Typography>
                  </Box>
                </div>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

StatisticsCard.propTypes = {
  pokemonStats: PropTypes.array,
};

export default StatisticsCard;
