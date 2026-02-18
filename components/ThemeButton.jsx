'use client'
import React, { useContext } from 'react';
import { MUIWrapperContext } from './layouts/MUIWrapper';
import {
    IconButton,
    useTheme,
} from "@mui/material";
import { Sun, Moon } from 'lucide-react';

function ThemeButton() {
    const theme = useTheme();
    const muiUtils = useContext(MUIWrapperContext);

    return (
        <IconButton
            sx={{ fontSize: "1rem" }}
            onClick={muiUtils.toggleColorMode}
            color="inherit"
            disableTouchRipple
            disableRipple   
            suppressHydrationWarning
            aria-label="Toggle light/dark theme"
        >
            {theme.palette.mode === "dark" ? <Sun /> : <Moon />}
        </IconButton>
    );
}

export default ThemeButton;