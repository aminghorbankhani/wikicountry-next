import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Nav = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState();

  return (
    <nav className="w-100 p-5 bg-white drop-shadow">
        <div className="container flex justify-between items-center max-w-7xl mx-auto">
            <a className="text-lg lg:text-2xl"><strong>Where in the world?</strong></a>
            <button className="hover:border-gray-700 duration-300 border border-white rounded py-2 px-4 items-center flex">
                <FontAwesomeIcon icon={faMoon} className="mr-2" />
                <span>Dark Mode</span>
            </button>
        </div>
    </nav>
  );
};

export default Nav;
