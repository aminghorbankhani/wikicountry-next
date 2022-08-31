import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface RegionFilterProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (region: string| null) => void
}

const RegionFilter = ({ onChange } : RegionFilterProps) => {
  const [selected, setSelected] = useState<string|null>(null);
  const [regions] = useState([
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ]);

  const toggle = (region: string) => {
    if (region === selected) {
      setSelected(null);
      onChange(null);
    } else {
      setSelected(region);
      onChange(region);
    }
  };

  return (
    <Menu as="div" className="relative w-52 text-left">
      <div>
        <Menu.Button className="w-full flex items-center justify-between bg-white rounded-md px-4 py-4 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span>{selected || 'Filter by region'}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-52 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {
            regions.map((region) => (
                <div key={region} className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => toggle(region)}
                      className={`${
                        (active || region === selected) && 'bg-gray-100'
                      } group flex w-full items-center rounded-md px-4 py-2`}
                    >
                      {region}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))
          }
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default RegionFilter;
