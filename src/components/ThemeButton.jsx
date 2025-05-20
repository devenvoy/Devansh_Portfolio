import React from 'react'
import { MUIWrapperContext } from './layouts/MUIWrapper';
import {
    IconButton,
    useTheme,
} from "@mui/material";
import { Sun, Moon } from 'lucide-react';

function ThemeButton() {
    const theme = useTheme();
    const muiUtils = React.useContext(MUIWrapperContext);
    return (
        <IconButton
            sx={{ fontSize: "1rem" }}
            onClick={muiUtils.toggleColorMode}
            color="inherit"
            disableTouchRipple
            disableRipple
        >
            {theme.palette.mode === "dark" ?  <Sun />: <Moon />}
        </IconButton>
    );
}

export default ThemeButton;