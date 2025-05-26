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

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === "dark"
          ? {
              // 🌙 Custom Dark Mode Colors
              background: {
                default: '#000000',
                paper: '#111827',
              },
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
              // ☀️ Light Mode (optional customization)
              background: {
                default: '#dfdfdf',
                paper: '#f9fafb', // Tailwind's gray-50
              },
              primary: {
                main: '#2563eb', // blue-600
              },
              text: {
                primary: '#1f2937', // gray-800
                secondary: '#6b7280', // gray-500
              },
            }),
      },
    });
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
