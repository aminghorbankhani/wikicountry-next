import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Nav, RegionFilter, SearchInput } from '../components';

const Home: NextPage = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <div className="h-full bg-gray-50">
      <Nav />
      <div className="custom-container flex justify-between py-12">
        <SearchInput />
        <RegionFilter />
      </div>
    </div>
  );
};

export default Home;
