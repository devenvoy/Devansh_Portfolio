// import React from 'react';
// import { scroller } from 'react-scroll';
// import { usePathname, useRouter } from 'next/navigation';
// import { Link as RouterLink } from 'next/link';
// import navLinks from '@/data/navlinks';
// import ThemeButton from './ThemeButton';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import { Typography } from '@mui/material';


// const Navigation = ({ ulClass, liClass, handleClick }) => {
//     const location = usePathname();
//     const navigate = useRouter();
//     const theme = useTheme();

//     const handleNavClick = async (link) => {
//         if (link === 'achievements') {
//             navigate.push('/achievements');
//             return;
//         }

//         if (location.pathname !== '/') {
//             navigate.replace('/');
//             setTimeout(() => {
//                 scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50, });
//             }, 100);
//         } else {
//             scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50, });
//         }

//         if (handleClick) handleClick();
//     };

//     return (
//         <ul className={ulClass}>
//             {navLinks.map(({ id, link }) => {
//                 let content;
//                 if (id === 7) {
//                     content = (
//                         <a target="_blank" rel='noreferrer'>{link}</a>
//                     );
//                 }
//                 else if (link === 'achievements') {
//                     content = (
//                         <RouterLink href="/achievements">
//                             <Typography onClick={() => { handleClick(); handleNavClick(link); }} fontFamily="Nunito">
//                                 {link}
//                             </Typography>
//                         </RouterLink>
//                     );
//                 }
//                 else {
//                     content = (
//                         <span onClick={() => handleNavClick(link)}>
//                             <Typography fontFamily='Nunito'>
//                                 {link}
//                             </Typography>
//                         </span>
//                     );
//                 }

//                 return (
//                     <NavItem key={id} content={content} theme={theme} liClass={liClass} />
//                 );
//             })}


//             <NavItem id={99} content={<ThemeButton />} theme={theme} liClass={liClass} />
//         </ul>
//     );
// };

// export default Navigation;
// const NavItem = ({ content, liClass, theme }) => {
//     const isIcon = typeof content?.type === 'function' && content.type.name === 'ThemeButton';

//     return (
//         <Box
//             onClick={typeof content === 'function' ? content : undefined}
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 mx: 2,
//                 px: 1,
//                 py: isIcon ? 0 : 0.5,
//                 height: '40px',
//                 textTransform: 'capitalize',
//                 fontWeight: 500,
//                 cursor: 'pointer',
//                 transition: 'all 0.5s ease',
//                 color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
//                 borderBottom: isIcon ? 'none' : '2px solid transparent',
//                 '&:hover': !isIcon && {
//                     transform: 'scale(1.15)',
//                     borderBottomColor: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//                     color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//                 },
//             }}
//             className={liClass}
//         >
//             {content}
//         </Box>
//     );
// };

import React from 'react';
import { scroller } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import navLinks from '@/data/navlinks';
import ThemeButton from './ThemeButton';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const NavItem = ({ content, liClass, theme }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 2,
        px: 1,
        py: 0.5,
        height: '40px',
        textTransform: 'capitalize',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
        borderBottom: '2px solid transparent',
        '&:hover': {
          transform: 'scale(1.15)',
          borderBottomColor: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
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
  const theme = useTheme();

  const handleNavClick = (link) => {
    if (link === 'achievements') {
      navigate.push('/achievements');
      return;
    }

    if (location !== '/') {
      navigate.replace('/');
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
              {link}
            </a>
          );
        } else if (link === 'achievements') {
          content = (
            <Link href="/achievements">
              <Typography
                fontFamily="Nunito"
                onClick={() => {
                  handleClick?.();
                  handleNavClick(link);
                }}
              >
                {link}
              </Typography>
            </Link>
          );
        } else {
          content = (
            <span onClick={() => handleNavClick(link)}>
              <Typography fontFamily="Nunito">{link}</Typography>
            </span>
          );
        }

        return <NavItem key={id} content={content} theme={theme} liClass={liClass} />;
      })}

      <NavItem content={<ThemeButton />} theme={theme} liClass={liClass} />
    </ul>
  );
};

export default Navigation;
