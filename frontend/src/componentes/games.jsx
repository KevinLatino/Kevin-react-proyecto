import { Stack, IconButton, Typography, Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Check, Delete } from "@mui/icons-material";
import axios from "axios";

function jugar(id) {
    axios.post("http://localhost:8080/api/jugar", { id })
      .then(function() {
        alert("Listo");
      });
};

function eliminar(id) {
    axios.post("http://localhost:8080/api/eliminar", { id })
      .then(function() {
        alert("Juego eliminado");
      });
};

const GameTile = ({ datos }) => {
    const id = datos._id;
    const { jugado, nombre, sinopsis, desarrollador, imagen } = datos;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={imagen} />
            </ListItemAvatar>

            <ListItemText>
                <Typography variant="h6">
                    {nombre} de {desarrollador} 
                </Typography>

                <Typography variant="body1">
                    {sinopsis}
                </Typography>

              {
                !jugado ?
                <Typography color="red">Por jugar</Typography>:
                <Typography color="green">Jugado</Typography>
              }

              <Stack direction="row" spacing={1}>
                <IconButton
                  variant="outlined"
                  onClick={() => jugar(id)}
                >
                  <Check />
                </IconButton>

                <IconButton
                  variant="outlined"
                  onClick={() => eliminar(id)}
                >
                  <Delete />
                </IconButton>
              </Stack>
            </ListItemText>
        </ListItem>
    );
};

export default GameTile;
