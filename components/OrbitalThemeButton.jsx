'use client'
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MUIWrapperContext } from './layouts/MUIWrapper';
import { IconButton } from "@mui/material";

// Orbital Theme Toggle - Sun and Moon orbit with star field
function OrbitalThemeButton() {
    const { toggleColorMode, mode } = useContext(MUIWrapperContext);
    const isDark = mode === 'dark';

    return (
        <IconButton
            onClick={toggleColorMode}
            sx={{
                position: 'relative',
                width: 56,
                height: 28,
                borderRadius: '14px',
                background: isDark 
                    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
                    : 'linear-gradient(135deg, #87CEEB 0%, #98D8E8 50%, #B0E0E6 100%)',
                overflow: 'hidden',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: isDark 
                        ? '0 0 20px rgba(100, 149, 237, 0.5)' 
                        : '0 0 20px rgba(255, 215, 0, 0.5)',
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: isDark 
                        ? 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)' 
                        : 'none',
                    opacity: isDark ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                },
            }}
            disableRipple
            disableTouchRipple
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Stars - only visible in dark mode */}
            <Stars isDark={isDark} />
            
            {/* Clouds - only visible in light mode */}
            <Clouds isDark={isDark} />
            
            {/* Orbital Container */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: 24,
                    height: 24,
                    left: 4,
                    top: 2,
                }}
                animate={{
                    rotate: isDark ? 180 : 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                }}
            >
                {/* Sun */}
                <motion.div
                    style={{
                        position: 'absolute',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #FFD700, #FFA500)',
                        boxShadow: '0 0 15px rgba(255, 215, 0, 0.6), inset -3px -3px 6px rgba(255, 140, 0, 0.5)',
                        left: 0,
                        top: 2,
                    }}
                    animate={{
                        scale: isDark ? 0 : 1,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.4, delay: isDark ? 0 : 0.2 }}
                >
                    {/* Sun rays */}
                    <SunRays isDark={isDark} />
                </motion.div>
                
                {/* Moon */}
                <motion.div
                    style={{
                        position: 'absolute',
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #F5F5F5, #E0E0E0)',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(150, 150, 150, 0.3)',
                        right: -14,
                        top: 3,
                    }}
                    animate={{
                        scale: isDark ? 1 : 0,
                        opacity: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, delay: isDark ? 0.2 : 0 }}
                >
                    {/* Moon craters */}
                    <MoonCraters isDark={isDark} />
                </motion.div>
            </motion.div>
        </IconButton>
    );
}

// Stars component
function Stars({ isDark }) {
    const starPositions = [
        { x: 45, y: 6, size: 2, delay: 0 },
        { x: 38, y: 18, size: 1.5, delay: 0.1 },
        { x: 50, y: 14, size: 1, delay: 0.2 },
        { x: 42, y: 22, size: 1.2, delay: 0.3 },
    ];

    return (
        <>
            {starPositions.map((star, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: star.size,
                        height: star.size,
                        borderRadius: '50%',
                        background: 'white',
                        left: star.x,
                        top: star.y,
                    }}
                    animate={{
                        scale: isDark ? [1, 1.2, 1] : 0,
                        opacity: isDark ? [0.8, 1, 0.8] : 0,
                    }}
                    transition={{
                        duration: 2,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    );
}

// Clouds component
function Clouds({ isDark }) {
    return (
        <>
            <motion.div
                style={{
                    position: 'absolute',
                    width: 16,
                    height: 8,
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    right: 4,
                    top: 6,
                }}
                animate={{
                    x: isDark ? 20 : 0,
                    opacity: isDark ? 0 : 0.9,
                }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    width: 10,
                    height: 6,
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    right: 12,
                    top: 14,
                }}
                animate={{
                    x: isDark ? 15 : 0,
                    opacity: isDark ? 0 : 0.7,
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
            />
        </>
    );
}

// Sun rays animation
function SunRays({ isDark }) {
    return (
        <motion.div
            style={{
                position: 'absolute',
                inset: -6,
            }}
            animate={{
                rotate: isDark ? 0 : 360,
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: 2,
                        height: 4,
                        background: '#FFD700',
                        borderRadius: '2px',
                        left: '50%',
                        top: -2,
                        transformOrigin: '1px 14px',
                        transform: `rotate(${i * 45}deg)`,
                        opacity: 0.7,
                    }}
                />
            ))}
        </motion.div>
    );
}

// Moon craters
function MoonCraters({ isDark }) {
    return (
        <>
            <motion.div
                style={{
                    position: 'absolute',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'rgba(150, 150, 150, 0.3)',
                    top: 4,
                    left: 5,
                }}
                animate={{ opacity: isDark ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: 'rgba(150, 150, 150, 0.3)',
                    top: 10,
                    left: 10,
                }}
                animate={{ opacity: isDark ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            />
        </>
    );
}

export default OrbitalThemeButton;
