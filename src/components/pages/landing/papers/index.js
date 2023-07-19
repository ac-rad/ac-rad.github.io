import React from 'react';

import Proj from './proj.js';
import { projInfo } from './projInfo.js';

<<<<<<< Updated upstream
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
=======
function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [cardsDisplayed, setCardsDisplayed] = useState(3);

    useEffect(() => {
        const handleShowMore = () => {
            setCardsDisplayed((prevCardsDisplayed) => prevCardsDisplayed + 3);
        };

        document.getElementById('showMore').addEventListener('click', handleShowMore);

        return () => {
            document.getElementById('showMore').removeEventListener('click', handleShowMore);
        };
    }, []);

    const handleSearch = (searchTerm) => {
        const results = searchpapers(searchTerm);

        const sortedResults = results
            .sort((a, b) => {
                const dateA = new Date(a.date.split('-').reverse().join('-'));
                const dateB = new Date(b.date.split('-').reverse().join('-'));
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
                      const dateA = new Date(a.date.split('-').reverse().join('-'));
                      const dateB = new Date(b.date.split('-').reverse().join('-'));
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
            <section id="papers" className="bg-themeSilver">
                <h1 className="text-black">Publications</h1>
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
                <nav className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center w-full">{projCards}</nav>
                <button className="btn bg-base-300 m-auto block bg-white" id="showMore">
                    Show More
                </button>
            </section>
        </>
    );
}
>>>>>>> Stashed changes

export default index;
