import React from 'react'
import { Download } from '../components/icons/Icons';
import resume from "../assets/resume.pdf";
import SectionHeading from '../components/SectionHeading';
import Skills from './Skills';

const About = () => {
    return (
        <>
            <div id='About' className=' pt-8 h-full min-h-screen w-full flex items-center  bg-gradient-to-b  from-gray-900 via-black to-black '>
                <div className='section justify-between'>
                    <SectionHeading heading="About Me" />
                    <div className='mb-10  flex flex-col justify-center '>
                    </div>
                    <div className='flex flex-col justify-center w-full px-2 xs: sm:px-12 md:px-4 lg:px-14 text-white '>
                        <h3 className='text-2xl xs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold '>Hi, I'm <span className='text-cyan-500 block xs:inline'>Devansh Amdavadwala</span></h3>
                        <div className='text-gray-400 py-4 space-y-2 md:space-y-4 md:pt-8 lg:pt-12 font-semibold text-justify'>
                            <p className='leading-tight'>
                                I am an Android Developer with a passion for creating robust, efficient, and user-friendly mobile applications that deliver real-world impact.
                            </p>
                            <p className='leading-tight'>
                                With hands-on experience in Java and Kotlin, I specialize in building modern Android apps using Jetpack Compose, MVVM architecture, and Clean Architecture principles. I’ve worked extensively with SharedPreferences, Room Database, and Retrofit,ktor for seamless local and network data handling.
                            </p>
                            <p className='leading-tight'>
                                I have integrated Firebase services for real-time updates and authentication, and utilized Coroutines for smooth, asynchronous operations. My development process is enhanced by Dependency Injection using Hilt, koin and the adoption of external libraries to accelerate and enrich app features.
                            </p>
                            <p className='leading-tight'>
                                I enjoy solving complex challenges, exploring the latest tools in Android development, and delivering apps that are optimized, scalable, and easy to maintain.
                            </p>
                            <p className='leading-tight'>
                                My focus is on building apps with clean code, modern UI using Compose, and delivering high-quality software on time and within scope.
                            </p>
                        </div>
                        <div className='py-5'>
                            <a href={resume} target="_blank" rel="noreferrer" download={true} className='z-30  group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-36 relative'>
                                <span className='pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out'>Resume</span>
                                <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500 ">
                                    <Download />
                                </span>
                            </a>
                        </div>
                    </div>
                    <Skills />
                </div>
            </div>
        </>
    )
}


export default About;