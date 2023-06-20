import React from 'react';
import { Link } from './style';

const Item = ({ name, path }) => {
  return (
    <Link className={({ isActive }) => isActive && 'active'} to={path}>
      {name}
    </Link>
  );
};

export default Item;
