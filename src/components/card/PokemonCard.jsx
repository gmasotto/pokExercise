import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  capitalizeFirstLetter,
  loadPokeTypeImage,
  typeColors,
} from "@utils/utils";

import PropTypes from "prop-types";

const PokemonCard = ({ types, name, id, image }) => {
  const navigate = useNavigate();

  const backgroundColor = typeColors[types[0].type.name] || "#fff"; // Default to white if type is not found

  return (
    <Card
      sx={{
        width: 150,
        backgroundColor,
        margin: "5px",
        padding: "5px",
      }}
    >
      <CardActionArea onClick={() => navigate(`/detail/${name}`)}>
        <Typography variant="h5" component="div">
          #{id}
        </Typography>
        <img src={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {capitalizeFirstLetter(name)}
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            {types.map((t, index) => {
              return (
                <img
                  key={index}
                  src={loadPokeTypeImage(t.type.name)}
                  width="18"
                  style={{ paddingRight: "0.3rem" }}
                />
              );
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PokemonCard.propTypes = {
  types: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
};

export default PokemonCard;
