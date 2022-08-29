import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = ({
  children,
  className,
  icon,
  onClick = () => {},
} : {
  children: React.ReactNode,
  className?: string,
  icon?: IconProp,
  onClick?: () => void
}) => (
    <button onClick={onClick} className={`hover:bg-gray-100 duration-300 border border-white rounded-md py-2 px-4 items-center flex ${className}`}>
      {
        icon && (
          <FontAwesomeIcon icon={icon} className="mr-2" />
        )
      }
      {children}
    </button>
);

export default Button;
