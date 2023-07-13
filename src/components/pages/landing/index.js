import React from 'react';

//assets + dependencies
import { Link } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import videoBg from '../../../assets/banner_video.mp4';

//components
import Header from './header-banner/index.js';
import Info from './info';
import Papers from './Papers/index.js';
import Teams from './teams/index.js';

const Landing = () => {
    //for handling the click states for the display of the menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    //for the handling of the max height
    const headerRef = useRef(null);
    const videoContentRef = useRef(null);
    const [navMaxHeight, setNavMaxHeight] = useState(0);
    const [videoMaxHeight, setVideoMaxHeight] = useState(0);
    useEffect(() => {
        const headerHeight = headerRef.current.clientHeight;
        const videoContentHeight = videoContentRef.current.clientHeight;

        const calculatedNavMaxHeight = Math.min(10, headerHeight);
        const calculatedVideoMaxHeight = Math.min(videoContentHeight - calculatedNavMaxHeight, videoContentHeight);

        setNavMaxHeight(calculatedNavMaxHeight);
        setVideoMaxHeight(calculatedVideoMaxHeight);
    }, []);

    return (
        <>
            <main id="home" className="antialiased w-full min-h-screen">
                <Header navMaxHeight={navMaxHeight} headerRef={headerRef} />
                <div id="video" className="relative -z-25 flex flex-col items-center justify-center">
                    <video src={videoBg} autoPlay loop muted className="w-full h-full object-cover" />
                    <div id="overlay" className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div ref={videoContentRef} id="videoContent" className="absolute w-full h-full flex flex-col justify-center items-center text-neutral-100">
                        <h1 className="text-2xl">Material and Chemical Sciences Meet Robotics and AI</h1>
                        <p>Learn More</p>
                    </div>
                </div>

                <Info />
                <Papers />
                <Teams />
            </main>
        </>
    );
};

export default Landing;
