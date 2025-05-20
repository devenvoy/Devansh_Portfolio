import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const MUIWrapperContext = createContext({
  toggleColorMode: () => {},
});

export default function MUIWrapper({ children }) {
  const [mode, setMode] = useState("light");

  const muiWrapperUtils = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  }), []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
        {children}
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  );
}
