import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Landing } from "./landing";
import { AdminPanel } from "./adminPanel";
import {GamesProvider} from "./common";
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const theme = createTheme({palette: {
        mode: 'dark',
    }
});

function App() {
  return (
    <div className="App">
        <DndProvider backend={HTML5Backend}>
            <GamesProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                      <Route path="/" element={<Landing />} />
                      <Route path="admin" element={<AdminPanel />} />
                    </Routes>
                </ThemeProvider>
            </GamesProvider>
        </DndProvider>
    </div>
  );
}

export default App;
