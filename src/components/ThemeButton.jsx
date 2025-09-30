import React, { useState, useEffect } from 'react';
import { MUIWrapperContext } from './layouts/MUIWrapper';
import {
    IconButton,
    useTheme,
} from "@mui/material";
import { Sun, Moon } from 'lucide-react';

function ThemeButton() {
    const theme = useTheme();
    const muiUtils = React.useContext(MUIWrapperContext);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only showing icon after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <IconButton
            sx={{ fontSize: "1rem" }}
            onClick={muiUtils.toggleColorMode}
            color="inherit"
            disableTouchRipple
            disableRipple
            suppressHydrationWarning
        >
            {/* Only render the icon after mounting */}
            {mounted ? (
                theme.palette.mode === "dark" ? <Sun /> : <Moon />
            ) : (
                // Placeholder during SSR to maintain layout
                <div style={{ width: 24, height: 24 }} />
            )}
        </IconButton>
    );
}

export default ThemeButton;