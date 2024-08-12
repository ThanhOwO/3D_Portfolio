import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import { CTA } from '../components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = () => {

  useGSAP(() => {
    gsap.fromTo('.intro', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut'});
    gsap.fromTo('.project_items', { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        delay: 0.25,
        stagger: 0.5,
      })
  }, [])

  return (
    <section className='max-container'>
      <h1 className='head-text intro'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 intro'>
        <p>As a recent graduate and aspiring full-stack developer, I have embarked on various self-initiated projects to hone my skills, 
        including developing a dynamic website and app using ReactJS and NodeJS, reflecting my dedication to learning and growing in the field of web, app development.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full project_items' key={project.name}>
            <div className='block-container w-24 h-24'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain' 
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link 
                  to={project.link} 
                  target='blank'
                  rel='no opener no referrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200'/>

      <CTA/>
    </section>
  )
}

export default Projects