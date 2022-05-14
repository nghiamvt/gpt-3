import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';

import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial",
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: `${grey[300]} 0px 2px 10px 0px`,
            borderRadius: 8,
          },
        },
      ],
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
