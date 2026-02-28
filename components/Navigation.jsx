'use client';
import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import OrbitalThemeButton from './OrbitalThemeButton';

const Navigation = ({ handleClick, ulClass, activeSection }) => {
    const theme = useTheme();
    const [hoveredItem, setHoveredItem] = useState(null);

    const navLinks = [
        { name: 'Home', href: '#Home', id: 'Home' },
        { name: 'About', href: '#About', id: 'About' },
        { name: 'Skills', href: '#Skills', id: 'Skills' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#Projects', id: 'Projects' },
        { name: 'Contact', href: '#Contact', id: 'Contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        // The Home section is position:fixed, so scrollIntoView won't work.
        // Instead, scroll to the very top of the page.
        if (href === '#Home' || href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        if (handleClick) handleClick();
    };

    const isMobileMenu = ulClass?.includes('mobile');

    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                flexDirection: isMobileMenu ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: isMobileMenu ? 'center' : 'flex-end',
                gap: isMobileMenu ? 2 : 0.5,
                listStyle: 'none',
                margin: 0,
                padding: 0,
            }}
        >
            {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredItem === index;

                return (
                    <Box
                        component="li"
                        key={link.name}
                        sx={{
                            margin: 0,
                            padding: 0,
                            position: 'relative',
                        }}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Typography
                            component="a"
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            sx={{
                                position: 'relative',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                px: isMobileMenu ? 4 : { md: 1.5, lg: 2 },
                                py: isMobileMenu ? 2 : 1,
                                fontSize: isMobileMenu ? '1.25rem' : { md: '0.875rem', lg: '0.9375rem' },
                                fontWeight: isActive ? 600 : 500,
                                color: isActive
                                    ? theme.palette.primary.main
                                    : theme.palette.text.primary,
                                transition: 'all 0.25s ease-out',
                                cursor: 'pointer',
                                borderRadius: '6px',
                                letterSpacing: isActive ? '0.3px' : '0',
                                textDecoration: 'none',

                                // Hover background
                                backgroundColor: isActive
                                    ? theme.palette.mode === 'dark'
                                        ? 'rgba(6, 182, 212, 0.12)'
                                        : 'rgba(37, 99, 235, 0.08)'
                                    : isHovered
                                        ? theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.04)'
                                            : 'rgba(0, 0, 0, 0.03)'
                                        : 'transparent',

                                // Lift effect on hover
                                transform: isHovered && !isActive ? 'translateY(-1px)' : 'translateY(0)',

                                // Active indicator dot
                                '&::before': isActive ? {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                } : {},

                                // Underline on hover (for non-active items)
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: isActive ? '4px' : isHovered ? '20%' : '0%',
                                    height: '2px',
                                    borderRadius: '1px',
                                    backgroundColor: isActive
                                        ? 'transparent'
                                        : theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.4)'
                                            : 'rgba(0, 0, 0, 0.3)',
                                    transition: 'width 0.25s ease-out',
                                },
                            }}
                        >
                            {link.name}
                        </Typography>
                    </Box>
                );
            })}

            {/* Divider */}
            {!isMobileMenu && (
                <Box
                    sx={{
                        width: '1px',
                        height: '20px',
                        backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)',
                        mx: 1,
                    }}
                />
            )}

            {/* Theme Toggle */}
            <Box component="li" sx={{ margin: 0, padding: 0, ml: isMobileMenu ? 0 : 0.5 }}>
                <OrbitalThemeButton />
            </Box>
        </Box>
    );
};

export default Navigation;
