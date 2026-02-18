'use client';
import { useRef, useState } from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { 
    Smartphone, Code2, Database, Cloud, 
    Palette, GitBranch, Terminal, Layers 
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Mobile Development',
        icon: Smartphone,
        color: '#06b6d4',
        skills: [
            { name: 'Kotlin', level: 95 },
            { name: 'Java', level: 90 },
            { name: 'Flutter', level: 88 },
            { name: 'Dart', level: 85 },
            { name: 'Jetpack Compose', level: 92 },
            { name: 'React Native', level: 80 },
        ],
    },
    {
        title: 'Frontend & Web',
        icon: Code2,
        color: '#3b82f6',
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'TypeScript', level: 88 },
            { name: 'JavaScript', level: 92 },
            { name: 'HTML/CSS', level: 95 },
            { name: 'Tailwind CSS', level: 88 },
        ],
    },
    {
        title: 'Backend & Database',
        icon: Database,
        color: '#8b5cf6',
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Python', level: 78 },
            { name: 'REST APIs', level: 92 },
            { name: 'GraphQL', level: 75 },
            { name: 'MongoDB', level: 82 },
            { name: 'PostgreSQL', level: 80 },
        ],
    },
    {
        title: 'Cloud & DevOps',
        icon: Cloud,
        color: '#10b981',
        skills: [
            { name: 'Firebase', level: 92 },
            { name: 'AWS', level: 78 },
            { name: 'Docker', level: 75 },
            { name: 'CI/CD', level: 82 },
            { name: 'Google Cloud', level: 80 },
            { name: 'Vercel', level: 88 },
        ],
    },
];

const SkillCard = ({ category, index }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                sx={{
                    p: 3,
                    borderRadius: '24px',
                    background: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.02)'
                        : 'rgba(255, 255, 255, 0.8)',
                    border: `1px solid ${theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.05)'}`,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 30px 60px -20px ${category.color}30`,
                        borderColor: `${category.color}40`,
                    },
                }}
            >
                {/* Background Gradient on Hover */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(circle at 50% 0%, ${category.color}15 0%, transparent 70%)`,
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                    }}
                />

                {/* Icon */}
                <Box
                    sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <category.icon size={28} color={category.color} />
                </Box>

                {/* Title */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: theme.palette.text.primary,
                        fontFamily: 'Nunito, sans-serif',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {category.title}
                </Typography>

                {/* Skills List with Progress Bars */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {category.skills.map((skill, skillIndex) => (
                        <Box key={skill.name}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mb: 0.75,
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 500,
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    {skill.name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontWeight: 600,
                                        color: category.color,
                                    }}
                                >
                                    {skill.level}%
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: 6,
                                    borderRadius: 3,
                                    background: theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.05)'
                                        : 'rgba(0, 0, 0, 0.05)',
                                    overflow: 'hidden',
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.15 + skillIndex * 0.1,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                    style={{
                                        height: '100%',
                                        borderRadius: 3,
                                        background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </motion.div>
    );
};

const Skills = () => {
    const theme = useTheme();
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <Box
            id="Skills"
            sx={{
                py: { xs: 8, md: 12 },
                minHeight: '100vh',
                width: '100%',
                background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(180deg, #111111 0%, #0a0a0a 100%)'
                    : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="xl">
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
                        MY EXPERTISE
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
                        Technical{' '}
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Skills
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
                        Proficient in modern technologies and frameworks, continuously learning 
                        and adapting to new tools to deliver exceptional results.
                    </Typography>
                </motion.div>

                {/* Skills Grid */}
                <Grid container spacing={3}>
                    {skillCategories.map((category, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={category.title}>
                            <SkillCard category={category} index={index} />
                        </Grid>
                    ))}
                </Grid>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{ marginTop: '4rem', textAlign: 'center' }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            gap: 4,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            p: 3,
                            borderRadius: '16px',
                            background: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.02)'
                                : 'rgba(255, 255, 255, 0.8)',
                            border: `1px solid ${theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.05)'}`,
                        }}
                    >
                        {[
                            { icon: GitBranch, label: 'Version Control', desc: 'Git & GitHub' },
                            { icon: Terminal, label: 'Clean Code', desc: 'Best Practices' },
                            { icon: Palette, label: 'UI/UX Design', desc: 'User-Centered' },
                            { icon: Layers, label: 'Architecture', desc: 'MVVM, Clean Code' },
                        ].map((item) => (
                            <Box
                                key={item.label}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    px: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '10px',
                                        background: theme.palette.mode === 'dark'
                                            ? 'rgba(6, 182, 212, 0.1)'
                                            : 'rgba(37, 99, 235, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <item.icon size={20} color={theme.palette.primary.main} />
                                </Box>
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="body2" fontWeight={600}>
                                        {item.label}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Skills;
