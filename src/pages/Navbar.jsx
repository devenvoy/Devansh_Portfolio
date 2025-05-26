import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import HamBurgerMenu from '../components/HamBurgerMenu';
import Navigation from '../components/Navigation';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen(prev => !prev);
    };

    return (
        <>
            {/* Top Navbar using MUI Box + Container */}
            <Box
                sx={{
                    position: 'fixed',
                    width: '100%',
                    height: '80px',
                    zIndex: 50,
                    background: 'linear-gradient(to bottom, black, black, transparent)',
                    backdropFilter: 'blur(3px)',
                    maxWidth: '100vw',
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3 }}
                >
                    {/* Logo */}
                    <Box
                        onClick={() => (window.location.href = '/')}
                        sx={{
                            fontSize: '2.5rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'cursive',
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
                    <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />

                    {/* Mobile Navigation Slide Menu */}
                    <Navigation
                        handleClick={handleClick}
                        ulClass={`${navOpen ? "-translate-x-0" : "translate-x-full"} duration-500 flex flex-col h-screen bg-gradient-to-b from-black to-gray-800 w-screen xs:w-80 top-0 right-0 absolute items-center justify-center md:scale-0`}
                        liClass="my-4 py-2 text-lg"
                    />
                </Container>
            </Box>

            {/* Spacer for mobile */}
            <Box className="md:hidden" sx={{ height: '128px', backgroundColor: 'black' }} />
        </>
    );
};

export default Navbar;
