import React from 'react'
import ProjectDetails from '../components/Project-detail'
import personalProjects from '../data/projects'
import { Box, useTheme,Typography } from '@mui/material'

const Projects = () => {
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
                background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default}, ${theme.palette.background.default})`,
            }}>
            <div className='section'>
                <Typography variant="h4" fontWeight="bold"
                    textAlign='center' color="text.secondary" mb={4}>
                    Check Out Some of my Projects
                </Typography>
                {personalProjects.map((project, index) => {
                    return (
                        <ProjectDetails
                            key={index}
                            project={project}
                            layoutType={index % 2 === 0 ? 'default' : 'reverse'}
                        />
                    )
                })}
            </div>
        </Box>
    )
}

export default Projects
