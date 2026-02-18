'use client';
import { useEffect, useState, useCallback } from 'react';
import { Box, IconButton, useTheme, keyframes } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

// Smooth floating animation
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

// Pulse glow animation
const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3),
                0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5),
                0 0 20px 10px rgba(37, 99, 235, 0);
  }
`;

// Progress ring animation
const rotateProgress = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(270deg);
  }
`;

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const theme = useTheme();

    // Calculate scroll progress (0-100)
    const calculateProgress = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
        setIsVisible(scrollTop > 300);
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    calculateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [calculateProgress]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Circle circumference for progress ring
    const circumference = 2 * Math.PI * 26;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 16, sm: 24, md: 32 },
                right: { xs: 16, sm: 24, md: 32 },
                zIndex: 1000,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 56,
                    height: 56,
                }}
            >
                {/* Background glow effect */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: -4,
                        borderRadius: '50%',
                        background: theme.palette.mode === 'dark'
                            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
                        filter: 'blur(8px)',
                        animation: isVisible ? `${pulseGlow} 2s ease-in-out infinite` : 'none',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                    }}
                />

                {/* Progress Ring SVG */}
                <Box
                    component="svg"
                    viewBox="0 0 60 60"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: 56,
                        height: 56,
                        transform: 'rotate(-90deg)',
                    }}
                >
                    {/* Background circle */}
                    <circle
                        cx="30"
                        cy="30"
                        r="26"
                        fill="none"
                        stroke={theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}
                        strokeWidth="3"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="30"
                        cy="30"
                        r="26"
                        fill="none"
                        stroke={theme.palette.mode === 'dark' ? '#06b6d4' : '#2563eb'}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                            transition: 'stroke-dashoffset 0.1s ease-out',
                            filter: `drop-shadow(0 0 4px ${theme.palette.mode === 'dark' ? '#06b6d4' : '#2563eb'})`,
                        }}
                    />
                </Box>

                {/* Main Button */}
                <IconButton
                    onClick={scrollToTop}
                    sx={{
                        width: 48,
                        height: 48,
                        position: 'absolute',
                        top: 4,
                        left: 4,
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(37, 99, 235, 0.2)'}`,
                        boxShadow: theme.palette.mode === 'dark'
                            ? '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                            : '0 4px 20px rgba(37, 99, 235, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: isVisible ? `${float} 3s ease-in-out infinite` : 'none',
                        '&:hover': {
                            transform: 'scale(1.1) translateY(-2px)',
                            boxShadow: theme.palette.mode === 'dark'
                                ? '0 8px 30px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                                : '0 8px 30px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255,255,255,1)',
                        },
                        '&:active': {
                            transform: 'scale(0.95)',
                        },
                    }}
                    aria-label="Scroll to top"
                >
                    <KeyboardArrowUp
                        sx={{
                            fontSize: 28,
                            color: theme.palette.mode === 'dark' ? '#06b6d4' : '#2563eb',
                            transition: 'transform 0.3s ease',
                            animation: isVisible ? `${float} 3s ease-in-out infinite 0.5s` : 'none',
                        }}
                    />
                </IconButton>

                {/* Percentage indicator */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '10px',
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark' ? '#06b6d4' : '#2563eb',
                        opacity: isVisible ? 0.8 : 0,
                        transition: 'opacity 0.3s ease',
                        fontFamily: theme.typography.fontFamily,
                    }}
                >
                    {Math.round(scrollProgress)}%
                </Box>
            </Box>
        </Box>
    );
};

export default BackToTopButton;
