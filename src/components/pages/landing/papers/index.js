import React from 'react';

import Proj from './proj.js';
import { projInfo } from './projInfo.js';

const projCards = projInfo.map((projData) => {
    return (
        <Proj
            proj={{
                image: [projData.image[0], projData.image[1]],
                title: projData.title,
                description: projData.description,
                acceptedTo: projData.acceptedTo,
                projectPage: projData.projectPage,
                arxiv: projData.arxiv,
                github: projData.github,
            }}
        />
    );
});

const index = () => {
    return (
        <>
            <section id="papers" className="bg-themeSilver">
                <h1 className="text-black">Our Work</h1>
                <nav className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center w-full"> {projCards}</nav>
            </section>
        </>
    );
};

export default index;
