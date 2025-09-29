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
                    background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, 'transparent')`,
                    backdropFilter: 'blur(3px)',
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
                            fontSize: '2.5rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'Nunito',
                            transition: '0.5s',
                        }}
                        className="animatedHeading font-signature"
                    >
                        <span style={{ color: 'transparent' }}>Port</span>
                        <span style={{ color: 'transparent' }}>Folio</span>
                    </Box>

                    {/* Desktop Navigation */}
                    <Navigation ulClass="hidden md:flex" liClass="" />

                    {/* Hamburger Icon */}
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 20,
                            right: 20,
                            zIndex: 70,
                        }}
                    >
                        <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />
                    </Box>

                    {/* Mobile Navigation Slide Menu */}
                    <Box
                        sx={{
                            transform: navOpen ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.5s ease',
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'column',
                            height: '100vh',
                            width: { xs: '100vw', sm: '20rem' },
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 60,
                            boxShadow: theme.shadows[5],
                        }}
                    >
                        <Navigation
                            handleClick={handleClick}
                            ulClass="flex flex-col h-full w-full items-center justify-center"
                            liClass="my-4 py-2 text-lg"
                        />
                    </Box>
                </Container>
            </Box>

            {/* Spacer for mobile */}
            <Box className="md:hidden" sx={{ height: '128px', backgroundColor: 'transparent' }} />
        </>
    );
};

export default Navbar;
