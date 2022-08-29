import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type Country from '../types/Country';
import Label from './Label';

const CountryColumn = ({ country }: {country: Country}) => (
  <Link href={`/country/${country.alpha3Code}`}>
    <a className="shadow rounded-md w-100 bg-white">
      <div className="rounded-t-md w-full aspect-[4/3] relative overflow-hidden shadow-sm">
        <Image
          src={country.flag}
          alt={country.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <h5 className="font-bold text-lg mb-3">{country.name}</h5>
        <Label className="text-sm" title="Population" text={country.population.toLocaleString()} />
        <Label className="text-sm" title="Region" text={country.region} />
        <Label className="text-sm" title="Capital" text={country.capital} />
      </div>
    </a>
  </Link>
);

export default CountryColumn;
