import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Download } from '../components/icons/Icons';
import resume from '../assets/resume.pdf';
import SectionHeading from '../components/SectionHeading';
import Skills from './Skills';

const About = () => {
    const theme = useTheme();

    return (
        <Box
            id="About"
            sx={{
                pt: 8,
                minHeight: '100vh',
                width: '100%',
                background: `linear-gradient(to bottom,${theme.palette.background.paper}, ${theme.palette.background.default}, ${theme.palette.background.default})`,

                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    mx: 'auto',
                    px: { xs: 2, sm: 4, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                }}
            >
                <SectionHeading heading="About Me" />

                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        fontWeight: 600,
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3.5rem',
                            lg: '4.5rem',
                        }
                    }}
                >
                    Hi, I'm{' '}
                    <Box component="span" sx={{ color: '#06b6d4', display: { xs: 'block', sm: 'inline' } }}>
                        Devansh Amdavadwala
                    </Box>
                </Typography>

                <Box
                    sx={{
                        color: 'gray.400',
                        fontWeight: 600,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 2, md: 3 },
                        textAlign: 'justify',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                >
                    <Typography>
                        I am an Android Developer with a passion for creating robust, efficient, and user-friendly
                        mobile applications that deliver real-world impact.
                    </Typography>
                    <Typography>
                        With hands-on experience in Java and Kotlin, I specialize in building modern Android apps using
                        Jetpack Compose, MVVM architecture, and Clean Architecture principles. I’ve worked extensively
                        with SharedPreferences, Room Database, and Retrofit, ktor for seamless local and network data
                        handling.
                    </Typography>
                    <Typography>
                        I have integrated Firebase services for real-time updates and authentication, and utilized
                        Coroutines for smooth, asynchronous operations. My development process is enhanced by
                        Dependency Injection using Hilt, Koin and the adoption of external libraries to accelerate and
                        enrich app features.
                    </Typography>
                    <Typography>
                        I enjoy solving complex challenges, exploring the latest tools in Android development, and
                        delivering apps that are optimized, scalable, and easy to maintain.
                    </Typography>
                    <Typography>
                        My focus is on building apps with clean code, modern UI using Compose, and delivering
                        high-quality software on time and within scope.
                    </Typography>
                </Box>

                <ResumeButton/>

                <Skills />
            </Box>
        </Box>
    );
};

export default About;

const ResumeButton = () => {
    return (
        <Box
            component="a"
            href={resume}
            download
            target="_blank"
            rel="noreferrer"
            className="group"
            sx={{
                position: 'relative',
                zIndex: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                width: '10rem',
                textDecoration: 'none',
                background: 'linear-gradient(to bottom right, #22d3ee, #2563eb)',
                transition: 'all 0.3s linear 75ms',
                overflow: 'hidden',
                '&:hover .label': {
                    transform: 'translateX(-1.25rem)',
                    transition: 'transform 0.4s ease-out 0.4s',
                },
                '&:hover .arrow': {
                    transform: 'translateY(0)',
                    opacity: 1,
                    transition: 'transform 0.3s ease-in 0.2s, opacity 0.3s ease-in 0.2s',
                },
            }}
        >
            <Typography
                variant="button"
                className="label"
                sx={{
                    pr: { xs: 3, sm: 0 },
                    color: 'white',
                    fontWeight: 500,
                    fontFamily: 'Nunito',
                    transition: 'transform 0.3s ease',
                }}
            >
                Resume
            </Typography>

            <Box
                className="arrow"
                sx={{
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0,
                    animation: 'arrowPulse 2s infinite',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                }}
            >
                <Download />
            </Box>

            <style>
                {`
                @keyframes arrowPulse {
                    0%, 100% {
                        transform: translateY(-50%) scale(1);
                    }
                    50% {
                        transform: translateY(-50%) scale(1.15);
                    }
                }
                `}
            </style>
        </Box>
    );
};