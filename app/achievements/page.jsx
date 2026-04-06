'use client';
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Box,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
    Container,
} from "@mui/material";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowLeft, ChevronLeft, ChevronRight, Trophy, Calendar, MapPin, Award, Sparkles, Home } from "lucide-react";
import { achievementsData } from "@/data/achievements_data";
import Link from "next/link";

// Animated background particles
const FloatingParticles = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-20, -window?.innerHeight || -800],
                        x: [0, (Math.random() - 0.5) * 200],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 8,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                    }}
                    style={{
                        position: 'absolute',
                        bottom: -20,
                        left: `${Math.random() * 100}%`,
                        width: 3 + Math.random() * 4,
                        height: 3 + Math.random() * 4,
                        borderRadius: '50%',
                        background: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981'][i % 5],
                    }}
                />
            ))}
        </Box>
    );
};

// Achievement card component
const AchievementCard = ({ item, index, onImageClick }) => {
    const theme = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const gradients = [
        'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        'linear-gradient(135deg, #06b6d4, #0891b2)',
        'linear-gradient(135deg, #ec4899, #db2777)',
        'linear-gradient(135deg, #f59e0b, #d97706)',
    ];

    const iconBgs = [
        'rgba(139, 92, 246, 0.15)',
        'rgba(6, 182, 212, 0.15)',
        'rgba(236, 72, 153, 0.15)',
        'rgba(245, 158, 11, 0.15)',
    ];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    background: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.03)'
                        : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    border: `1px solid ${theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.06)'
                        : 'rgba(0, 0, 0, 0.06)'}`,
                    boxShadow: theme.palette.mode === 'dark'
                        ? '0 20px 60px -15px rgba(0, 0, 0, 0.5)'
                        : '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.palette.mode === 'dark'
                            ? '0 30px 80px -20px rgba(139, 92, 246, 0.3)'
                            : '0 30px 80px -20px rgba(0, 0, 0, 0.15)',
                    },
                }}
            >
                {/* Gradient accent bar */}
                <Box
                    sx={{
                        height: 4,
                        background: gradients[index % gradients.length],
                    }}
                />

                <Box sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                        <Box
                            sx={{
                                width: 52,
                                height: 52,
                                borderRadius: '16px',
                                background: iconBgs[index % iconBgs.length],
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Trophy
                                size={24}
                                style={{
                                    background: gradients[index % gradients.length],
                                    WebkitBackgroundClip: 'text',
                                    color: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'][index % 4],
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 800,
                                    fontFamily: 'Nunito, sans-serif',
                                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                                    mb: 0.5,
                                    background: gradients[index % gradients.length],
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {item.title}
                            </Typography>
                            {/* Meta badges */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {item.date && (
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            px: 1.5,
                                            py: 0.3,
                                            borderRadius: '20px',
                                            background: theme.palette.mode === 'dark'
                                                ? 'rgba(255,255,255,0.05)'
                                                : 'rgba(0,0,0,0.04)',
                                            fontSize: '0.75rem',
                                            color: theme.palette.text.secondary,
                                        }}
                                    >
                                        <Calendar size={12} />
                                        {item.date}
                                    </Box>
                                )}
                                {item.location && (
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            px: 1.5,
                                            py: 0.3,
                                            borderRadius: '20px',
                                            background: theme.palette.mode === 'dark'
                                                ? 'rgba(255,255,255,0.05)'
                                                : 'rgba(0,0,0,0.04)',
                                            fontSize: '0.75rem',
                                            color: theme.palette.text.secondary,
                                        }}
                                    >
                                        <MapPin size={12} />
                                        {item.location}
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Box>

                    {/* Description */}
                    {item.description && (
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                mb: 2,
                                lineHeight: 1.7,
                                fontSize: { xs: '0.875rem', md: '1rem' },
                            }}
                        >
                            {item.description}
                        </Typography>
                    )}

                    {/* Details */}
                    {item.details?.length > 0 && (
                        <Box sx={{ mb: 3 }}>
                            {item.details.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mb: 0.75,
                                        }}
                                    >
                                        <Award size={14} color={['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'][index % 4]} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme.palette.text.primary,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {point}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    )}

                    {/* Image Gallery */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: item.images.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                                sm: item.images.length <= 2 ? `repeat(${item.images.length}, 1fr)` : 'repeat(3, 1fr)',
                                md: item.images.length <= 3 ? `repeat(${item.images.length}, 1fr)` : 'repeat(4, 1fr)',
                            },
                            gap: 1.5,
                        }}
                    >
                        {item.images.map((imgSrc, imgIdx) => (
                            <motion.div
                                key={imgIdx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + imgIdx * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onImageClick(item.images, imgIdx)}
                                style={{ cursor: 'pointer' }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        aspectRatio: '4/3',
                                        '&:hover .overlay': {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={imgSrc}
                                        alt={`${item.title} - ${imgIdx + 1}`}
                                        loading="lazy"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            transition: 'transform 0.4s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    />
                                    {/* Hover overlay */}
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(0,0,0,0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: '50%',
                                                background: 'rgba(255,255,255,0.2)',
                                                backdropFilter: 'blur(8px)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Sparkles size={20} color="#fff" />
                                        </Box>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

// Lightbox component
const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    const theme = useTheme();

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, onNext, onPrev]);

    if (!images) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 10000,
                    background: 'rgba(0, 0, 0, 0.92)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
            >
                {/* Close button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: { xs: 16, md: 24 },
                        right: { xs: 16, md: 24 },
                        color: '#fff',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(8px)',
                        '&:hover': { background: 'rgba(255,255,255,0.2)' },
                        zIndex: 10001,
                    }}
                >
                    <X size={24} />
                </IconButton>

                {/* Prev button */}
                {images.length > 1 && (
                    <IconButton
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        sx={{
                            position: 'absolute',
                            left: { xs: 8, md: 24 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#fff',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(8px)',
                            '&:hover': { background: 'rgba(255,255,255,0.2)' },
                        }}
                    >
                        <ChevronLeft size={28} />
                    </IconButton>
                )}

                {/* Image */}
                <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentIndex]}
                    alt="Achievement"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        maxWidth: '90vw',
                        maxHeight: '85vh',
                        objectFit: 'contain',
                        borderRadius: 16,
                        cursor: 'default',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    }}
                />

                {/* Next button */}
                {images.length > 1 && (
                    <IconButton
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        sx={{
                            position: 'absolute',
                            right: { xs: 8, md: 24 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#fff',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(8px)',
                            '&:hover': { background: 'rgba(255,255,255,0.2)' },
                        }}
                    >
                        <ChevronRight size={28} />
                    </IconButton>
                )}

                {/* Counter */}
                {images.length > 1 && (
                    <Typography
                        sx={{
                            position: 'absolute',
                            bottom: 24,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            background: 'rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(8px)',
                            px: 2,
                            py: 0.5,
                            borderRadius: '20px',
                        }}
                    >
                        {currentIndex + 1} / {images.length}
                    </Typography>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default function Achievements() {
    const theme = useTheme();
    const [lightboxImages, setLightboxImages] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    const openLightbox = (images, index) => {
        setLightboxImages(images);
        setLightboxIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImages(null);
        setLightboxIndex(0);
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        if (lightboxImages) {
            setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
        }
    };

    const prevImage = () => {
        if (lightboxImages) {
            setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(180deg, #0a0a0a 0%, #0f0f2d 30%, #000 100%)'
                    : 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 30%, #f0f9ff 60%, #faf5ff 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <FloatingParticles />

            {/* Back to Home FAB */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                style={{
                    position: 'fixed',
                    top: 24,
                    left: 24,
                    zIndex: 100,
                }}
            >
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '16px',
                                background: theme.palette.mode === 'dark'
                                    ? 'rgba(255,255,255,0.08)'
                                    : 'rgba(255,255,255,0.9)',
                                backdropFilter: 'blur(16px)',
                                border: `1px solid ${theme.palette.mode === 'dark'
                                    ? 'rgba(255,255,255,0.1)'
                                    : 'rgba(0,0,0,0.08)'}`,
                                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: theme.palette.text.primary,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: theme.palette.mode === 'dark'
                                        ? 'rgba(139, 92, 246, 0.2)'
                                        : 'rgba(139, 92, 246, 0.1)',
                                    borderColor: 'rgba(139, 92, 246, 0.3)',
                                },
                            }}
                        >
                            <Home size={22} />
                        </Box>
                    </motion.div>
                </Link>
            </motion.div>

            {/* Hero Section */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    ref={heroRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '40px' }}
                >
                    {/* Easter egg badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2.5,
                                py: 0.75,
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                mb: 3,
                            }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Sparkles size={16} color="#f59e0b" />
                            </motion.div>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: '#8b5cf6',
                                    fontWeight: 700,
                                    letterSpacing: '1.5px',
                                    fontSize: '0.7rem',
                                }}
                            >
                                YOU FOUND THE SECRET PAGE
                            </Typography>
                            <motion.div
                                animate={{ rotate: [0, -15, 15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Sparkles size={16} color="#f59e0b" />
                            </motion.div>
                        </Box>
                    </motion.div>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                            fontWeight: 900,
                            fontFamily: 'Nunito, sans-serif',
                            lineHeight: 1.1,
                            mb: 2,
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
                                backgroundSize: '200% auto',
                                animation: 'gradientShift 4s ease infinite',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                '@keyframes gradientShift': {
                                    '0%, 100%': { backgroundPosition: '0% center' },
                                    '50%': { backgroundPosition: '100% center' },
                                },
                            }}
                        >
                            Achievements
                        </Box>
                        <br />
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.text.primary,
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                                fontWeight: 700,
                            }}
                        >
                            & Gallery
                        </Box>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 550,
                            mx: 'auto',
                            fontSize: { xs: '0.95rem', md: '1.125rem' },
                            lineHeight: 1.7,
                            mb: 2,
                        }}
                    >
                        A collection of milestones, hackathon victories, and certificates 
                        that shaped my journey as a developer.
                    </Typography>

                    {/* Scroll hint */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ marginTop: 16 }}
                    >
                        <Box
                            sx={{
                                width: 28,
                                height: 44,
                                borderRadius: '14px',
                                border: `2px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
                                mx: 'auto',
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
                                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                }}
                            />
                        </Box>
                    </motion.div>
                </motion.div>

                {/* Achievement Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 }, pb: 10 }}>
                    {achievementsData.map((item, index) => (
                        <AchievementCard
                            key={index}
                            item={item}
                            index={index}
                            onImageClick={openLightbox}
                        />
                    ))}
                </Box>

                {/* Footer message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                            pb: 6,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                opacity: 0.6,
                                fontStyle: 'italic',
                            }}
                        >
                            🎯 More achievements loading as the journey continues...
                        </Typography>
                    </Box>
                </motion.div>
            </Container>

            {/* Lightbox */}
            {lightboxImages && (
                <Lightbox
                    images={lightboxImages}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </Box>
    );
}