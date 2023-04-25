import React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";
import {
  SportsEsports,
  Add,
  Login,
  AccountCircle
} from "@mui/icons-material";
import { Stack } from "@mui/joy";
import IniciarSesion from "./LogIn";
import Registrarse from "./CreateAccount";
import Guardar from "./save";
import Mostrar from "./show";

class Principal extends React.Component {
    state = {
        indice: 0
    };

    actualizarIndice = (_, nuevoIndice) => {
      this.setState({
        ...this.state,
        indice: nuevoIndice
      });
    };

    render() {
        let paginas = [
            <Guardar />,
            <Mostrar />,
            <Registrarse />,
            <IniciarSesion />,
        ];

        return (
            <Stack spacing={2}>
                <BottomNavigation
                  showLabels
                  value={this.state.indice}
                  onChange={this.actualizarIndice}
                >
                  <BottomNavigationAction label="Nuevo juego" icon={<Add />} />
                  <BottomNavigationAction label="Todos los juegos" icon={<SportsEsports />} />
                  <BottomNavigationAction label="Crear una cuenta" icon={<AccountCircle />} />
                  <BottomNavigationAction label="Inicia sesión" icon={<Login />} />
                </BottomNavigation>

                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10rem"
                }}>
                  {paginas[this.state.indice]}
                </Box>
            </Stack>
        );
    }
};

export default Principal;
