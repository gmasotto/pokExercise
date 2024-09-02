import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "@assets/banner/pokemon.svg";

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "aquamarine" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Toolbar disableGutters>
          <ButtonBase component={Link} to="/">
            <img src={Banner} width={200}></img>
          </ButtonBase>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
