import React from 'react';
import { GMail, Map, CopyRight, ArrowRightLong } from '../components/icons/Icons';
import { Link } from 'react-scroll';
import navLinks from '../data/navlinks';
import contactInfo from '../data/contactInfo';
import {
  Box,
  Typography,
  useTheme,
  Grid,
  IconButton,
  Tooltip,
} from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        color: theme.palette.text.secondary,
        width: '100%',
        pt: 5,
      }}
    >
      {/* Main Content Section */}
      <Box className="section" sx={{ pb: 5 }}>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Intro Section */}
          <Grid item xs={12} sm={7} lg={4}>
            <Typography variant="h5" fontWeight="bold" color={theme.palette.text.primary} gutterBottom>
              Devansh Amdavadwala
            </Typography>
            <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main, pb: 2 }}>
              Software Developer
            </Typography>
            <Typography>Thank you for visiting my Personal Portfolio.</Typography>
            <Typography>Let’s connect over socials.</Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={5} lg={3}>
            <Typography variant="h6" color={theme.palette.text.primary} fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            {navLinks.map(({ link, id }) => (
              <Box key={id} sx={{ px: 1, py: 0.5 }}>
                <Link to={link} smooth duration={500}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      cursor: 'pointer',
                      '& span': {
                        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        transition: '0.4s ease',
                      },
                    }}
                  >
                    <ArrowRightLong />
                    <span>{link.toUpperCase()}</span>
                  </Box>
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} lg={4}>
            <Typography variant="h6" color={theme.palette.text.primary} fontWeight="bold" gutterBottom>
              Contact Info
            </Typography>

            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row', lg: 'column' }}
              gap={3}
              justifyContent="space-between"
            >
              <Box fontSize="0.9rem">
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <GMail /> devanshamdavadwala@gmail.com
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Map /> Surat, Gujarat, India
                </Box>
              </Box>

              {/* Contact Icons */}
              <Box display="flex" gap={2}>
                {contactInfo.map(({ id, link, name, icon, download }) => (
                  <Tooltip key={id} title={name} arrow>
                    <IconButton
                      component="a"
                      href={link}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        transition: '0.4s ease',
                        filter: 'grayscale(100%)',
                        '&:hover': {
                          filter: 'grayscale(0%)',
                          transform: 'scale(1.05)',
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    >
                      {icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Copyright */}
      <Box className="section" sx={{ py: 2 }}>
        <Typography
          textAlign="center"
          variant="body2"
          color={theme.palette.text.secondary}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <CopyRight /> All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
