import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";

const CharacteristicsCard = ({ weight, height, baseXp }) => {
  return (
    <Card>
      <CardContent>
        <Typography data-cy="title" variant="h4">
          Characteristics
        </Typography>
        <Divider />
        <ListItem key={weight}>
          <Typography data-cy="weigthfield" variant="h6" sx={{ ml: 1 }}>
            Weight : {weight || -1}
          </Typography>
        </ListItem>
        <ListItem key={height}>
          <Typography
            data-cy="heightfield"
            id="height"
            variant="h6"
            sx={{ ml: 1 }}
          >
            Height : {height || -1}
          </Typography>
        </ListItem>
        <ListItem key={baseXp}>
          <Typography data-cy="baseXpfield" variant="h6" sx={{ ml: 1 }}>
            Base Xp : {baseXp || -1}
          </Typography>
        </ListItem>
      </CardContent>
    </Card>
  );
};

CharacteristicsCard.propTypes = {
  weight: PropTypes.number,
  height: PropTypes.number,
  baseXp: PropTypes.number,
};

export default CharacteristicsCard;
