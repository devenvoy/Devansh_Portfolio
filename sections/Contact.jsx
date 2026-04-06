'use client';
import { useRef, useCallback, useState } from 'react';
import { Box, Typography, Container, TextField, Button, useTheme, IconButton } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import {
    Send, Mail, MapPin, Phone, Github, Linkedin,
    ArrowRight, Sparkles, CheckCircle, Eye, EyeOff
} from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import useContactForm, { MESSAGE_MAX_LENGTH } from '../hooks/useContactForm';
import { trackContactReveal, trackSocialClick, trackFormSubmit, trackSectionView } from '../lib/analytics';

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'devanshamdavadwala@gmail.com', masked: 'dev•••@gmail.com', href: 'mailto:devanshamdavadwala@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Gujarat, India', masked: '••••, India', href: '#' },
    { icon: Phone, label: 'Phone', value: '+91 94295 09806', masked: '+91 •••••  •••••', href: 'tel:+919429509806' },
];

const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/devenvoy' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/devansh-a-bb104524a' },
];

const Contact = () => {
    const theme = useTheme();
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const isFormInView = useInView(formRef, { once: true });

    const { formData, isSubmitting, isSubmitted, isError, updateField, handleSubmit } = useContactForm();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = useCallback(() => {
        const newState = !showDetails;
        setShowDetails(newState);
        if (newState) {
            trackContactReveal('all');
        }
    }, [showDetails]);

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!executeRecaptcha) return;
        const token = await executeRecaptcha('contact_form');
        handleSubmit(e, token);
        trackFormSubmit(true);
    }, [executeRecaptcha, handleSubmit]);

    return (
        <Box
            id="Contact"
            sx={{
                py: { xs: 8, md: 12 },
                minHeight: '100vh',
                width: '100%',
                background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)'
                    : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Decorative Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '-10%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    display: { xs: 'none', md: 'block' },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.main}10 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    display: { xs: 'none', md: 'block' },
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2.5rem' }}
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
                        GET IN TOUCH
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
                            fontWeight: 800,
                            mb: 3,
                            fontFamily: 'Nunito, sans-serif',
                        }}
                    >
                        Let's Work{' '}
                        <Box
                            component="span"
                            sx={{
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Together
                        </Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: { xs: '0.95rem', md: '1.125rem' },
                        }}
                    >
                        Have a project in mind? Let's create something amazing together.
                        I'm always open to discussing new projects and opportunities.
                    </Typography>
                </motion.div>

                <motion.div
                    ref={formRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Main CTA Card */}
                    <Box
                        sx={{
                            maxWidth: 900,
                            mx: 'auto',
                            p: { xs: 3, md: 6 },
                            borderRadius: '32px',
                            background: theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.02)'
                                : 'rgba(255, 255, 255, 0.9)',
                            border: `1px solid ${theme.palette.mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.05)'}`,
                            boxShadow: theme.palette.mode === 'dark'
                                ? '0 40px 80px -20px rgba(0, 0, 0, 0.5)'
                                : '0 40px 80px -20px rgba(0, 0, 0, 0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Sparkle Icon */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 24,
                                right: 24,
                                color: theme.palette.primary.main,
                                animation: 'sparkle 2s ease-in-out infinite',
                                '@keyframes sparkle': {
                                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                                    '50%': { opacity: 0.5, transform: 'scale(1.2)' },
                                },
                            }}
                        >
                            <Sparkles size={32} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
                            {/* Left Side - Info */}
                            <Box sx={{ flex: 1 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        fontFamily: 'Nunito, sans-serif',
                                    }}
                                >
                                    Ready to start?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mb: 4,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Whether you need a mobile app, web application, or
                                    consultation, I'm here to help bring your vision to life.
                                </Typography>

                                {/* Contact Info */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                                    {contactInfo.map((item) => (
                                        <motion.a
                                            key={item.label}
                                            href={showDetails ? item.href : undefined}
                                            onClick={!showDetails ? (e) => { e.preventDefault(); toggleDetails(); } : undefined}
                                            whileHover={{ x: 5 }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12,
                                                color: theme.palette.text.primary,
                                                textDecoration: 'none',
                                                cursor: showDetails ? 'pointer' : 'pointer',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: '12px',
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
                                            <Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    {item.label}
                                                </Typography>
                                                <Typography variant="body2" fontWeight={600} sx={{
                                                    filter: showDetails ? 'none' : 'blur(4px)',
                                                    transition: 'filter 0.3s ease',
                                                    userSelect: showDetails ? 'auto' : 'none',
                                                }}>
                                                    {showDetails ? item.value : item.masked}
                                                </Typography>
                                            </Box>
                                        </motion.a>
                                    ))}
                                </Box>

                                {/* Social Links */}
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: '12px',
                                                background: theme.palette.mode === 'dark'
                                                    ? 'rgba(255, 255, 255, 0.05)'
                                                    : 'rgba(0, 0, 0, 0.03)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: theme.palette.text.primary,
                                                border: `1px solid ${theme.palette.mode === 'dark'
                                                    ? 'rgba(255, 255, 255, 0.1)'
                                                    : 'rgba(0, 0, 0, 0.08)'}`,
                                            }}
                                        >
                                            <social.icon size={22} />
                                        </motion.a>
                                    ))}
                                    <Box sx={{ flex: 1 }} />
                                    <IconButton
                                        onClick={toggleDetails}
                                        size="small"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            background: theme.palette.mode === 'dark'
                                                ? 'rgba(6, 182, 212, 0.1)'
                                                : 'rgba(37, 99, 235, 0.1)',
                                            '&:hover': {
                                                background: theme.palette.mode === 'dark'
                                                    ? 'rgba(6, 182, 212, 0.2)'
                                                    : 'rgba(37, 99, 235, 0.2)',
                                            },
                                        }}
                                    >
                                        {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Right Side - Form */}
                            <Box sx={{ flex: 1 }}>
                                <form onSubmit={onSubmit}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <TextField
                                            fullWidth
                                            name="name"
                                            label="Your Name"
                                            value={formData.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                            required
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '12px',
                                                    background: theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.03)'
                                                        : 'rgba(0, 0, 0, 0.02)',
                                                },
                                            }}
                                        />
                                        <TextField
                                            fullWidth
                                            type="email"
                                            name="email"
                                            label="Your Email"
                                            value={formData.email}
                                            onChange={(e) => updateField('email', e.target.value)}
                                            required
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '12px',
                                                    background: theme.palette.mode === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.03)'
                                                        : 'rgba(0, 0, 0, 0.02)',
                                                },
                                            }}
                                        />
                                        <Box>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                name="message"
                                                label="Your Message"
                                                value={formData.message}
                                                onChange={(e) => updateField('message', e.target.value)}
                                                required
                                                variant="outlined"
                                                inputProps={{ maxLength: MESSAGE_MAX_LENGTH }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '12px',
                                                        background: theme.palette.mode === 'dark'
                                                            ? 'rgba(255, 255, 255, 0.03)'
                                                            : 'rgba(0, 0, 0, 0.02)',
                                                    },
                                                }}
                                            />
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    display: 'block',
                                                    textAlign: 'right',
                                                    mt: 0.5,
                                                    color: formData.message.length >= MESSAGE_MAX_LENGTH
                                                        ? '#ef4444'
                                                        : theme.palette.text.secondary,
                                                }}
                                            >
                                                {formData.message.length} / {MESSAGE_MAX_LENGTH}
                                            </Typography>
                                        </Box>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                type="submit"
                                                fullWidth
                                                disabled={isSubmitting || isSubmitted}
                                                sx={{
                                                    py: 2,
                                                    borderRadius: '12px',
                                                    fontSize: '1rem',
                                                    fontWeight: 600,
                                                    textTransform: 'none',
                                                    background: isSubmitted
                                                        ? '#10b981'
                                                        : isError
                                                            ? '#ef4444'
                                                            : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                    color: '#fff',
                                                    boxShadow: `0 10px 30px -10px ${theme.palette.primary.main}50`,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        boxShadow: `0 20px 40px -15px ${theme.palette.primary.main}60`,
                                                    },
                                                }}
                                                startIcon={isSubmitted ? <CheckCircle /> : isSubmitting ? null : <Send />}
                                            >
                                                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : isError ? 'Failed to send. Try again.' : 'Send Message'}
                                            </Button>
                                        </motion.div>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: 'block',
                                                textAlign: 'center',
                                                mt: 1.5,
                                                color: theme.palette.text.secondary,
                                                opacity: 0.6,
                                                fontSize: '0.7rem',
                                            }}
                                        >
                                            Protected by reCAPTCHA.{' '}
                                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Privacy</a>
                                            {' · '}
                                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Terms</a>
                                        </Typography>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Box>

                    {/* Quick Action Banner */}
                    <Box
                        sx={{
                            mt: 6,
                            p: { xs: 3, md: 4 },
                            borderRadius: '24px',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            textAlign: 'center',
                            color: '#fff',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Animated Background */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                                opacity: 0.5,
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                fontFamily: 'Nunito, sans-serif',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            Prefer a quick chat?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 3,
                                opacity: 0.9,
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            Schedule a free 15-minute consultation to discuss your project
                        </Typography>
                        <motion.a
                            href="https://calendly.com/devansh"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '12px 32px',
                                borderRadius: '12px',
                                background: '#fff',
                                color: theme.palette.primary.main,
                                textDecoration: 'none',
                                fontWeight: 600,
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            Schedule a Call
                            <ArrowRight size={20} />
                        </motion.a>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Contact;
