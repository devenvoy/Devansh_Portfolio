'use client';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { 
    Mail, MapPin, Heart, Github, Linkedin, Twitter,
    ArrowUpRight, Code2
} from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#Contact' },
];

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/devenvoy' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/devansh-amdavadwala' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/devansh_dev' },
];

const Footer = () => {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                py: { xs: 6, md: 8 },
                background: theme.palette.mode === 'dark'
                    ? '#000000'
                    : '#ffffff',
                borderTop: `1px solid ${theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.05)'}`,
            }}
        >
            <Container maxWidth="xl">
                {/* Main Footer Content */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        gap: 6,
                        mb: 6,
                    }}
                >
                    {/* Brand Section */}
                    <Box sx={{ flex: 1, maxWidth: 400 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                mb: 2,
                                fontFamily: 'Nunito, sans-serif',
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Portfolio
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                mb: 3,
                                lineHeight: 1.7,
                            }}
                        >
                            A passionate developer crafting exceptional digital experiences. 
                            Let's build something amazing together.
                        </Typography>

                        {/* Contact Info */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <motion.a
                                href="mailto:devanshamdavadwala@gmail.com"
                                whileHover={{ x: 5 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    color: theme.palette.text.secondary,
                                    textDecoration: 'none',
                                }}
                            >
                                <Mail size={18} />
                                <Typography variant="body2">devanshamdavadwala@gmail.com</Typography>
                            </motion.a>
                            <motion.div
                                whileHover={{ x: 5 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    color: theme.palette.text.secondary,
                                }}
                            >
                                <MapPin size={18} />
                                <Typography variant="body2">Surat, Gujarat, India</Typography>
                            </motion.div>
                        </Box>
                    </Box>

                    {/* Quick Links */}
                    <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 } }}>
                        <Box>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: theme.palette.text.primary,
                                    letterSpacing: '1px',
                                }}
                            >
                                NAVIGATION
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {navLinks.map((link) => (
                                    <motion.div key={link.name} whileHover={{ x: 5 }}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: theme.palette.text.secondary,
                                                textDecoration: 'none',
                                                fontSize: '0.9375rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                transition: 'color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = theme.palette.primary.main;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = theme.palette.text.secondary;
                                            }}
                                        >
                                            {link.name}
                                            <ArrowUpRight size={14} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: theme.palette.text.primary,
                                    letterSpacing: '1px',
                                }}
                            >
                                SOCIALS
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        style={{
                                            color: theme.palette.text.secondary,
                                            textDecoration: 'none',
                                            fontSize: '0.9375rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                        }}
                                    >
                                        {social.name}
                                        <ArrowUpRight size={14} />
                                    </motion.a>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Divider */}
                <Box
                    sx={{
                        height: 1,
                        background: `linear-gradient(90deg, transparent, ${theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.1)'}, transparent)`,
                        mb: 4,
                    }}
                />

                {/* Bottom Footer */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                        }}
                    >
                        © {currentYear} Devansh Amdavadwala. Made with
                        <Heart size={14} color="#ef4444" fill="#ef4444" />
                        and
                        <Code2 size={14} color={theme.palette.primary.main} />
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '8px',
                                    background: theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.05)'
                                        : 'rgba(0, 0, 0, 0.03)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: theme.palette.text.secondary,
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = theme.palette.primary.main;
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.05)'
                                        : 'rgba(0, 0, 0, 0.03)';
                                    e.currentTarget.style.color = theme.palette.text.secondary;
                                }}
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
