'use client'
import React, { useEffect } from 'react';
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

const experiences = [
  {
    company: "Argon IT Services LLP",
    position: "Mobile Software Developer",
    link: "https://www.argonitservices.com/",
    duration: "May 2024 - Present",
    description: [
      "Developed and deployed 6+ Android apps using Kotlin and Jetpack Compose, achieving average ratings of 4.6+ stars and 50K+ downloads on Google Play Store.",
      "Reduced app crash rate from 5.8% to 0.7% by implementing comprehensive error handling and automated testing (JUnit,Espresso)",
      "Integrated Firebase Cloud Messaging and Analytics, boosting user engagement by 20% via personalized notifications.",
      "Built RESTful API connections with Retrofit and OkHttp, reducing API response time by 35% using caching strategies.",
      "Collaborated with UI/UX designers to apply Material Design 3 principles, improving user satisfaction scores by 18%.",
      "Automated the CI/CD pipeline using GitHub Actions, reducing deployment time from 1 week to 2 days.",
      "Participated in code reviews and pair programming, identifying and resolving 80+ potential bugs before release."
    ],
    skills: ["Kotlin", "Android", "JetpackCompose", "Kotlin/Compose Multiplatform", "Firebase", "Retrofit/ktor", "Room", "Dagger Hilt/Koin", " Coroutines", "MVVM", "Github", "Postman", "Design Patterns", "Team Collaboration"],
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
                  <ul>
                    {exp.description.map((point, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>
                        <Typography variant="body2" color="text.primary">
                         {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>

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
