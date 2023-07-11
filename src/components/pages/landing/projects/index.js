import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './proj.css';

import Proj from './proj.js';
import { projInfo } from './projInfo.js';
import searchProjects from './searchProj.js';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const results = searchProjects(searchTerm);

    const sortedResults = results
      .sort((a, b) => {
        const dateA = new Date(a.date.split('-').reverse().join('-'));
        const dateB = new Date(b.date.split('-').reverse().join('-'));
        return dateB - dateA;
      })
      .slice(0, 5);

    setSearchResults(sortedResults);
  };

  const projCards = searchResults.length > 0 ? (
    searchResults.map((projData) => (
      <Proj
        key={projData.title}
        proj={{
          image: [projData.image[0], projData.image[1]],
          title: projData.title,
          description: projData.description,
          tags: projData.tags,
          date: projData.date,
          acceptedTo: projData.acceptedTo,
          projectPage: projData.projectPage,
          arxiv: projData.arxiv,
          github: projData.github,
        }}
      />
    ))
  ) : (
    projInfo
      .sort((a, b) => {
        const dateA = new Date(a.date.split('-').reverse().join('-'));
        const dateB = new Date(b.date.split('-').reverse().join('-'));
        return dateB - dateA;
      })
      .slice(0, 5)
      .map((projData) => (
        <Proj
          key={projData.title}
          proj={{
            image: [projData.image[0], projData.image[1]],
            title: projData.title,
            description: projData.description,
            tags: projData.tags,
            date: projData.date,
            acceptedTo: projData.acceptedTo,
            projectPage: projData.projectPage,
            arxiv: projData.arxiv,
            github: projData.github,
          }}
        />
      ))
  );

  return (
    <>
      <section id="projects">Projects</section>
      <input
        type="text"
        className="search input input-bordered"
        placeholder="Search title, tag or journal"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <nav className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center w-full">
        {projCards}
      </nav>
    </>
  );
}

export default SearchComponent;
