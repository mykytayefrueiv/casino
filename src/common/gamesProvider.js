import React, { useState } from "react";

export const GamesContext = React.createContext();

export const GamesProvider = ({ children }) => {
    const gamesState = useState([]);

    return (
        <GamesContext.Provider value={gamesState}>{children}</GamesContext.Provider>
    );
};
