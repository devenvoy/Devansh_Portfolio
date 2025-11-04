'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HamBurgerMenu from '../components/HamBurgerMenu';
import Navigation from '../components/Navigation';
import { useTheme } from '@mui/material';

const Navbar = () => {
    const theme = useTheme();
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen((prev) => !prev);
    };

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    width: '100%',
                    height: '80px',
                    zIndex: 50,
                    background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}95, transparent)`,
                    backdropFilter: 'blur(8px)',
                    maxWidth: '100vw',
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3,
                    }}
                >
                    {/* Logo */}
                    <Box
                        onClick={() => (window.location.href = '/')}
                        sx={{
                            fontSize: '2rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'Nunito, sans-serif',
                            transition: '0.3s',
                            color: theme.palette.primary.main,
                            '&:hover': {
                                transform: 'scale(1.05)',
                            }
                        }}
                    >
                        PortFolio
                    </Box>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Navigation ulClass="" liClass="" />
                    </Box>

                    {/* Hamburger Icon - Only visible on mobile */}
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            zIndex: 70,
                        }}
                    >
                        <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />
                    </Box>

                    {/* Mobile Navigation Slide Menu */}
                    <Box
                        sx={{
                            transform: navOpen ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.3s ease-in-out',
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'column',
                            height: '100vh',
                            width: { xs: '70vw', sm: '320px' },
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            background: theme.palette.background.paper,
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 60,
                            boxShadow: theme.shadows[10],
                        }}
                    >
                        <Navigation
                            handleClick={handleClick}
                            ulClass="mobile-menu"
                            liClass="mobile-menu-item"
                        />
                    </Box>

                    {/* Overlay when menu is open */}
                    {navOpen && (
                        <Box
                            onClick={handleClick}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 55,
                            }}
                        />
                    )}
                </Container>
            </Box>

            {/* Spacer to prevent content from being hidden under fixed navbar */}
            <Box sx={{ height: '80px' }} />

            {/* Hidden navigation for SEO */}
            <nav style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </>
    );
};

export default Navbar;