import React from 'react';

//assets + dependencies
import { Link } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import videoBg from '../../../assets/banner_video.mp4';
import './landing.css'

//components
import Header from './header-banner/index.js';
import Projects from './projects/index.js';
import News from './news/index.js';
import Papers from './papers';
import Teams from './teams/index.js';

const Landing = () => {
    
    //for handling the click states for the display of the menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    //for the handling of the max height
    const headerRef = useRef(null);
    const videoContentRef = useRef(null);
    const navMaxHeight = useState(0);
    const [scrollY, setScrollY] = useState(0);
  

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxFactor = 0.5;
    const parallaxOffset = scrollY * parallaxFactor;

    return (
        <>
        <main id="home" className="antialiased w-full min-h-screen">
        <Header navMaxHeight={navMaxHeight} headerRef={headerRef} />
            <div
            id="video"
            className="relative -z-50 flex flex-col items-center justify-center"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
            >
            <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover" />
            <div id="overlay" className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div ref={videoContentRef} id="videoContent" className="absolute w-full h-full flex flex-col justify-center items-center text-neutral-100">
                <hgroup>
                <h1>Acceleration Consortium</h1>
                <p>---</p>
                <h1>Robotics Assisted Accelerated Discovery</h1>
                </hgroup>                
                <svg className="arrows">
                    <path className="a1" d="M0 0 L22.5 24 L45 0"></path>
                    <path className="a2" d="M0 15 L22.5 39 L45 15"></path>
                    <path className="a3" d="M0 30 L22.5 54 L45 30"></path>
                </svg>
            </div>
            </div>
            <br/>
            <div className="content">
            <Projects />
            <div className="divider"></div>
            <News />
            <div className="divider"></div>
            <Papers />
            <div className="divider"></div>
            <Teams />
            </div>
        </main>
        </>
    );
};

export default Landing;

