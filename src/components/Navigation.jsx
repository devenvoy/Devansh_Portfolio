import React from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import navLinks from '../data/navlinks';
import ThemeButton from './ThemeButton';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


const Navigation = ({ ulClass, liClass, handleClick }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    const handleNavClick = async (link) => {
        if (link === 'achievements') {
            navigate('/achievements');
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(link, {
                    smooth: true,
                    duration: 500,
                    offset: -50,
                });
            }, 100);
        } else {
            scroller.scrollTo(link, {
                smooth: true,
                duration: 500,
                offset: -50,
            });
        }

        if (handleClick) handleClick();
    };

    return (
        <ul className={ulClass}>
            {navLinks.map(({ id, link }) => {
                let content;
                if (id === 7) {
                    content = (
                        <a target="_blank" rel='noreferrer'>{link}</a>
                    );
                }
                else if (link === 'achievements') {
                    content = (
                        <RouterLink to="/achievements"
                            onClick={() => {
                                handleNavClick(link)
                            }}>
                            {link}
                        </RouterLink>
                    );
                }
                else {
                    content = (
                        <span onClick={() => handleNavClick(link)}>
                            {link}
                        </span>
                    );
                }

                return (
                    <NavItem key={id} content={content} theme={theme} liClass={liClass} />
                );
            })}


            <NavItem id={99} content={<ThemeButton />} theme={theme} liClass={liClass} />
        </ul>
    );
};

export default Navigation;
const NavItem = ({ content, liClass, theme }) => {
    const isIcon = typeof content?.type === 'function' && content.type.name === 'ThemeButton';

    return (
        <Box
            onClick={typeof content === 'function' ? content : undefined}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 2,
                px: 1,
                py: isIcon ? 0 : 0.5,
                height: '40px',
                textTransform: 'capitalize',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
                borderBottom: isIcon ? 'none' : '2px solid transparent',
                '&:hover': !isIcon && {
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
