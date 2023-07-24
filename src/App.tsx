// @ts-nocheck

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { EventCard } from "./components/EventCard";

const theme = createTheme({
  typography: {
    fontFamily: ["Exo 2", "sans-serif"].join(","),
  },
}); 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <EventCard />
    </ThemeProvider>
  );
}
