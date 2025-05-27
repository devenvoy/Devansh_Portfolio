import React from "react";
import { Box, Typography, useTheme, Grid, Paper } from "@mui/material";
import skills from "../data/skills";
import Skill from "../components/Skill";

const Skills = () => {
  const theme = useTheme();

  return (
    <Box
      id="Skills"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(to bottom, ${theme.palette.grey[600]}, ${theme.palette.background.paper})`,
        borderRadius: 3,
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Box sx={{ width: '100%' }}>
        {/* Section Heading */}
        <Box sx={{ pb: 2, pt: { xs: 4, md: 0 } }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.common.white,
              fontWeight: 600,
              mb: 1,
            }}
          >
            My Tech Stack ~
          </Typography>
        </Box>

        {/* Skills Container */}
        <Paper
          elevation={3}
          sx={{
            // backgroundColor: theme.palette.grey[900],
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            columns={{ xs: 6, sm: 12, md: 17 }}
          >
            {skills.map((skill, index) => (
              <Grid
              size={{
                xs:3,
                sm:4,
                md:4,
                lg:3.33,
                xl:3.33
              }}
                
                key={index}
              >
                <Skill skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Skills;
