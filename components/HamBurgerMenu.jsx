'use client'
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';

const HamBurgerMenu = ({ handleClick, navOpen }) => {
    const theme = useTheme();

    return (
        <IconButton
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '32px',
                height: '32px',
                padding: 0,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 70,
                '&:focus': {
                    outline: 'none',
                },
            }}
            aria-label="Toggle menu"
        >
            <Box
                sx={{
                    width: '32px',
                    height: '3px',
                    backgroundColor: theme.palette.text.primary,
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    transformOrigin: '1px',
                    transform: navOpen ? 'rotate(45deg)' : 'rotate(0)',
                }}
            />
            <Box
                sx={{
                    width: '32px',
                    height: '3px',
                    backgroundColor: theme.palette.text.primary,
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    opacity: navOpen ? 0 : 1,
                    transform: navOpen ? 'translateX(20px)' : 'translateX(0)',
                }}
            />
            <Box
                sx={{
                    width: '32px',
                    height: '3px',
                    backgroundColor: theme.palette.text.primary,
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    transformOrigin: '1px',
                    transform: navOpen ? 'rotate(-45deg)' : 'rotate(0)',
                }}
            />
        </IconButton>
    );
};

export default HamBurgerMenu;