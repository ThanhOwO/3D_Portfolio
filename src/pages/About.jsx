import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CTA } from '../components';
import { avatar, hero } from '../assets/images';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {

  useGSAP(() => {
    
    gsap.fromTo(
      '.intro-text',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.inOut'}
    );
    gsap.fromTo(
      '.avatar-container',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.subhead-text',
      { x: 50, opacity: 0 }, 
      { x: 0, opacity:1, duration: 1, delay: 1, ease: 'power2.inOut' }
    );
    gsap.fromTo(
      '.skill-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        delay: 1,
        stagger: 0.1,
      }
    );

   
  },[])

  return (
    <section className='max-container'>

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="flex-1 intro-text">
          <h1 className="head-text">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Thanh
            </span>
          </h1>
          <div className="mt-5 text-slate-500">
            <p>
              A graduated student seeking a job opportunity, with a strong background
              in system design, web, mobile programming, and testing.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-5 sm:mt-0 flex justify-center items-center avatar-container">
          <div className="w-40 h-40 sm:w-80 sm:h-80 overflow-hidden rounded-full flex justify-center items-center">
            <img
              src={avatar}
              className="w-full h-full object-cover"
              alt="Avatar"
            />
          </div>
        </div>
      </div>


      {/* Skills */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className='flex flex-wrap mt-16 gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 skill-item'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I've worked with some sorts of companies, leveling up my skills and teaming up with awesome people. Here's the rundown:</p>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experiences) => (
                <VerticalTimelineElement
                  key={experiences.company_name}
                  date={experiences.date}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experiences.icon}
                        alt={experiences.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  iconStyle={{background: experiences.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experiences.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experiences.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin: 0}}>
                      {experiences.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experiences.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default About