'use client';
import { useRef } from 'react';
import { Box, Typography, Container, Grid, Chip, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { Download, MapPin, Calendar, Coffee, Code2, Sparkles } from 'lucide-react';

const stats = [
    { number: '3+', label: 'Years Experience', icon: Calendar },
    { number: '50+', label: 'Projects Completed', icon: Code2 },
    { number: '20+', label: 'Happy Clients', icon: Sparkles },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee },
];

const skills = [
    'Android Development', 'Flutter', 'React Native', 'Kotlin',
    'Java', 'Dart', 'Jetpack Compose', 'Firebase',
    'REST APIs', 'Git', 'CI/CD', 'UI/UX Design'
];

const About = () => {
    const theme = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        },
    };

    return (
        <Box
            id="About"
            sx={{
                py: { xs: 8, md: 12 },
                minHeight: '100vh',
                width: '100%',
                background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)'
                    : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.palette.primary.main}08 0%, transparent 50%),
                                      radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main}08 0%, transparent 50%)`,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                letterSpacing: '3px',
                                fontSize: '0.875rem',
                                mb: 1,
                                display: 'block',
                            }}
                        >
                            GET TO KNOW ME
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                fontWeight: 800,
                                mb: 2,
                                fontFamily: 'Nunito, sans-serif',
                            }}
                        >
                            About{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Me
                            </Box>
                        </Typography>
                        <Box
                            sx={{
                                width: 60,
                                height: 4,
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                borderRadius: 2,
                                mx: 'auto',
                            }}
                        />
                    </motion.div>

                    <Grid container spacing={6} alignItems="center">
                        {/* Left Content */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: { xs: '1.5rem', md: '2rem' },
                                        fontWeight: 700,
                                        mb: 3,
                                        fontFamily: 'Nunito, sans-serif',
                                    }}
                                >
                                    I'm{' '}
                                    <Box
                                        component="span"
                                        sx={{ color: theme.palette.primary.main }}
                                    >
                                        Devansh Amdavadwala
                                    </Box>
                                    , a passionate Mobile & Full Stack Developer
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: '1.125rem',
                                        lineHeight: 1.8,
                                        mb: 3,
                                    }}
                                >
                                    With over 3 years of experience, I specialize in crafting exceptional 
                                    mobile applications and web solutions. My expertise spans across Android 
                                    development with Kotlin and Java, cross-platform development with Flutter, 
                                    and modern web technologies.
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: '1.125rem',
                                        lineHeight: 1.8,
                                        mb: 4,
                                    }}
                                >
                                    I believe in writing clean, maintainable code and creating intuitive user 
                                    experiences. When I'm not coding, you'll find me exploring new technologies, 
                                    contributing to open-source projects, or enjoying a good cup of coffee.
                                </Typography>

                                {/* Location & Quick Info */}
                                <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: 'wrap' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <MapPin size={20} color={theme.palette.primary.main} />
                                        <Typography variant="body2" color="text.secondary">
                                            Gujarat, India
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Calendar size={20} color={theme.palette.primary.main} />
                                        <Typography variant="body2" color="text.secondary">
                                            3+ Years Experience
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Skills Tags */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                        >
                                            <Chip
                                                label={skill}
                                                size="small"
                                                sx={{
                                                    background: theme.palette.mode === 'dark'
                                                        ? 'rgba(6, 182, 212, 0.1)'
                                                        : 'rgba(37, 99, 235, 0.1)',
                                                    color: theme.palette.primary.main,
                                                    fontWeight: 500,
                                                    border: `1px solid ${theme.palette.mode === 'dark'
                                                        ? 'rgba(6, 182, 212, 0.2)'
                                                        : 'rgba(37, 99, 235, 0.2)'}`,
                                                    '&:hover': {
                                                        background: theme.palette.primary.main,
                                                        color: '#fff',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.3s ease',
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Box>

                                {/* Resume Button */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Box
                                        component="a"
                                        href="/devansh_amdavadwala_resume.pdf"
                                        download
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            color: '#fff',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            boxShadow: `0 10px 30px -10px ${theme.palette.primary.main}50`,
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: `0 20px 40px -15px ${theme.palette.primary.main}60`,
                                            },
                                        }}
                                    >
                                        <Download size={20} />
                                        Download Resume
                                    </Box>
                                </motion.div>
                            </motion.div>
                        </Grid>

                        {/* Right Content - Stats */}
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={3}>
                                {stats.map((stat, index) => (
                                    <Grid item xs={6} key={stat.label}>
                                        <motion.div
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            style={{ height: '100%' }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 3,
                                                    borderRadius: '20px',
                                                    background: theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.03)'
                                                        : 'rgba(255, 255, 255, 0.8)',
                                                    border: `1px solid ${theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : 'rgba(0, 0, 0, 0.05)'}`,
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        borderColor: theme.palette.primary.main,
                                                        boxShadow: `0 20px 40px -20px ${theme.palette.primary.main}30`,
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: '14px',
                                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mb: 2,
                                                        mx: 'auto',
                                                    }}
                                                >
                                                    <stat.icon size={24} color={theme.palette.primary.main} />
                                                </Box>
                                                <Typography
                                                    variant="h3"
                                                    sx={{
                                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                                        fontWeight: 800,
                                                        color: theme.palette.text.primary,
                                                        mb: 0.5,
                                                        fontFamily: 'Nunito, sans-serif',
                                                    }}
                                                >
                                                    {stat.number}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: theme.palette.text.secondary,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {stat.label}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
