import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Nav = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState();

  return (
    <nav className="w-100 bg-white drop-shadow">
        <div className="custom-container flex justify-between items-center">
            <a className="text-lg lg:text-2xl"><strong>Where in the world?</strong></a>
            <button className="hover:bg-gray-100 duration-300 border border-white rounded-md py-2 px-4 items-center flex">
                <FontAwesomeIcon icon={faMoon} className="mr-2" />
                <span>Dark Mode</span>
            </button>
        </div>
    </nav>
  );
};

export default Nav;
