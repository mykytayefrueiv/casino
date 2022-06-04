import React from "react";
import { useAvailableGames } from "../landing/hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { DragDrop } from "./dragDrop";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const AdminPanel = () => {
    const [games, setGames] = useAvailableGames();

    if (games?.length === 0) return null;

    const handleMoveCard = (dragIndex, dropIndex) => {
        let gamesCloned = [...games];

        gamesCloned[dropIndex] = games[dragIndex];
        gamesCloned[dragIndex] = games[dropIndex];

        setGames(gamesCloned);
    };

    const handleToggleGame = (id, enabled) => {
        const updatedGames = games.map((game) =>
            game.id === id ? { ...game, enabled } : game
        );

        setGames(updatedGames);
    };

    return (
        <main>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Admin panel
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        You are able to reorder, enable and disable games for the users.
                        (Hint: Use checkboxes to toggle games)
                    </Typography>
                    <Link to="/">To Landing page</Link>
                </Container>
            </Box>

            <Container
                sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
            >
                <Stack spacing={2}>
                    {games.map(({ id, name, enabled }, idx) => (
                        <DragDrop key={id} id={id} index={idx} moveCard={handleMoveCard}>
                            <Item sx={{ minWidth: "250px" }}>
                                <Checkbox
                                    checked={enabled}
                                    onChange={({ target: { checked } }) =>
                                        handleToggleGame(id, checked)
                                    }
                                />
                                {name}
                            </Item>
                        </DragDrop>
                    ))}
                </Stack>
            </Container>
        </main>
    );
};

export default AdminPanel;
