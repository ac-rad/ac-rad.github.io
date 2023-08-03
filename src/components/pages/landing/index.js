import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import videoBg from "../../../assets/banner_video.mp4";
import "./landing.css";
import Header from "./header-banner/index.js";
import Mission from "./info/index.js";
import Papers from "./papers/index.js";
// import News from "./news/index.js";
import Teams from "./teams/index.js";

const Landing = () => {

  const headerRef = useRef(null);
  const navMaxHeight = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {

    function scrollLoop() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      document.getElementById("progressBar").style.height = `${
        (scrollTop / (document.body.offsetHeight - window.innerHeight)) * 100
      }%`;
      setParallaxOffset(scrollTop * 0.5);

      requestAnimationFrame(scrollLoop);
    }

    scrollLoop();

    return () => {
      cancelAnimationFrame(scrollLoop);
    };
  });

  return (
    <>
      <main id="home" className="antialiased w-full min-h-screen">
        <div id="progressBar"></div>
        <Header navMaxHeight={navMaxHeight} headerRef={headerRef} />
        <div
          id="video"
          className="relative -z-50 flex flex-col items-center justify-center"
          style={{
            willChange: "transform",
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          }}
        >
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div
            id="videoContent"
            className="absolute w-full h-full flex flex-col justify-center items-center text-neutral-100"
          >
            <div
              id="overlay"
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"
            ></div>
            <hgroup>
              <h1 className="type-effect">
                
              </h1>
            </hgroup>
            <svg className="arrows">
              <path className="a1" d="M0 0 L22.5 24 L45 0"></path>
              <path className="a2" d="M0 15 L22.5 39 L45 15"></path>
              <path className="a3" d="M0 30 L22.5 54 L45 30"></path>
            </svg>
          </div>
        </div>
        <div className="content">
          <Mission />
          <Papers />
          <Teams />
        </div>
      </main>
    </>
  );
};

export default Landing;
