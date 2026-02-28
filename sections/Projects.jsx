'use client';
import { useRef } from 'react';
import { Box, Typography, Container, Chip, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star, Eye, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { trackProjectClick, trackSocialClick } from '../lib/analytics';

const projects = [
    {
        img: "https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759292039/gradnet_pbjkhi.webp",
        name: "GradNet Graduate's Network",
        demo: "https://github.com/devenvoy/GradNet-GraduateNetwork",
        github: "https://github.com/devenvoy/GradNet-GraduateNetwork",
        description: "A comprehensive platform connecting recent graduates with employers. Features job posting, candidate search, application management, and real-time notifications.",
        technologies: ["Kotlin", "Compose Multiplatform", "Ktor", "SQLDelight", "Firebase"],
        stats: { stars: 12, views: "2.5k" },
        featured: true,
    },
    {
        img: "https://res.cloudinary.com/dzbtr3w2l/image/upload/v1762755740/contactdialer_fk7nck.png",
        name: "iPhone Style Dialer",
        demo: "https://play.google.com/store/apps/details?id=com.contact.idialer.phonecaller",
        github: "https://github.com/devenvoy",
        description: "A stylish phone dialer app with iPhone-inspired design. Features contact management, call history, favorites, and smooth animations for enhanced UX.",
        technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Hilt"],
        stats: { stars: 8, views: "5k+" },
        featured: false,
    },
];

const ProjectCard = ({ project, index }) => {
    const theme = useTheme();
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: isEven ? 'row' : 'row-reverse' },
                    gap: { xs: 3, lg: 6 },
                    alignItems: 'center',
                    mb: { xs: 6, lg: 10 },
                }}
            >
                {/* Image Section */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ flex: 1, width: '100%' }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '16/10',
                            boxShadow: theme.palette.mode === 'dark'
                                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                : '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}20, transparent)`,
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                zIndex: 1,
                            },
                            '&:hover::before': {
                                opacity: 1,
                            },
                        }}
                    >
                        <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            style={{
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease',
                            }}
                            className="project-image"
                        />

                        {/* Overlay on Hover */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.7)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                zIndex: 2,
                                '.project-image': {
                                    transition: 'transform 0.5s ease',
                                },
                                '&:hover': {
                                    opacity: 1,
                                    '.project-image': {
                                        transform: 'scale(1.1)',
                                    },
                                },
                            }}
                        >
                            <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackProjectClick(project.name)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    background: theme.palette.primary.main,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                }}
                            >
                                <ExternalLink size={24} />
                            </motion.a>
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: '50%',
                                    background: theme.palette.mode === 'dark'
                                        ? 'rgba(255,255,255,0.1)'
                                        : 'rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: theme.palette.text.primary,
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <Github size={24} />
                            </motion.a>
                        </Box>

                        {/* Featured Badge */}
                        {project.featured && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 16,
                                    left: 16,
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: '20px',
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    color: '#fff',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    zIndex: 3,
                                }}
                            >
                                Featured
                            </Box>
                        )}
                    </Box>
                </motion.div>

                {/* Content Section */}
                <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            letterSpacing: '2px',
                            fontSize: '0.75rem',
                            mb: 1,
                            display: 'block',
                        }}
                    >
                        Project {String(index + 1).padStart(2, '0')}
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: 'Nunito, sans-serif',
                            fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                    >
                        {project.name}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: '1.125rem',
                            lineHeight: 1.7,
                            mb: 3,
                        }}
                    >
                        {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
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
                                }}
                            />
                        ))}
                    </Box>

                    {/* Stats & Links */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Star size={18} color={theme.palette.primary.main} />
                            <Typography variant="body2" fontWeight={600}>
                                {project.stats.stars}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Eye size={18} color={theme.palette.primary.main} />
                            <Typography variant="body2" fontWeight={600}>
                                {project.stats.views}
                            </Typography>
                        </Box>

                        <Box sx={{ flex: 1 }} />

                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackProjectClick(project.name)}
                            whileHover={{ x: 5 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                color: theme.palette.primary.main,
                                textDecoration: 'none',
                                fontWeight: 600,
                            }}
                        >
                            View Project
                            <ArrowUpRight size={20} />
                        </motion.a>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

const Projects = () => {
    const theme = useTheme();
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <Box
            id="Projects"
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
                        MY WORK
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
                        Featured{' '}
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Projects
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
                        A showcase of my best work, featuring mobile applications
                        and web solutions built with modern technologies.
                    </Typography>
                </motion.div>

                {/* Projects List */}
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} />
                ))}

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <motion.a
                        href="https://github.com/devenvoy"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick('GitHub_ViewAll')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: '16px 32px',
                            borderRadius: '12px',
                            background: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.03)',
                            border: `1px solid ${theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(0, 0, 0, 0.1)'}`,
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                            fontWeight: 600,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <Github size={20} />
                        View All Projects on GitHub
                        <ArrowUpRight size={18} />
                    </motion.a>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Projects;
