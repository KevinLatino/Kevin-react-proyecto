import React from "react";
import { Stack } from "@mui/joy";
import { TextField, Button } from "@mui/material";
import axios from "axios";

class IniciarSesion extends React.Component {
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

    iniciarSesion = () => {
        axios.post("http://localhost:8080/api/iniciarSesion", this.state)
            .then(function (datos) {
              console.log(datos);
              if (datos.data !== null) {
                alert("Se inició sesión con éxito|");
              } else {
                alert("Los datos ingresados son inválidos");
              }
            });
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
                    onClick={this.iniciarSesion}
                >
                  Inicia sesión
                </Button>
            </Stack>
        );
    }
};

export default IniciarSesion;
