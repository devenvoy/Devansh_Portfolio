'use client';
import { useRef, useState } from 'react';
import { Box, Typography, Container, useTheme, Tooltip, Fade } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Smartphone, Code2, Database, Cloud, Layers
} from 'lucide-react';

const skillCategories = [
    {
        id: 'mobile',
        title: 'Mobile',
        icon: Smartphone,
        color: '#06b6d4',
        skills: [
            { name: 'Kotlin', level: 95 },
            { name: 'Java', level: 90 },
            { name: 'Jetpack Compose', level: 92 },
            { name: 'Android SDK', level: 93 },
            { name: 'Flutter / Dart', level: 85 },
            { name: 'Material Design', level: 90 },
        ],
    },
    {
        id: 'web',
        title: 'Web',
        icon: Code2,
        color: '#f59e0b',
        skills: [
            { name: 'Compose Multiplatform', level: 85 },
            { name: 'React.js', level: 88 },
            { name: 'Next.js', level: 82 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML / CSS', level: 92 },
        ],
    },
    {
        id: 'architecture',
        title: 'Architecture',
        icon: Layers,
        color: '#8b5cf6',
        skills: [
            { name: 'MVVM / Clean Architecture', level: 92 },
            { name: 'Room Database', level: 90 },
            { name: 'Retrofit / OkHttp', level: 93 },
            { name: 'Kotlin Coroutines', level: 88 },
            { name: 'Dependency Injection (Hilt)', level: 85 },
            { name: 'SQLite', level: 88 },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: Database,
        color: '#3b82f6',
        skills: [
            { name: 'REST APIs', level: 95 },
            { name: 'GraphQL', level: 80 },
            { name: 'Firebase', level: 92 },
            { name: 'MongoDB', level: 85 },
            { name: 'Supabase', level: 82 },
            { name: 'AWS S3', level: 78 },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps',
        icon: Cloud,
        color: '#10b981',
        skills: [
            { name: 'Git / GitHub', level: 95 },
            { name: 'Docker', level: 78 },
            { name: 'CI/CD', level: 85 },
            { name: 'Postman', level: 90 },
            { name: 'Heroku / DigitalOcean', level: 82 },
            { name: 'Cloudflare', level: 80 },
        ],
    },
];

const SkillProgressBar = ({ skill, index, color, isInView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
        >
            <Box sx={{ mb: 2.5 }}>
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
                            color: 'text.primary',
                        }}
                    >
                        {skill.name}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 600,
                            color: color,
                        }}
                    >
                        {skill.level}%
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: 6,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.05)',
                        overflow: 'hidden',
                    }}
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        style={{
                            height: '100%',
                            borderRadius: 3,
                            background: `linear-gradient(90deg, ${color}, ${color}80)`,
                        }}
                    />
                </Box>
            </Box>
        </motion.div>
    );
};

const Skills = () => {
    const theme = useTheme();
    const headerRef = useRef(null);
    const skillsRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

    const [selectedTab, setSelectedTab] = useState('mobile');
    const [hoveredTab, setHoveredTab] = useState(null);

    const activeCategory = skillCategories.find(cat => cat.id === selectedTab);
    const hoveredCategory = hoveredTab ? skillCategories.find(cat => cat.id === hoveredTab) : null;
    const displayedCategory = hoveredCategory || activeCategory;

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
            <Container maxWidth="lg">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
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
                        Specialized in Android development with expertise in Kotlin, Jetpack Compose,
                        and cross-platform solutions including web technologies.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: { xs: 1.5, sm: 2 },
                            mb: 4,
                            flexWrap: 'wrap',
                        }}
                    >
                        {skillCategories.map((category) => (
                            <Tooltip
                                key={category.id}
                                title={category.title}
                                placement="top"
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 300 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Box
                                        onClick={() => setSelectedTab(category.id)}
                                        onMouseEnter={() => setHoveredTab(category.id)}
                                        onMouseLeave={() => setHoveredTab(null)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            px: { xs: 2, sm: 3 },
                                            py: { xs: 1.5, sm: 2 },
                                            borderRadius: '16px',
                                            cursor: 'pointer',
                                            background: selectedTab === category.id
                                                ? `linear-gradient(135deg, ${category.color}20, ${category.color}10)`
                                                : theme.palette.mode === 'dark'
                                                    ? 'rgba(255, 255, 255, 0.03)'
                                                    : 'rgba(0, 0, 0, 0.02)',
                                            border: `2px solid ${selectedTab === category.id ? category.color : 'transparent'}`,
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                background: `linear-gradient(135deg, ${category.color}15, ${category.color}08)`,
                                                borderColor: `${category.color}60`,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 32, sm: 40 },
                                                height: { xs: 32, sm: 40 },
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                                            }}
                                        >
                                            <category.icon
                                                size={20}
                                                color={selectedTab === category.id ? category.color : theme.palette.text.secondary}
                                            />
                                        </Box>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 600,
                                                color: selectedTab === category.id
                                                    ? category.color
                                                    : theme.palette.text.primary,
                                                display: { xs: 'none', sm: 'block' },
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {category.title}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Tooltip>
                        ))}
                    </Box>
                </motion.div>

                <Box ref={skillsRef}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={displayedCategory.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Box
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: '24px',
                                    background: theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.02)'
                                        : 'rgba(255, 255, 255, 0.8)',
                                    border: `1px solid ${theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.05)'
                                        : 'rgba(0, 0, 0, 0.05)'}`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 4,
                                        background: `linear-gradient(90deg, ${displayedCategory.color}, ${displayedCategory.color}80)`,
                                    }}
                                />

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: `linear-gradient(135deg, ${displayedCategory.color}20, ${displayedCategory.color}10)`,
                                        }}
                                    >
                                        <displayedCategory.icon size={24} color={displayedCategory.color} />
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            color: theme.palette.text.primary,
                                            fontFamily: 'Nunito, sans-serif',
                                        }}
                                    >
                                        {displayedCategory.title}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                                        gap: { xs: 1, md: 4 },
                                    }}
                                >
                                    {displayedCategory.skills.map((skill, index) => (
                                        <SkillProgressBar
                                            key={skill.name}
                                            skill={skill}
                                            index={index}
                                            color={displayedCategory.color}
                                            isInView={isSkillsInView}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </motion.div>
                    </AnimatePresence>
                </Box>

            </Container>
        </Box>
    );
};

export default Skills;
