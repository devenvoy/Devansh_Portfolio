import React from 'react';
import { Card, Box, Typography, useTheme } from '@mui/material';

const Skill = ({ skill: { style, name, icon } }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${style.bgStart}, ${style.bgEnd})`,
        borderRadius: 3,
        boxShadow: `0 0 10px ${style.shadowColor}`,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 0 25px ${style.shadowColor}`,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 3,
        px: 2,
      }}
    >
      <Box sx={{ color: theme.palette.primary.main }}>{icon}</Box>
      <Typography
        variant="subtitle2"
        sx={{
          mt: 1,
          color: theme.palette.text.primary,
          fontWeight: 500,
          textAlign: 'center',
          fontSize: { sx: 12, sm: 16, md: 18 },
        }}
      >
        {name}
      </Typography>
    </Card>
  );
};

export default Skill;
