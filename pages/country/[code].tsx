import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Label } from '../../components';
import Country from '../../types/Country';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  const paths = countries.map((country: Country) => ({
    params: { code: country.alpha3Code.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${params?.code}`);
  const country = await res.json() as Country;

  let borderCountries = null;
  if (country.borders?.length) {
    const borederRes = await fetch(`https://restcountries.com/v2/alpha?codes=${country.borders.join(',')}`);
    borderCountries = await borederRes.json();
  }

  return {
    props: { country, borderCountries },
  };
};

const Detail: NextPage<{
  country: Country,
  borderCountries: Country[]
}> = ({ country, borderCountries }) => {
  const router = useRouter();

  return (
    <div className="custom-container pb-6">
      <div className="py-12">
        <Button
          onClick={() => router.back()}
          className="bg-white shadow hover:bg-white"
          icon={faArrowLeftLong}
        >Back</Button>
      </div>
      <div className="grid grid-cols-12 gap-y-6 gap-x-6">
        <div className="col-span-12 md:col-span-5 w-full aspect-[4/3] relative">
          <Image
            src={country.flag}
            alt={country.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 flex justify-center flex-col">
          <h1 className="text-3xl font-bold mb-5">{country.name}</h1>
          <div className="grid grid-cols-2 mb-5">
            <div>
              <Label title="Native Name" text={country.nativeName} />
              <Label title="Population" text={country.population.toLocaleString()} />
              <Label title="Region" text={country.region} />
              <Label title="Sub Region" text={country.subregion} />
              <Label title="Capital" text={country.capital} />
            </div>
            <div>
              <Label title="Top Level Domain" text={country.topLevelDomain?.join(', ')} />
              <Label title="Currencies" text={country.currencies.map((item) => item.name).join(', ')} />
              <Label title="Languages" text={country.languages.map((item) => item.name).join(', ')} />
            </div>
          </div>
          <div className="flex flex-column md:flex-row items-baseline">
            <strong className="font-semibold flex-shrink-0">Border Countries:</strong>
            <div className="flex flex-row flex-wrap">
            {
              borderCountries?.map((borderCountry) => (
                <Link href={`/country/${borderCountry.alpha3Code}`} key={borderCountry.name}>
                  <a
                    className="mt-2 ml-2 bg-white shadow py-1 text-sm px-4 items-center flex rounded-md"
                  >{borderCountry.name}</a>
                </Link>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
