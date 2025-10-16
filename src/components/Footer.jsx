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
} from '@mui/material';
import { scroller } from 'react-scroll';

const Footer = () => {
  const theme = useTheme();
  const navigate = useRouter();

  const handleNavClick = (link) => {
    if (link === 'achievements') {
      navigate.push('/achievements');
      return;
    }

    if (location !== '/') {
      navigate.push('/');
      setTimeout(() => {
        scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50, });
      }, 200);
    } else {
      scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50, });
    }
  };

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
      <Box className="section" sx={{ pb: 5 }}>
        <Grid container spacing={4} justifyContent="space-between">

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
                <Box
                  onClick={() => { handleNavClick(link); }}
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
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <GMail /> devanshamdavadwala@gmail.com
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Map /> Surat, Gujarat, India
                </Box>
              </Box>

              {/* Contact Icons */}
              <Box display="flex" gap={2}>
                {contactInfo.map(({ id, link, name, icon, download }) => {
                  const Icon = icon;
                  return <Tooltip key={id} title={name} arrow>
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
                      <Icon color={theme.palette.text.primary} />
                    </IconButton>
                  </Tooltip>
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Copyright */}
      <Box className="section" sx={{ py: 3, borderTop: 1, borderColor: 'divider' }}>
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
