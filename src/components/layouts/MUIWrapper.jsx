import React, { createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "../../index.css";
import 'aos/dist/aos.css';
import '../../App.css'
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const MUIWrapperContext = createContext({
  toggleColorMode: () => { },
});

export default function MUIWrapper({ children }) {
  const [mode, setMode] = useLocalStorage("mui-theme-mode", "light");

  const muiWrapperUtils = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  }), []);

  const theme = useMemo(() => {
    return createTheme({  
      palette: {
        mode,
        ...(mode === "dark"
          ? {
            background: {
              default: '#000000',
              paper: '#111827',
            },
            divider: '#404040',
            primary: {
              light: '#22d3ee',
              main: '#06b6d4',
              dark: '#2563eb',
            },
            text: {
              primary: '#e0e0e0',
              secondary: '#9ca3af',
            },
          }
          : {
            background: {
              default: '#ffffff',
              paper: '#f9fafb',
            },
            divider: '#e0e0e0',
            primary: {
              main: '#2563eb',
            },
            text: {
              primary: '#1f2937',
              secondary: '#6b7280',
            },
          }),
      },
      typography: {
        fontFamily: `'Raleway', 'Nunito', sans-serif`,
      },
    })
  }, [mode]);

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  );
}
