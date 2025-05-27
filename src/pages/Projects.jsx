import React from 'react'
import ProjectDetails from '../components/Project-detail'
import personalProjects from '../data/projects'
import { Box, useTheme } from '@mui/material'

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
                <h2 className="text-3xl font-bold text-start mb-8 text-gray-300">Check Out Some of my Projects</h2>
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
