import { Box, useTheme } from '@mui/material';
import React from 'react';

const experiences = [
  {
    company: "Argon IT Services LLP",
    position: "Mobile Software Developer",
    link: "https://www.argonitservices.com/",
    duration: "May 2024 - Present",
    description: "Worked as a Android Developer using Kotlin and Java to build scalable and high-performing Mobile applications from scratch. Contributed to designing and implementing responsive user interfaces while ensuring seamless user experience and smooth performance. Gained expertise in modern mobile appplication development practices, collaborating with the team to deliver robust digital solutions.",
    skills: ["Kotlin", "Android", "Compose", "Kotlin/Compose Multiplatform", "Firebase", "Retrofit/ktor", "Room", "Dagger Hilt/Koin"]
  },
];

function ExperienceSection() {
  const theme = useTheme();
  return (
    <Box id="experience"
      sx={{
        paddingTop: 10,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#c0c0c0c',
        background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
      }}>
      <div className='section'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-start mb-8 text-gray-300">Professional Experience</h2>
          <div className="grid gap-6 md:grid-row">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="bg-blue-500 text-white p-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="mr-2">&#128188;</span>
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className='hover:underline' >{exp.company}</a>
                  </h3>
                  <p className="text-sm mt-1 opacity-90">{exp.position}</p>
                </div>
                <div className="p-4 flex-grow">
                  <p className="text-sm text-gray-600 mb-2">{exp.duration}</p>
                  <p className="text-sm text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ExperienceSection;