import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface SearchProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (region: string) => void
}

const SearchInput = ({ onChange }: SearchProps): JSX.Element => (
  <div className="relative w-1/2 lg:w-1/3 mr-3">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
    </div>
    <input
      className="bg-white shadow text-gray-900 rounded-md w-full pl-12 p-4 border-none focus-visible:outline-none"
      placeholder="Search for a country"
      type="text"
      name="search"
      autoComplete="off"
      onChange={(event) => onChange(event.target.value as string)}
    />
  </div>
);

export default SearchInput;
