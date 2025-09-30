import React from 'react';
import { scroller } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import navLinks from '@/data/navlinks';
import ThemeButton from './ThemeButton';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const NavItem = ({ content, liClass, isThemeButton = false }) => {
  const theme = useTheme();

  return (
    <Box
      component="li"
      suppressHydrationWarning
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 2,
        px: 1,
        py: isThemeButton ? 0 : 0.5,
        height: '40px',
        textTransform: 'capitalize',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        // Use theme tokens instead of conditional logic
        color: 'text.secondary',
        borderBottom: isThemeButton ? 'none' : '2px solid transparent',
        '&:hover': !isThemeButton && {
          transform: 'scale(1.15)',
          borderBottomColor: 'text.primary',
          color: 'text.primary',
        },
      }}
      className={liClass}
    >
      {content}
    </Box>
  );
};

const Navigation = ({ ulClass, liClass, handleClick }) => {
  const location = usePathname();
  const navigate = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handleNavClick = (link) => {
    if (link === 'achievements') {
      navigate.push(`${basePath}/achievements`);
      return;
    }

    if (location !== '/') {
      navigate.push('/');
      setTimeout(() => {
        scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50 });
      }, 100);
    } else {
      scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50 });
    }

    if (handleClick) handleClick();
  };

  return (
    <ul className={ulClass}>
      {navLinks.map(({ id, link }) => {
        let content;
        if (id === 7) {
          content = (
            <a target="_blank" rel="noreferrer" href={link}>
              <Typography fontFamily="Nunito">{link}</Typography>
            </a>
          );
        } else if (link === 'achievements') {
          content = (
            <Link href={`${basePath}/achievements`} passHref>
              <Typography
                component="span"
                fontFamily="Nunito"
                onClick={() => {
                  handleClick?.();
                  handleNavClick(link);
                }}
                sx={{ cursor: 'pointer' }}
              >
                {link}
              </Typography>
            </Link>
          );
        } else {
          content = (
            <Typography
              component="span"
              fontFamily="Nunito"
              onClick={() => handleNavClick(link)}
              sx={{ cursor: 'pointer' }}
            >
              {link}
            </Typography>
          );
        }

        return (
          <NavItem
            key={id}
            content={content}
            liClass={liClass}
          />
        );
      })}

      <NavItem
        content={<ThemeButton />}
        liClass={liClass}
        isThemeButton={true}
      />
    </ul>
  );
};

export default Navigation;