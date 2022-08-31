import Fuse from 'fuse.js';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
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
  const [regionDictionary, setRegionDictionary] = useState<{[region: string] : Country[]}>({});
  const [regionFilter, setRegionFilter] = useState<null|string>(null);
  const [searchedText, setSearchedText] = useState<null|string>(null);

  const updateSearchedText = useCallback((value: string) => setSearchedText(value), []);
  const updateRegionFilter = useCallback((value: string|null) => setRegionFilter(value), []);

  useEffect(() => {
    const fillRegionDictionary = () => {
      const dic: {[region: string] : Country[]} = {};
      countries.forEach((country) => {
        if (dic[country.region]) {
          dic[country.region] = [...dic[country.region], country];
        } else {
          dic[country.region] = [country];
        }
      });

      setRegionDictionary(dic);
    };

    fillRegionDictionary();
  }, [countries]);

  const searchInCountries = useCallback((data: Country[], text: string) => {
    const fuse = new Fuse(
      data,
      {
        keys: ['name'],
        threshold: 0.4,
      },
    );
    return fuse.search(text).map(({ item }) => item);
  }, []);

  const preparedCountries = useMemo(() => {
    let result = [];

    if (regionFilter) {
      result = regionDictionary[regionFilter];
    } else {
      result = countries;
    }

    if (searchedText) {
      result = searchInCountries(result, searchedText);
    }

    return result;
  }, [countries, regionDictionary, regionFilter, searchInCountries, searchedText]);

  return (
    <div className="custom-container pb-6">
      <Head>
        <title>Home - WikiCountry (Next)</title>
      </Head>
      <div className="flex justify-between py-12">
        <SearchInput onChange={updateSearchedText} />
        <RegionFilter onChange={updateRegionFilter} />
      </div>
      <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {preparedCountries.map(
          (country) => (<CountryColumn key={country.name} country={country} />),
        )}
      </div>
    </div>
  );
};

export default Home;
