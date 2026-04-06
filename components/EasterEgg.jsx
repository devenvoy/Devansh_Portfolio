'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, ArrowRight, X } from 'lucide-react';

const EasterEgg = () => {
    const theme = useTheme();
    const pathname = usePathname();
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const overscrollCount = useRef(0);
    const lastScrollTime = useRef(0);
    const isAtBottom = useRef(false);
    const autoHideTimer = useRef(null);

    // Don't render on achievements page
    if (pathname === '/achievements') return null;

    const TRIGGER_COUNT = typeof window !== 'undefined' && localStorage.getItem('easter_egg_found')
        ? 2
        : 5;

    const handleShow = useCallback(() => {
        setShow(true);
        setDismissed(false);
        // Remember discovery
        if (typeof window !== 'undefined') {
            localStorage.setItem('easter_egg_found', 'true');
        }
        // Auto-hide after 12 seconds
        autoHideTimer.current = setTimeout(() => {
            setShow(false);
        }, 12000);
    }, []);

    const handleDismiss = useCallback(() => {
        setDismissed(true);
        setShow(false);
        overscrollCount.current = 0;
        if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const now = Date.now();
            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const distanceFromBottom = scrollHeight - clientHeight - scrollTop;

            // Check if user is at the very bottom (within 5px tolerance)
            const atBottom = distanceFromBottom <= 5;

            if (atBottom) {
                if (!isAtBottom.current) {
                    // Just arrived at bottom
                    isAtBottom.current = true;
                }
            } else {
                isAtBottom.current = false;
            }
        };

        const handleWheel = (e) => {
            if (show || dismissed) return;

            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const distanceFromBottom = scrollHeight - clientHeight - scrollTop;

            // User is at the bottom and trying to scroll further down
            if (distanceFromBottom <= 5 && e.deltaY > 0) {
                const now = Date.now();
                // Count only if the scrolls are within 2 seconds of each other
                if (now - lastScrollTime.current < 2000) {
                    overscrollCount.current += 1;
                } else {
                    overscrollCount.current = 1;
                }
                lastScrollTime.current = now;

                if (overscrollCount.current >= TRIGGER_COUNT) {
                    handleShow();
                    overscrollCount.current = 0;
                }
            }
        };

        // Touch overscroll for mobile
        let touchStartY = 0;
        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (show || dismissed) return;

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY; // positive = scrolling down

            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const distanceFromBottom = scrollHeight - clientHeight - scrollTop;

            if (distanceFromBottom <= 5 && deltaY > 20) {
                const now = Date.now();
                if (now - lastScrollTime.current < 2000) {
                    overscrollCount.current += 1;
                } else {
                    overscrollCount.current = 1;
                }
                lastScrollTime.current = now;
                touchStartY = touchY;

                if (overscrollCount.current >= TRIGGER_COUNT) {
                    handleShow();
                    overscrollCount.current = 0;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
        };
    }, [show, dismissed, handleShow, TRIGGER_COUNT]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 200, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 200, opacity: 0, scale: 0.8 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                    style={{
                        position: 'fixed',
                        bottom: 32,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 2.5, sm: 3 },
                            borderRadius: '24px',
                            background: theme.palette.mode === 'dark'
                                ? 'rgba(15, 15, 35, 0.95)'
                                : 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(24px) saturate(180%)',
                            border: `1px solid ${theme.palette.mode === 'dark'
                                ? 'rgba(139, 92, 246, 0.3)'
                                : 'rgba(139, 92, 246, 0.2)'}`,
                            boxShadow: theme.palette.mode === 'dark'
                                ? '0 25px 60px -12px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
                                : '0 25px 60px -12px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)',
                            maxWidth: 380,
                            width: '90vw',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Animated gradient border glow */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: -1,
                                borderRadius: '25px',
                                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4, #ec4899, #8b5cf6)',
                                backgroundSize: '300% 300%',
                                animation: 'borderGlow 4s ease infinite',
                                zIndex: -1,
                                '@keyframes borderGlow': {
                                    '0%, 100%': { backgroundPosition: '0% 50%' },
                                    '50%': { backgroundPosition: '100% 50%' },
                                },
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 1,
                                borderRadius: '23px',
                                background: theme.palette.mode === 'dark'
                                    ? 'rgba(15, 15, 35, 0.98)'
                                    : 'rgba(255, 255, 255, 0.98)',
                                zIndex: -1,
                            }}
                        />

                        {/* Dismiss button */}
                        <Box
                            component="button"
                            onClick={handleDismiss}
                            sx={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                border: 'none',
                                background: theme.palette.mode === 'dark'
                                    ? 'rgba(255,255,255,0.08)'
                                    : 'rgba(0,0,0,0.06)',
                                color: theme.palette.text.secondary,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s',
                                '&:hover': {
                                    background: theme.palette.mode === 'dark'
                                        ? 'rgba(255,255,255,0.15)'
                                        : 'rgba(0,0,0,0.1)',
                                },
                            }}
                        >
                            <X size={14} />
                        </Box>

                        {/* Content */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            {/* Icon */}
                            <motion.div
                                animate={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 52,
                                        height: 52,
                                        borderRadius: '16px',
                                        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        boxShadow: '0 8px 24px rgba(139, 92, 246, 0.4)',
                                    }}
                                >
                                    <Trophy size={26} color="#fff" />
                                </Box>
                            </motion.div>

                            {/* Text */}
                            <Box sx={{ flex: 1, pr: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                                    <Sparkles size={14} color="#f59e0b" />
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#f59e0b',
                                            fontWeight: 700,
                                            letterSpacing: '1px',
                                            fontSize: '0.65rem',
                                        }}
                                    >
                                        SECRET UNLOCKED
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: 'Nunito, sans-serif',
                                        mb: 0.5,
                                        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    You found a hidden treasure!
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.4,
                                        display: 'block',
                                        mb: 1.5,
                                    }}
                                >
                                    Curious minds deserve rewards. Check out my achievements & gallery.
                                </Typography>

                                {/* CTA */}
                                <motion.a
                                    href="/achievements"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        padding: '8px 20px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontSize: '0.8125rem',
                                        fontWeight: 600,
                                        boxShadow: '0 6px 20px rgba(139, 92, 246, 0.35)',
                                        transition: 'box-shadow 0.3s',
                                    }}
                                >
                                    Explore
                                    <ArrowRight size={16} />
                                </motion.a>
                            </Box>
                        </Box>

                        {/* Floating particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [-20, -60 - Math.random() * 40],
                                    x: [0, (Math.random() - 0.5) * 60],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    repeatDelay: Math.random() * 2,
                                }}
                                style={{
                                    position: 'absolute',
                                    bottom: 10 + Math.random() * 20,
                                    left: 20 + (i * 60),
                                    width: 4 + Math.random() * 4,
                                    height: 4 + Math.random() * 4,
                                    borderRadius: '50%',
                                    background: ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#3b82f6'][i],
                                    pointerEvents: 'none',
                                }}
                            />
                        ))}
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EasterEgg;
