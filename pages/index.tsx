import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    console.log('Yuy mounted');
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">Helllo Amin</h1>
      <p className=''></p>
    </div>
  );
};

export default Home;
