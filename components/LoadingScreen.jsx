'use client';
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ children }) => {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: theme.palette.background.default,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                    }}
                >
                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                fontFamily: 'Nunito, sans-serif',
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 4,
                            }}
                        >
                            Portfolio
                        </Typography>
                    </motion.div>

                    {/* Progress Bar */}
                    <Box
                        sx={{
                            width: 200,
                            height: 4,
                            borderRadius: 2,
                            background: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        <motion.div
                            style={{
                                height: '100%',
                                borderRadius: 2,
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </Box>

                    {/* Loading Text */}
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 2,
                            color: theme.palette.text.secondary,
                            letterSpacing: '2px',
                        }}
                    >
                        {Math.min(Math.round(progress), 100)}%
                    </Typography>
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
