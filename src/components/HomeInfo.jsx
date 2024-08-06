import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { gsap } from 'gsap';

const Infobox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Lê Sỹ Thanh</span>👋
        <br/>
        A Developer
        </h1>
    ),
    2: (
        <Infobox
            text="A graduated student seeking a job opportunity, with a strong background in system design, web and mobile programming."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <Infobox
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
    />
    ),
    4: (
        <Infobox
            text="Need a project or looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
    />
    ),
}

const HomeInfo = ({currentStage}) => {
    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
      }
    }, [currentStage]);
  
    return (
      <div ref={containerRef}>
        {renderContent[currentStage] || null}
      </div>
    );
}

export default HomeInfo