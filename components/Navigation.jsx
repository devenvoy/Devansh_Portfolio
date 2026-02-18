'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import Link from 'next/link';
import OrbitalThemeButton from './OrbitalThemeButton';

const Navigation = ({ handleClick, ulClass, liClass }) => {
    const theme = useTheme();

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Achievements', href: '/achievements' },
        { name: 'Contact', href: '/#contact' },
    ];

    const isMobileMenu = ulClass?.includes('mobile');

    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                flexDirection: isMobileMenu ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: isMobileMenu ? 'center' : 'flex-end',
                gap: isMobileMenu ? 3 : 4,
                listStyle: 'none',
                margin: 0,
                padding: 0,
                height: isMobileMenu ? '100%' : 'auto',
            }}
        >
            {navLinks.map((link) => (
                <Box
                    component="li"
                    key={link.name}
                    sx={{
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <Link
                        href={link.href}
                        onClick={handleClick}
                        style={{ textDecoration: 'none' }}
                    >
                        <Typography
                            sx={{
                                color: theme.palette.text.primary,
                                fontSize: isMobileMenu ? '1.25rem' : '1rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                padding: isMobileMenu ? '12px 24px' : '8px 12px',
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                    transform: 'translateY(-2px)',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 0,
                                    height: '2px',
                                    backgroundColor: theme.palette.primary.main,
                                    transition: 'width 0.3s ease',
                                },
                                '&:hover::after': {
                                    width: '80%',
                                },
                            }}
                        >
                            {link.name}
                        </Typography>
                    </Link>
                </Box>
            ))}

            {/* Theme Toggle Button */}
            <Box component="li" sx={{ margin: 0, padding: 0 }}>
                <OrbitalThemeButton />
            </Box>
        </Box>
    );
};

export default Navigation;
