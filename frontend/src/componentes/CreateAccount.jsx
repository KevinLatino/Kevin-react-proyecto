import React from "react";
//se exporta react
//se exportan elementos de la libreria de componentes
import { Stack } from "@mui/joy";
import { TextField, Button } from "@mui/material";
import axios from "axios";
//se exportan elementos de la libreria de componentes

class Registrarse extends React.Component {
    //antigua version de react
    state = {
        correo: "",
        contrasena: ""
    };

    actualizarFormulario = (evento) => {
        this.setState({
            ...this.state,
            [`${evento.target.name}`]: evento.target.value
        });
    };

    registrarse = () => {
        axios.post("http://localhost:8080/api/registrarse", this.state)
          .then(() => alert("Registrado(a) con éxito"))
    }

    render() {
        return (
            <Stack sx={{ padding: "1rem", border: "1px solid silver", borderRadius: "15px" }} spacing={2} width="fit-content" mt={5} alignItems="center">
                <TextField
                    label="Tu correo"
                    name="correo"
                    type="email"
                    variant="standard"
                    onChange={this.actualizarFormulario}
                />

                <TextField
                    label="Tu contraseña"
                    name="contrasena"
                    type="password"
                    variant="standard"
                    onChange={this.actualizarFormulario}
                />

                <Button
                    onClick={this.registrarse}
                >
                  Registrate
                </Button>
            </Stack>
        );
    }
};

export default Registrarse;
