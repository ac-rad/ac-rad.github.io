  import React, { useState } from "react";
  import { Link } from "react-scroll";
  import logo from "../../../../assets/ac-rad.png";

  const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
    const closeDropdown = () => {
      setShowDropdown(false);
    };
    let windowWidth = window.innerWidth; //in px
    let navMaxHeight = (windowWidth >= 768) ? 75 : 10;
    return (
      <header

        className="bg-white sticky top-0 z-50 w-full"
        style={
          { 
          height: `${navMaxHeight}px` 
          }
        }
      >
        <nav
          className={`flex flex-col md:flex-row items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white`}
        >
          <div id="logo" className="col-start-1">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeDropdown}
            >
              <img src={logo} width="350"></img>
            </Link>
          </div>
          <div className="flex flex-row-reverse w-full">
            <button
              className="md:hidden"
              onClick={handleToggleDropdown}
              aria-label="Toggle navigation menu"
              style={{ position: "relative", top: -50+"px", height: 0}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              className={`
                md:flex
                md:flex-row
                ${showDropdown ? "flex flex-row items-center justify-between w-full px-4 items-stretch" : "hidden"}
              `}
            >
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeDropdown}
                >
                  <span className="md:p-4 py-2 block hover:text-themeOrange">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="projInfo"
                  spy={true}
                  smooth={true}
                  offset={-1 * navMaxHeight}
                  duration={500}
                  onClick={closeDropdown}
                >
                  <span className="md:p-4 py-2 block hover:text-themeOrange">
                    Mission
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="news"
                  spy={true}
                  smooth={true}
                  offset={-1 * window.innerHeight * (navMaxHeight / 100)}
                  duration={500}
                  onClick={closeDropdown}
                >
                  <span className="md:p-4 py-2 block hover:text-themeOrange">
                    News
                  </span>
                </Link>
              </li> */}
              <li>
                <Link
                  to="papers"
                  spy={true}
                  smooth={true}
                  offset={-1 * navMaxHeight}
                  duration={500}
                  onClick={closeDropdown}
                >
                  <span className="md:p-4 py-2 block hover:text-themeOrange">
                    Papers
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="teams"
                  spy={true}
                  smooth={true}
                  offset={-1 * navMaxHeight}
                  duration={500}
                  onClick={closeDropdown}
                >
                  <span className="md:p-4 py-2 block hover:text-themeOrange">
                    Teams
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };

  export default Header;
