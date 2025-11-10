'use client'
import { GMail, Map, CopyRight, ArrowRightLong } from './icons/Icons';
import { useRouter } from 'next/navigation';
import navLinks from '@/data/navlinks';
import contactInfo from '@/data/contactInfo';
import {
  Box,
  Typography,
  useTheme,
  Grid,
  IconButton,
  Tooltip,
  Divider,
  Link,
} from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const navigate = useRouter();

  const visuallyHiddenStyles = {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    whiteSpace: 'nowrap',
    border: 0,
  };


  const onClick = (link) => {
    if (link === 'achievements') {
      navigate.push('/achievements');
      return;
    }
    else
      null
  }

  return (
    <Box
      sx={{
        background: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
        color: theme.palette.text.secondary,
        width: '100%',
        pt: 5,
      }}
    >

      <Divider />
      <Box className="section" sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container spacing={8} >

          <Grid sx={{ xs: 12, sm: 7, lg: 4 }}>
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
          <Grid sx={{ xs: 12, sm: 5, lg: 3 }}>
            <Typography variant="h6" color={theme.palette.text.primary} fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            {navLinks.map(({ link, id }) => (
              <Box key={id} sx={{ px: 1, py: 0.5 }}>
                <a href={link} smooth="true" duration={500}
                  style={{ textDecoration: 'none' }}
                  onClick={() => { onClick(link) }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      cursor: 'pointer',
                      '& span': {
                        background: `linear-gradient(to right, rgb(6, 182, 212), rgb(206, 147, 216))`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        transition: '0.4s ease',
                      },
                    }}
                  >
                    <ArrowRightLong />
                    <span>{link.toUpperCase()}</span>
                  </Box>
                </a>
              </Box>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid sx={{ xs: 12, lg: 4 }}>
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
                {/* Email */}
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <GMail />
                  <Link
                    href="mailto:devanshamdavadwala@gmail.com"
                    underline="none"
                    color="inherit"
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    devanshamdavadwala@gmail.com
                  </Link>
                </Box>

                {/* Location */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <Map /> Surat, Gujarat, India
                </Box>
              </Box>

              {/* Contact Icons */}
              <Box display="flex" gap={2}>
                {contactInfo.map(({ id, link, name, icon, download }) => {
                  const Icon = icon;

                  // External link? Use noopener for security.
                  const isExternal = /^https?:\/\//i.test(link);

                  return (
                    <Tooltip key={id} title={name} arrow describeChild>
                      <IconButton
                        component="a"
                        href={link}
                        // Give the link a discernible name:
                        aria-label={name}                 // ✅ This makes Lighthouse happy
                        download={download}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
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
                        {/* Hide the icon from screen readers so it doesn't get read as "svg" */}
                        <Icon
                          color={theme.palette.text.primary} aria-hidden="true" focusable="false" />
                        {/* Optional: redundant visible name for absolute robustness */}
                        <Box component="span" sx={visuallyHiddenStyles}>
                          {name}
                        </Box>
                      </IconButton>
                    </Tooltip>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Copyright */}
      <Box className="section" sx={{ pt: 3, borderTop: 1, borderColor: 'divider' }}>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            flexWrap: 'wrap'
          }}
        >
          © {new Date().getFullYear()} Devansh Amdavadwala. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
