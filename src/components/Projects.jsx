import React from 'react'
import ProjectDetails from './Project-detail'
import personalProjects from '../data/projects'

const Projects = () => {
    return (
        <div id="Projects" className='pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-b from-gray-900 via-black to-black text-white'>
            <div className='section'>
                <h2 className="text-3xl font-bold text-start mb-8 text-gray-300">Check Out Some of my Projects</h2>
                {personalProjects.map((project,index) => {
                        return (
                            <ProjectDetails
                            key={index}
                            project={project}
                            layoutType={index % 2 === 0 ? 'default' : 'reverse'}
                          />
                        )
                    })}
            </div>
        </div>
    )
}

export default Projects
