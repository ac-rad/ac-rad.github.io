import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ navMaxHeight, headerRef }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full" style={{ height: `clamp(${navMaxHeight}vh, 100%)` }}>
            <nav
                className={`
          grid
          grid-cols-[1fr,auto]
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          ${showDropdown ? 'grid-rows-[auto,1fr]' : ''}
        `}
            >
                <div id="logo" className="col-start-1">
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeDropdown}>
                        <img src="https://avatars.githubusercontent.com/u/107219416?s=48&v=4" width="50" height="32.125"></img>
                    </Link>
                </div>
                <div className="col-start-2">
                    <button className="md:hidden" onClick={handleToggleDropdown} aria-label="Toggle navigation menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 cursor-pointer md:hidden block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        className={`
              md:flex
              md:flex-row
              ${showDropdown ? 'flex flex-col items-stretch' : 'hidden'}
            `}
                    >
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-1 * navMaxHeight - 50} duration={500} onClick={closeDropdown}>
                                <span className="md:p-4 py-2 block hover:text-themeOrange">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="projInfo" spy={true} smooth={true} offset={-1 * navMaxHeight - 50} duration={500} onClick={closeDropdown}>
                                <span className="md:p-4 py-2 block hover:text-themeOrange">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="papers" spy={true} smooth={true} offset={-1 * navMaxHeight - 50} duration={500} onClick={closeDropdown}>
                                <span className="md:p-4 py-2 block hover:text-themeOrange">Papers</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="teams" spy={true} smooth={true} offset={-1 * navMaxHeight - 50} duration={500} onClick={closeDropdown}>
                                <span className="md:p-4 py-2 block hover:text-themeOrange">Teams</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
