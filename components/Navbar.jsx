'use client'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HamBurgerMenu from '../components/HamBurgerMenu';
import Navigation from '../components/Navigation';
import { useTheme } from '@mui/material';

const Navbar = () => {
    const theme = useTheme();
    const [navOpen, setNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => {
        setNavOpen((prev) => !prev);
    };

    // Track scroll for background change
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section
    useEffect(() => {
        // Home is position:fixed, so we can't observe it with IntersectionObserver.
        // Instead, detect Home by scroll position and observe the rest normally.
        const sections = ['About', 'Skills', 'experience', 'Projects', 'blogs', 'Contact'];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        // Detect "Home" when scrolled near the top
        const handleScroll = () => {
            if (window.scrollY < window.innerHeight * 0.5) {
                setActiveSection('Home');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // set initial state

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
        if (handleClick) handleClick();
    };

    return (
        <>
            <Box
                component="header"
                sx={{
                    position: 'fixed',
                    width: '100%',
                    height: 70,
                    zIndex: 50,
                    top: 0,
                    left: 0,
                    background: theme.palette.mode === 'dark'
                        ? scrolled
                            ? 'rgba(10, 10, 10, 0.95)'
                            : 'transparent'
                        : scrolled
                            ? 'rgba(255, 255, 255, 0.95)'
                            : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                    borderBottom: scrolled
                        ? `1px solid ${theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.08)'
                            : 'rgba(0, 0, 0, 0.06)'}`
                        : 'none',
                    boxShadow: scrolled
                        ? theme.palette.mode === 'dark'
                            ? '0 4px 30px rgba(0, 0, 0, 0.4)'
                            : '0 4px 30px rgba(0, 0, 0, 0.08)'
                        : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: { xs: 2, sm: 3, md: 4 },
                    }}
                >
                    {/* Logo */}
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                            fontWeight: 700,
                            cursor: 'pointer',
                            fontFamily: 'Nunito, sans-serif',
                            background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #06b6d4 100%)'
                                : 'linear-gradient(135deg, #2563eb 0%, #06b6d6 50%, #2563eb 100%)',
                            backgroundSize: '200% auto',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',

                            '&:hover': {
                                transform: 'scale(1.03)',
                                backgroundPosition: 'right center',
                            },
                        }}
                    >
                        Devansh
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Navigation
                            ulClass=""
                            liClass=""
                            activeSection={activeSection}
                        />
                    </Box>

                    {/* Mobile Hamburger */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, zIndex: 70 }}>
                        <HamBurgerMenu handleClick={handleClick} navOpen={navOpen} />
                    </Box>

                    {/* Mobile Navigation Menu */}
                    <Box
                        sx={{
                            transform: navOpen ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'column',
                            height: '100vh',
                            width: { xs: '80vw', sm: '320px' },
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            background: theme.palette.background.paper,
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 60,
                            boxShadow: '-10px 0 40px rgba(0,0,0,0.2)',
                        }}
                    >
                        <Navigation
                            handleClick={handleClick}
                            ulClass="mobile-menu"
                            liClass="mobile-menu-item"
                            activeSection={activeSection}
                        />
                    </Box>

                    {/* Mobile Overlay */}
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
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 55,
                            }}
                        />
                    )}
                </Container>
            </Box>

            {/* Spacer */}
            <Box sx={{ height: 70 }} />

            {/* SEO Navigation */}
            <nav style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
            </nav>
        </>
    );
};

export default Navbar;
