import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

const Nav = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState();

  return (
    <nav className="w-100 bg-white drop-shadow">
        <div className="custom-container py-4 flex justify-between items-center">
            <Link href="/">
              <a className="text-lg lg:text-2xl"><strong>Where in the world?</strong></a>
            </Link>
            <Button icon={faMoon}>Dark Mode</Button>
        </div>
    </nav>
  );
};

export default Nav;
