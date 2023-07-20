import React from 'react';

const About = () => {
    return (
        <>
            <section id="projInfo" className="text-white no-underline grid grid-col-2 justify-items-center items-center h-[100%] px-[50px] py-[50px]">
                <div id="borderDiv" className="bg-themeSilver w-[60%] h-[100%]">
                    <h1 className="bg-themeOrange text-black">Our Mission</h1>
                </div>
                <p className="w-[40%]">
                    Science discoveries take time and effort. We introduce novel robotic & AI-driven solutions to accelerate these discoveries.
                </p>
            </section>
        </>
    );
};

export default About;
