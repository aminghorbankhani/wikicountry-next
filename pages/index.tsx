import type { NextPage } from 'next';
import { useEffect } from 'react';
import {
  CountryColumn,
  RegionFilter,
  SearchInput,
} from '../components';
import type Country from '../types/Country';

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

const Home: NextPage<{countries: Country[]}> = ({ countries }) => {
  useEffect(() => {
    //
  }, []);

  return (
    <div className="custom-container pb-6">
      <div className="flex justify-between py-12">
        <SearchInput />
        <RegionFilter />
      </div>
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (<CountryColumn key={country.name} country={country} />))}
      </div>
    </div>
  );
};

export default Home;
