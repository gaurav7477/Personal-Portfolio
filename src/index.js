import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
// import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace', 
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
);

