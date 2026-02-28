'use client'
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { trackCTAClick, trackSocialClick, trackResumeDownload } from '../lib/analytics';
import GridLightEffect from '../components/HeroScene';
import { StarsCanvas } from '../components/star-background';


// Floating shape component
const FloatingShape = ({ children, delay = 0, x = 0, y = 0 }) => (
    <motion.div
        style={{ position: 'absolute', left: x, top: y }}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
        }}
        transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        {children}
    </motion.div>
);

const Home = () => {
    const theme = useTheme();

    // Track the global window scroll (no ref needed for fixed elements)
    const { scrollYProgress } = useScroll();

    // Hero content fades/scales/moves as user scrolls the page
    const y = useTransform(scrollYProgress, [0, 0.15], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    // Mouse parallax for 3D depth
    const rightX = useTransform(mouseX, (val) => val);
    const rightY = useTransform(mouseY, (val) => val);
    const leftX = useTransform(mouseX, (val) => -val * 0.5);
    const leftY = useTransform(mouseY, (val) => -val * 0.5);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            // Increased range for more noticeable effect
            mouseX.set((clientX - innerWidth / 2) / 25);
            mouseY.set((clientY - innerHeight / 2) / 25);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);


    const socialLinks = [
        { icon: Github, href: 'https://github.com/devenvoy', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/devansh-a-bb104524a', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:devanshamdavadwala@gmail.com', label: 'Email' },
    ];

    return (
        <Box
            id="Home"
            sx={{
                height: '100vh',
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0, // ensure About section scrolls OVER this
                overflow: 'hidden',
                background: theme.palette.mode === 'dark'
                    ? 'transparent'
                    : 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 30%, #f0f9ff 60%, #faf5ff 100%)',
            }}
        >
            {/* Star Background — only in dark/night mode */}
            {theme.palette.mode === 'dark' && <StarsCanvas />}

            {/* Grid Light Effect — gradient flashlight visible only through grid lines */}
            <GridLightEffect darkMode={theme.palette.mode === 'dark'} />
            <Container
                maxWidth="xl"
                sx={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <motion.div
                    style={{ y, opacity, scale, width: '100%' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: { xs: 6, md: 8 },
                            px: { xs: 2, md: 4 },
                        }}
                    >
                        {/* Left Content */}
                        <motion.div
                            style={{ x: leftX, y: leftY, flex: 1, maxWidth: '100%' }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: { xs: '100%', md: '100%' }, // we move max-width to motion div
                                    textAlign: { xs: 'center', md: 'left' },
                                }}
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            px: 2,
                                            py: 0.75,
                                            borderRadius: '20px',
                                            background: theme.palette.mode === 'dark'
                                                ? 'rgba(6, 182, 212, 0.1)'
                                                : 'rgba(37, 99, 235, 0.1)',
                                            border: `1px solid ${theme.palette.mode === 'dark'
                                                ? 'rgba(6, 182, 212, 0.2)'
                                                : 'rgba(37, 99, 235, 0.2)'}`,
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                background: '#10b981',
                                                animation: 'pulse 2s infinite',
                                                '@keyframes pulse': {
                                                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                                                    '50%': { opacity: 0.5, transform: 'scale(1.2)' },
                                                },
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                fontWeight: 600,
                                                letterSpacing: '0.5px',
                                            }}
                                        >
                                            Available for hire
                                        </Typography>
                                    </Box>
                                </motion.div>

                                {/* Main Heading */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                                            fontWeight: 800,
                                            lineHeight: 1.1,
                                            mb: 2,
                                            fontFamily: 'Nunito, sans-serif',
                                        }}
                                    >
                                        <Box component="span" sx={{ color: theme.palette.text.primary }}>
                                            Hi, I'm{' '}
                                        </Box>
                                        <Box
                                            component="span"
                                            sx={{
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                position: 'relative',
                                            }}
                                        >
                                            Devansh
                                            <motion.span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: -5,
                                                    left: 0,
                                                    right: 0,
                                                    height: 8,
                                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                    borderRadius: 4,
                                                    opacity: 0.3,
                                                }}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 0.8, delay: 1 }}
                                            />
                                        </Box>
                                    </Typography>
                                </motion.div>

                                {/* Type Animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                                            fontWeight: 600,
                                            color: theme.palette.text.secondary,
                                            mb: 3,
                                            minHeight: { xs: '2.5rem', md: '3rem' },
                                        }}
                                    >
                                        I'm a{' '}
                                        <Box
                                            component="span"
                                            sx={{ color: theme.palette.primary.main }}
                                        >
                                            <TypeAnimation
                                                sequence={[
                                                    'Android Developer',
                                                    2000,
                                                    'Kotlin Enthusiast',
                                                    2000,
                                                    'Mobile App Developer',
                                                    2000,
                                                    'Software Developer',
                                                    2000,
                                                ]}
                                                speed={50}
                                                repeat={Infinity}
                                            />
                                        </Box>
                                    </Typography>
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.125rem' },
                                            color: theme.palette.text.secondary,
                                            maxWidth: '500px',
                                            mb: 4,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        I build polished, high-performance mobile apps with a focus on
                                        Android and Kotlin. Specialized in Jetpack Compose, Compose Multiplatform,
                                        and Flutter — with hands-on experience in backend and frontend web development.
                                    </Typography>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href="#Contact"
                                        onClick={() => trackCTAClick('lets_talk')}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '12px',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            boxShadow: `0 10px 30px -10px ${theme.palette.primary.main}50`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-3px)',
                                                boxShadow: `0 20px 40px -15px ${theme.palette.primary.main}60`,
                                            },
                                        }}
                                    >
                                        Let's Talk
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        startIcon={<Download size={20} />}
                                        onClick={() => trackResumeDownload()}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '12px',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            borderWidth: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-3px)',
                                                borderWidth: 2,
                                            },
                                        }}
                                    >
                                        Download CV
                                    </Button>
                                </motion.div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    style={{ marginTop: '2rem' }}
                                >
                                    <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => trackSocialClick(social.label)}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                                style={{
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : 'rgba(0, 0, 0, 0.03)',
                                                    border: `1px solid ${theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.1)'
                                                        : 'rgba(0, 0, 0, 0.08)'}`,
                                                    color: theme.palette.text.primary,
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                <social.icon size={20} />
                                            </motion.a>
                                        ))}
                                    </Box>
                                </motion.div>
                            </Box>
                        </motion.div>

                        {/* Right Content - Profile Image */}
                        <motion.div
                            style={{ x: rightX, y: rightY, flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 1, delay: 0.5, type: 'spring' }}
                                    style={{ position: 'relative' }}
                                >
                                    {/* Decorative Rings */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                        style={{
                                            position: 'absolute',
                                            inset: -20,
                                            border: `2px dashed ${theme.palette.mode === 'dark'
                                                ? 'rgba(6, 182, 212, 0.2)'
                                                : 'rgba(37, 99, 235, 0.2)'}`,
                                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                        }}
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                        style={{
                                            position: 'absolute',
                                            inset: -40,
                                            border: `2px dashed ${theme.palette.mode === 'dark'
                                                ? 'rgba(139, 92, 246, 0.15)'
                                                : 'rgba(59, 130, 246, 0.15)'}`,
                                            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                                        }}
                                    />

                                    {/* Main Image Container */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: { xs: 280, sm: 320, md: 380 },
                                            height: { xs: 280, sm: 320, md: 380 },
                                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                            overflow: 'hidden',
                                            boxShadow: theme.palette.mode === 'dark'
                                                ? '0 25px 50px -12px rgba(6, 182, 212, 0.25)'
                                                : '0 25px 50px -12px rgba(37, 99, 235, 0.25)',
                                        }}
                                    >
                                        <Image
                                            src="https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759215454/Avatar_lt6zhz.jpg"
                                            alt="Devansh Amdavadwala"
                                            fill
                                            priority
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                        />

                                        {/* Overlay gradient */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: `linear-gradient(180deg, transparent 60%, ${theme.palette.mode === 'dark'
                                                    ? 'rgba(0,0,0,0.4)'
                                                    : 'rgba(255,255,255,0.2)'} 100%)`,
                                            }}
                                        />
                                    </Box>

                                    {/* Floating Tech Stack Badges */}
                                    <FloatingShape x="-60px" y="20%" delay={0}>
                                        <Box
                                            sx={{
                                                px: 2,
                                                py: 0.75,
                                                borderRadius: '8px',
                                                background: theme.palette.mode === 'dark'
                                                    ? 'rgba(127, 82, 255, 0.9)'
                                                    : 'rgba(127, 82, 255, 0.95)',
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                                boxShadow: '0 4px 15px rgba(127, 82, 255, 0.4)',
                                            }}
                                        >
                                            Kotlin
                                        </Box>
                                    </FloatingShape>

                                    <FloatingShape x="calc(100% + 20px)" y="40%" delay={1}>
                                        <Box
                                            sx={{
                                                px: 2,
                                                py: 0.75,
                                                borderRadius: '8px',
                                                background: theme.palette.mode === 'dark'
                                                    ? 'rgba(2, 119, 189, 0.9)'
                                                    : 'rgba(2, 119, 189, 0.95)',
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                                boxShadow: '0 4px 15px rgba(2, 119, 189, 0.4)',
                                            }}
                                        >
                                            Flutter
                                        </Box>
                                    </FloatingShape>

                                    <FloatingShape x="-40px" y="70%" delay={2}>
                                        <Box
                                            sx={{
                                                px: 2,
                                                py: 0.75,
                                                borderRadius: '8px',
                                                background: theme.palette.mode === 'dark'
                                                    ? 'rgba(76, 175, 80, 0.9)'
                                                    : 'rgba(76, 175, 80, 0.95)',
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                                            }}
                                        >
                                            Compose
                                        </Box>
                                    </FloatingShape>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <motion.a
                        href="#About"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            color: theme.palette.text.secondary,
                            textDecoration: 'none',
                        }}
                    >
                        <Typography variant="caption" sx={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                            SCROLL
                        </Typography>
                        <Box
                            sx={{
                                width: 24,
                                height: 40,
                                border: `2px solid ${theme.palette.text.secondary}`,
                                borderRadius: '12px',
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 1,
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    width: 4,
                                    height: 8,
                                    borderRadius: 2,
                                    background: theme.palette.primary.main,
                                }}
                            />
                        </Box>
                    </motion.a>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Home;
