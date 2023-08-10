import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./paper.css";

import Proj from "./paper.js";
import { projInfo } from "./paperInfo.js";
import searchpapers from "./searchPapers.js";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cardsDisplayed, setCardsDisplayed] = useState(3);

  useEffect(() => {
    const handleShowMore = () => {
      setCardsDisplayed((prevCardsDisplayed) => prevCardsDisplayed + 3);
    };

    document
      .getElementById("showMore")
      .addEventListener("click", handleShowMore);

    return () => {
      document
        .getElementById("showMore")
        .removeEventListener("click", handleShowMore);
    };
  }, []);

  const handleSearch = (searchTerm) => {
    const results = searchpapers(searchTerm);

    const sortedResults = results
      .sort((a, b) => {
        const dateA = new Date(a.date.split("-").reverse().join("-"));
        const dateB = new Date(b.date.split("-").reverse().join("-"));
        return dateB - dateA;
      })
      .slice(0, cardsDisplayed);

    setSearchResults(sortedResults);
  };

  const projCards =
    searchResults.length > 0
      ? searchResults.map((projData) => (
          <Proj
            key={projData.title}
            proj={{
              image: [projData.image[0], projData.image[1]],
              title: projData.title,
              description: projData.description,
              tags: projData.tags,
              date: projData.date,
              acceptedTo: projData.acceptedTo,
              paperPage: projData.paperPage,
              arxiv: projData.arxiv,
              github: projData.github,
            }}
          />
        ))
      : projInfo
          .sort((a, b) => {
            const dateA = new Date(a.date.split("-").reverse().join("-"));
            const dateB = new Date(b.date.split("-").reverse().join("-"));
            return dateB - dateA;
          })
          .slice(0, cardsDisplayed)
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
                paperPage: projData.paperPage,
                arxiv: projData.arxiv,
                github: projData.github,
              }}
            />
          ));

  return (
    <>
    <div class="content_divider_wrapper">
    <svg class="svg_divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
  <polygon points="0, 100 0, 20.0 1, 18.5 2, 17.02 3, 15.57 4, 14.16 5, 12.81 6, 11.53 7, 10.34 8, 9.24 9, 8.25 10, 7.38 11, 6.63 12, 6.02 13, 5.55 14, 5.22 15, 5.04 16, 5.01 17, 5.13 18, 5.39 19, 5.81 20, 6.36 21, 7.05 22, 7.87 23, 8.81 24, 9.87 25, 11.02 26, 12.27 27, 13.59 28, 14.98 29, 16.41 30, 17.88 31, 19.38 32, 20.88 33, 22.37 34, 23.83 35, 25.26 36, 26.64 37, 27.95 38, 29.18 39, 30.32 40, 31.35 41, 32.27 42, 33.07 43, 33.74 44, 34.27 45, 34.66 46, 34.91 47, 35.0 48, 34.94 49, 34.74 50, 34.38 51, 33.89 52, 33.25 53, 32.48 54, 31.59 55, 30.58 56, 29.47 57, 28.26 58, 26.97 59, 25.61 60, 24.19 61, 22.73 62, 21.25 63, 19.75 64, 18.25 65, 16.77 66, 15.33 67, 13.93 68, 12.59 69, 11.32 70, 10.15 71, 9.07 72, 8.09 73, 7.24 74, 6.52 75, 5.93 76, 5.48 77, 5.18 78, 5.02 79, 5.02 80, 5.16 81, 5.45 82, 5.89 83, 6.47 84, 7.18 85, 8.02 86, 8.98 87, 10.06 88, 11.23 89, 12.48 90, 13.82 91, 15.21 92, 16.66 93, 18.13 94, 19.63 95, 21.13 96, 22.61 97, 24.08 98, 25.5 100, 26.86 100, 100"  />
</svg>


      <section id="papers" className="bg-themeSilver">
        <h1>Publications and Work</h1>
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
        <button className="btn" id="showMore">
          Show More
        </button>
      </section>
      </div>
    </>
  );
}

export default SearchComponent;
