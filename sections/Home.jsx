'use client'
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from '@/components/icons/Icons.jsx';
import work from '@/data/work.js';
import contactInfo from '@/data/contactInfo.jsx';
import {
    Box,
    Typography,
    useTheme,
} from '@mui/material';
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';


const Home = () => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [theme]);

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

    return (
        <Box
            id="Home"
            sx={{
                minHeight: { xs: '100vh', sm: '100vh', md: '100vh' },
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
            }}
        >
            {/* Container similar to your 'section' class */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    marginX: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    justifyContent: { md: 'space-between' },
                    alignItems: 'center',
                    gap: { xs: 8, md: 2 },
                    px: { xs: 2, md: 4 },
                }}
            >
            
                {/* Avatar container */}
                <Box
                    sx={{
                        flex: { md: '0 0 40%' },
                        maxWidth: { xs: 320, md: 'auto' },
                        width: { xs: '100%', md: 'auto' },
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    data-aos="slide-left"
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: 320,
                            aspectRatio: '1 / 1', // Adjust based on your actual image ratio
                        }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dzbtr3w2l/image/upload/v1759215454/Avatar_lt6zhz.jpg"
                            alt="Devansh Amdavadwala - Full Stack Developer"
                            fill
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 768px) 320px, 320px"
                            style={{
                                objectFit: 'cover',
                                borderRadius: '14px',
                            }}
                            quality={90}
                        />
                    </Box>
                </Box>

                {/* Text + animation + socials */}
                <Box
                    sx={{
                        flex: { md: '0 0 55%', xs: '1 1 100%' },
                        width: '100%',
                        color: theme.palette.text.primary,
                        pl: { xs: 0, sm: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        maxWidth: 420,
                        justifyContent: 'center',
                    }}
                    data-aos="slide-right"
                >
                    <Typography
                        component="h1"
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: 'Nunito',
                            fontSize: { xs: '2.8rem', sm: '3.8rem', lg: '4.0rem' },
                            lineHeight: 1.1,
                        }}
                    >
                        <Box component="span" display="block">
                            Hi There,
                        </Box>
                        <Box component="span" display="block">
                            I'm{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: 'bold',
                                }}
                            >
                                Devansh
                            </Box>
                        </Box>
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 600,
                            fontFamily: 'Nunito',
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            py: 2,
                            minWidth: { xs: '16rem', sm: '25rem' },
                            maxWidth: '26rem',
                        }}
                    >
                        <Box component="span" display={{ xs: 'block', sm: 'inline' }}>
                            I'm an
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.primary.main,
                                paddingLeft: { xs: 0, sm: 1 },
                            }}
                        >
                            <TypeAnimation
                                sequence={work}
                                speed={1}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Box>
                    </Typography>

                    {/* Social icons */}
                    <Box
                        component="ul"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 2, md: 3, lg: 4 },
                            listStyle: 'none',
                            p: 0,
                            m: 0,
                            zIndex: 40,
                            justifyContent: 'flex-start',
                        }}
                    >
                        {contactInfo.map(({ id, link, name, icon, download }) => {
                            const Icon = icon;
                            const isExternal = /^https?:\/\//i.test(link);

                            // If link is missing, render a non-interactive item to avoid a11y issues
                            if (!link) {
                                return (
                                    <Box
                                        component="li"
                                        key={id}
                                        aria-disabled="true"
                                        sx={{
                                            position: 'relative',
                                            width: 32,
                                            height: 32,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            p: 0.5,
                                            filter: 'grayscale(60%)',
                                            opacity: 0.6,
                                        }}
                                    >
                                        <Icon aria-hidden="true" focusable="false" />
                                    </Box>
                                );
                            }

                            return (
                                <Box
                                    component="li"
                                    key={id}
                                    sx={{
                                        position: 'relative',
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: 0.5,
                                        filter: 'grayscale(100%)',
                                        cursor: 'pointer',
                                        transition: 'filter 0.45s ease, transform 0.3s ease, box-shadow 0.2s ease',
                                        '&:hover, &:focus-within, &:active': {
                                            filter: 'grayscale(0%)',
                                            transform: 'scale(1.1)',
                                        },
                                        // keyboard focus ring when the link inside is focused
                                        '&:focus-within': {
                                            boxShadow: `0 0 0 3px ${theme.palette.action.focus}`,
                                            borderRadius: '50%',
                                        },
                                    }}
                                >
                                    <a
                                        href={link}
                                        download={download}
                                        target={isExternal ? '_blank' : undefined}
                                        rel={isExternal ? 'noopener noreferrer' : undefined}
                                        aria-label={name}                           // ✅ discernible name
                                        style={{
                                            color: 'inherit',
                                            display: 'flex',
                                            width: 28,
                                            height: 28,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            outline: 'none',
                                        }}
                                    >
                                        {/* Decorative icon shouldn't be read by SR */}
                                        <Icon 
                                        color={theme.palette.text.primary}aria-hidden="true" focusable="false" />
                                        {/* Redundant hidden text, helpful for some AT and for robustness */}
                                        <span style={visuallyHiddenStyles}>{name}</span>
                                    </a>

                                    {/* Tooltip that appears on hover AND when the link is focused */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: -32,
                                            left: '50%',
                                            transform: 'translateX(-50%) scale(0)',
                                            backgroundColor: theme.palette.background.paper,
                                            color: theme.palette.text.secondary,
                                            fontSize: '0.75rem',
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: 1,
                                            fontFamily: 'Nunito',
                                            whiteSpace: 'nowrap',
                                            transition: 'transform 0.2s ease',
                                            pointerEvents: 'none',
                                            zIndex: 50,
                                            // show on hover or keyboard focus
                                            '.MuiBox-root:hover > &': {
                                                transform: 'translateX(-50%) scale(1)',
                                            },
                                            '.MuiBox-root:focus-within > &': {
                                                transform: 'translateX(-50%) scale(1)',
                                            },
                                        }}
                                    >
                                        {name}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>

                    {/* About Me Button */}
                    <AboutButton />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;


// const AboutButton = () => {
//     return (
//         <a to="#About" smooth="true" duration={500} style={{ textDecoration: 'none' }}>
//             <Box    
//                 className="group"
//                 aria-label="Scroll to About section"
//                 sx={{
//                     position: 'relative',
//                     zIndex: 30,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: 1,
//                     px: 3,
//                     py: 1,
//                     my: 3,
//                     borderRadius: 2,
//                     cursor: 'pointer',
//                     width: '10rem',
//                     background: 'linear-gradient(to bottom right, #22d3ee, #2563eb)',
//                     transition: 'all 0.3s linear 75ms',
//                     overflow: 'hidden',
//                     '&:hover .label': {
//                         transform: 'translateX(-1.25rem)',
//                         transition: 'transform 0.4s ease-out 0.4s',
//                     },
//                     '&:hover .arrow': {
//                         transform: 'translateY(0)',
//                         opacity: 1,
//                         transition: 'transform 0.3s ease-in 0.2s, opacity 0.3s ease-in 0.2s',
//                     },
//                 }}
//             >
//                 <Typography
//                     variant="button"
//                     className="label"
//                     sx={{
//                         pr: { xs: 3, sm: 0 },
//                         color: 'white',
//                         fontWeight: 500,
//                         fontFamily: 'Nunito',
//                         transition: 'transform 0.3s ease',
//                     }}
//                 >
//                     About Me
//                 </Typography>

//                 <Box
//                     className="arrow"
//                     sx={{
//                         position: 'absolute',
//                         right: 20,
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         opacity: 0,
//                         animation: 'arrowPulse 2s infinite',
//                         color: 'white',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         pointerEvents: 'none',
//                     }}
//                 >
//                     <ArrowDown />
//                 </Box>

//                 {/* CSS keyframes injected into the DOM once */}
//                 <style>
//                     {`
//                     @keyframes arrowPulse {
//                         0%, 100% {
//                             transform: translateY(-50%) scale(1);
//                         }
//                         50% {
//                             transform: translateY(-50%) scale(1.15);
//                         }
//                     }
//                 `}
//                 </style>
//             </Box>
//         </a>
//     );
// };

const AboutButton = () => (
    <Box
        component="a"                 // renders a real <a>
        href="/#about"                // <-- crawlable!
        aria-label="Scroll to About section"
        sx={{
            position: 'relative',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            px: 3,
            py: 1,
            my: 3,
            borderRadius: 2,
            cursor: 'pointer',
            width: '10rem',
            background: 'linear-gradient(to bottom right, #22d3ee, #2563eb)',
            transition: 'all 0.3s linear 75ms',
            overflow: 'hidden',
            textDecoration: 'none',
            '&:hover .label': {
                transform: 'translateX(-1.25rem)',
                transition: 'transform 0.4s ease-out 0.4s',
            },
            '&:hover .arrow': {
                transform: 'translateY(0)',
                opacity: 1,
                transition: 'transform 0.3s ease-in 0.2s, opacity 0.3s ease-in 0.2s',
            },
        }}
    >
        <Typography
            variant="button"
            className="label"
            sx={{
                pr: { xs: 3, sm: 0 },
                color: 'white',
                fontWeight: 500,
                fontFamily: 'Nunito',
                transition: 'transform 0.3s ease',
            }}
        >
            About Me
        </Typography>

        <Box
            className="arrow"
            sx={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0,
                animation: 'arrowPulse 2s infinite',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
            }}
        >
            <ArrowDown />
        </Box>

        <style>{`
        @keyframes arrowPulse {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.15); }
        }
      `}</style>
    </Box>
);