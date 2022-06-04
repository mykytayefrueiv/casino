import { useContext, useEffect } from "react";
import { GamesContext } from "../common";
import { fetchGames } from "../api/games";

export const useAvailableGames = () => {
    const [games, setGames] = useContext(GamesContext);

    useEffect(() => {
        (async () => {
            if (games?.length === 0) {
                const games = await fetchGames();

                setGames(games);
            }
        })();
    }, [games, setGames]);

    return [games, setGames];
};
