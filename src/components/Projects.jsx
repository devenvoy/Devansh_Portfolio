import React from 'react'
import Project from './Project'
import personalProjects from '../data/projects'
import GridLayout from './GridLayout'
const Projects = () => {
    return (
        <div id="Projects" className='pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-b from-gray-900 via-black to-black text-white'>
            <div className='section'>
                <h2 className="text-3xl font-bold text-start mb-8 text-gray-300">Check Out Some of my Projects</h2>
                <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3 ">
                    {personalProjects.map((project) => {
                        return (
                            <Project key={project.name} project={project} />
                        )
                    })}

                </GridLayout>
            </div>
        </div>
    )
}

export default Projects
