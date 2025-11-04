'use client'
import { createContext, useMemo, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export const MUIWrapperContext = createContext({
  toggleColorMode: () => { },
  mode: 'light',
});

// Create emotion cache
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default function MUIWrapper({ children }) {
  const [mode, setMode] = useState('light');
  const [mounted, setMounted] = useState(false);
  const [cache] = useState(createEmotionCache());

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('mui-theme-mode');
    if (savedMode === 'dark' || savedMode === 'light') {
      setMode(savedMode);
    }
    setMounted(true);

    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', savedMode === 'dark' ? '#000000' : '#2563eb');
    }
  }, []);

  // Save to localStorage whenever mode changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('mui-theme-mode', mode);
      
      // Update meta theme-color
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', mode === 'dark' ? '#000000' : '#2563eb');
      }
    }
  }, [mode, mounted]);

  const muiWrapperUtils = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
    },
    mode,
  }), [mode]);

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
            secondary: {
              main: '#10b981',
              light: '#34d399',
              dark: '#059669',
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
          }),
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
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              scrollbarWidth: 'thin',
              scrollbarColor: mode === 'dark' ? '#475569 #1e293b' : '#888 #f1f1f1',
              '&::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: mode === 'dark' ? '#1e293b' : '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: mode === 'dark' ? '#475569' : '#888',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: mode === 'dark' ? '#64748b' : '#555',
              },
            },
          },
        },
      },
    })
  }, [mode]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </MUIWrapperContext.Provider>
  );
}