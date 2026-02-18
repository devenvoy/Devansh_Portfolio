'use client'
import * as React from 'react';
import { createContext, useMemo, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const MUIWrapperContext = createContext({
  toggleColorMode: () => { },
  mode: 'light',
});

const THEME_STORAGE_KEY = 'mui-theme-mode';

// Theme configuration without emotion cache issues
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    divider: '#e0e0e0',
    primary: {
      main: '#2563eb',
      light: '#3b82f6',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: `'Raleway', 'Nunito', sans-serif`,
    h1: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 700,
    },
    h2: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 700,
    },
    h3: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 600,
    },
    h4: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 600,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#9ca3af',
    },
  },
  typography: {
    fontFamily: `'Raleway', 'Nunito', sans-serif`,
    h1: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 700,
    },
    h2: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 700,
    },
    h3: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 600,
    },
    h4: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 600,
    },
  },
});

export default function MUIWrapper({ children }) {
  const [mode, setMode] = React.useState('light');
  const [mounted, setMounted] = React.useState(false);

  // Initialize theme from localStorage on mount only
  React.useEffect(() => {
    try {
      const savedMode = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedMode === 'dark' || savedMode === 'light') {
        setMode(savedMode);
        if (savedMode === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }
    } catch (e) {
      // localStorage not available
    }
    setMounted(true);
  }, []);

  // Toggle color mode
  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      
      try {
        localStorage.setItem(THEME_STORAGE_KEY, newMode);
        
        if (newMode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
          metaTheme.setAttribute('content', newMode === 'dark' ? '#000000' : '#2563eb');
        }
      } catch (e) {
        // localStorage not available
      }
      
      return newMode;
    });
  }, []);

  const muiWrapperUtils = useMemo(() => ({
    toggleColorMode,
    mode,
  }), [toggleColorMode, mode]);

  const theme = useMemo(() => {
    return mode === 'dark' ? darkTheme : lightTheme;
  }, [mode]);

  // Prevent flash of wrong theme during initial load
  // Use a div wrapper to prevent hydration mismatch with emotion styles
  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'contents' }} suppressHydrationWarning>
          {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
        </div>
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  );
}
