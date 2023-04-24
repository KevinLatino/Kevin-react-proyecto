import { Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchGames = async () => {
    const response = await axios.get("http://localhost:8080/api/mostrar");
    const data = response.data;

    return data;
};

const GameTile = ({ game }) => {
    const { nombre, sinopsis, desarrollador, imagen } = game;

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
            </ListItemText>
        </ListItem>
    );

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <span>
                {nombre}
            </span>

            <span>
                {sinopsis}
            </span>


            <span>
                {desarrollador}
            </span>

            <img src={imagen} />
        </div>
    );
};

const AllGames = () => {
    const [games, setGames] = useState(null);

    useEffect(() => {
        fetchGames()
            .then((games) => setGames(games))
    }, []);

    if (games === null) {
        return "Cargando...";
    }

    const gamesElements = games
        .map((game, index) => <GameTile key={index} game={game} />)

    return (
        <List>
            {gamesElements}
        </List>
    );
};

export default AllGames;