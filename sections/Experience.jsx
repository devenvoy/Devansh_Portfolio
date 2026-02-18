'use client';
import { useRef } from 'react';
import { Box, Typography, Container, Chip, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { 
    Briefcase, Calendar, MapPin, ExternalLink,
    ChevronRight, TrendingUp, Users, Code2 
} from 'lucide-react';

const experiences = [
    {
        company: "Argon IT Services LLP",
        position: "Mobile Software Developer",
        link: "https://www.argonitservices.com/",
        duration: "May 2024 - Present",
        location: "Remote",
        type: "Full-time",
        highlights: [
            { icon: TrendingUp, text: "4.6+ star rating" },
            { icon: Users, text: "50K+ downloads" },
            { icon: Code2, text: "6+ apps deployed" },
        ],
        description: [
            "Developed and deployed 6+ Android apps using Kotlin and Jetpack Compose, achieving average ratings of 4.6+ stars and 50K+ downloads on Google Play Store.",
            "Reduced app crash rate from 5.8% to 0.7% by implementing comprehensive error handling and automated testing (JUnit, Espresso).",
            "Integrated Firebase Cloud Messaging and Analytics, boosting user engagement by 20% via personalized notifications.",
            "Built RESTful API connections with Retrofit and OkHttp, reducing API response time by 35% using caching strategies.",
            "Automated the CI/CD pipeline using GitHub Actions, reducing deployment time from 1 week to 2 days.",
        ],
        skills: ["Kotlin", "Android", "Jetpack Compose", "Firebase", "Retrofit", "MVVM", "CI/CD"],
    },
];

const TimelineItem = ({ exp, index }) => {
    const theme = useTheme();
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ position: 'relative' }}
        >
            {/* Timeline Line */}
            <Box
                sx={{
                    position: 'absolute',
                    left: { xs: 20, md: '50%' },
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transform: { md: 'translateX(-50%)' },
                    display: { xs: 'none', md: 'block' },
                }}
            />

            {/* Timeline Dot */}
            <Box
                sx={{
                    position: 'absolute',
                    left: { xs: 20, md: '50%' },
                    top: 40,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: theme.palette.primary.main,
                    border: `4px solid ${theme.palette.background.default}`,
                    transform: { md: 'translateX(-50%)' },
                    zIndex: 2,
                    boxShadow: `0 0 20px ${theme.palette.primary.main}50`,
                }}
            />

            {/* Content Card */}
            <Box
                sx={{
                    ml: { xs: 0, md: index % 2 === 0 ? 0 : '50%' },
                    mr: { xs: 0, md: index % 2 === 0 ? '50%' : 0 },
                    pl: { xs: 8, md: index % 2 === 0 ? 0 : 8 },
                    pr: { xs: 0, md: index % 2 === 0 ? 8 : 0 },
                    position: 'relative',
                }}
            >
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <Box
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: '24px',
                            background: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.02)'
                                : 'rgba(255, 255, 255, 0.9)',
                            border: `1px solid ${theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.05)'}`,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            },
                        }}
                    >
                        {/* Header */}
                        <Box sx={{ mb: 3 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.text.primary,
                                            fontFamily: 'Nunito, sans-serif',
                                            mb: 0.5,
                                        }}
                                    >
                                        {exp.position}
                                    </Typography>
                                    <Box
                                        component="a"
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            color: theme.palette.primary.main,
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                gap: 1,
                                            },
                                        }}
                                    >
                                        {exp.company}
                                        <ExternalLink size={16} />
                                    </Box>
                                </Box>
                                <Chip
                                    label={exp.type}
                                    size="small"
                                    sx={{
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}
                                />
                            </Box>

                            {/* Meta Info */}
                            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', color: 'text.secondary' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Calendar size={16} />
                                    <Typography variant="body2">{exp.duration}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <MapPin size={16} />
                                    <Typography variant="body2">{exp.location}</Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Highlights */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                mb: 3,
                                flexWrap: 'wrap',
                            }}
                        >
                            {exp.highlights.map((highlight) => (
                                <Box
                                    key={highlight.text}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 1,
                                        borderRadius: '8px',
                                        background: theme.palette.mode === 'dark'
                                            ? 'rgba(6, 182, 212, 0.1)'
                                            : 'rgba(37, 99, 235, 0.1)',
                                    }}
                                >
                                    <highlight.icon size={16} color={theme.palette.primary.main} />
                                    <Typography variant="body2" fontWeight={600}>
                                        {highlight.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Description */}
                        <Box sx={{ mb: 3 }}>
                            {exp.description.map((point, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        mb: 1.5,
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <ChevronRight 
                                        size={20} 
                                        color={theme.palette.primary.main}
                                        style={{ marginTop: 2, flexShrink: 0 }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {point}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Skills */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {exp.skills.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                        background: theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.05)'
                                            : 'rgba(0, 0, 0, 0.03)',
                                        color: theme.palette.text.secondary,
                                        fontWeight: 500,
                                        '&:hover': {
                                            background: theme.palette.primary.main,
                                            color: '#fff',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    );
};

const Experience = () => {
    const theme = useTheme();
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <Box
            id="experience"
            sx={{
                py: { xs: 8, md: 12 },
                minHeight: '100vh',
                width: '100%',
                background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)'
                    : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
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
                        CAREER PATH
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
                        Work{' '}
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Experience
                        </Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: '1.125rem',
                        }}
                    >
                        My professional journey and the impactful projects 
                        I've contributed to along the way.
                    </Typography>
                </motion.div>

                {/* Timeline */}
                <Box sx={{ position: 'relative' }}>
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.company} exp={exp} index={index} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Experience;
