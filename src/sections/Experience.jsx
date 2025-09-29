import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  useTheme,
  Link,
  Grid,
} from '@mui/material';
import AOS from 'aos';
import { useEffect } from 'react';

const experiences = [
  {
    company: "Argon IT Services LLP",
    position: "Mobile Software Developer",
    link: "https://www.argonitservices.com/",
    duration: "May 2024 - Present",
    description: "Worked as an Android Developer using Kotlin and Java to build scalable and high-performing mobile applications from scratch. Contributed to designing and implementing responsive user interfaces while ensuring seamless user experience and smooth performance. Gained expertise in modern mobile application development practices, collaborating with the team to deliver robust digital solutions.",
    skills: ["Kotlin", "Android", "Compose", "Kotlin/Compose Multiplatform", "Firebase", "Retrofit/ktor", "Room", "Dagger Hilt/Koin"]
  },
];

function ExperienceSection() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      id="experience"
      sx={{
        pt: 10,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
          px: 2,
          maxWidth: { xs: 1200, md: 'auto' },
        }}
      >
        <Typography variant="h4" fontWeight="bold"
          textAlign='center' color="text.secondary" mb={4}>
          Professional Experience
        </Typography>

        <Grid container columns={1}>
          {experiences.map((exp, index) => (
            <Grid size={{ xs: 1 }} key={index} data-aos="fade-up">
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <Box sx={{ backgroundColor: theme.palette.primary.main, color: '#fff', p: 2 }}>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>&#128188;</span>
                    <Link href={exp.link} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
                      {exp.company}
                    </Link>
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {exp.position}
                  </Typography>
                </Box>

                <CardContent>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {exp.duration}
                  </Typography>
                  <Typography variant="body2" color="text.primary" mb={2}>
                    {exp.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill, i) => (
                      <Chip key={i} label={skill} size="small" sx={{ backgroundColor: theme.palette.default }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ExperienceSection;
