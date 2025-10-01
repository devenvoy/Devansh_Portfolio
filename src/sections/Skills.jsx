// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Box, Typography, useTheme } from '@mui/material';
import skills from '../data/skills'; // your skill list
import Skill from "../components/Skill";

const Skills = () => {
  const theme = useTheme();
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  return (
    <Box
      id="Skills"
      sx={{
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        py: 6,
        background: `${theme.palette.background[500]}`,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.light,
          textAlign: 'center',
          fontWeight: 700,
          mb: 4,
        }}
      >
        My Tech Stack
      </Typography>

      <SkillsRow skills={row1} direction="left" />
      <SkillsRow skills={row2} direction="right" />
    </Box>
  );
};

export default Skills;

const SkillsRow = ({ skills, direction = 'left' }) => {
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          animation: `${animationName} 40s linear infinite`,
          width: 'fit-content',
          // Add keyframes directly in sx
          '@keyframes marquee-left': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
          '@keyframes marquee-right': {
            '0%': {
              transform: 'translateX(-50%)',
            },
            '100%': {
              transform: 'translateX(0)',
            },
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              width: { xs: 120, sm: 140, md: 180 },
              height: { xs: 120, sm: 140, md: 180 },
            }}
          >
            <Skill skill={skill} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};