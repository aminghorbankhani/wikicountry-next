import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Nav } from '../components';

const Home: NextPage = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <div className="h-full bg-gray-50">
      <Nav />
    </div>
  );
};

export default Home;
