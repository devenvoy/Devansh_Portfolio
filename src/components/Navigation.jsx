import React from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import navLinks from '../data/navlinks';

const Navigation = ({ ulClass, liClass, handleClick }) => {
    const location = useLocation();
    const navigate = useNavigate();

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
                    <li
                        key={id}
                        className={`mx-4 py-2 capitalize font-medium cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-300 ${liClass}`}>
                        {content}
                    </li>
                );
            })}
        </ul>
    );
};

export default Navigation;
