import React from 'react';
import Item from './Item';
import { navlinks } from './helper';
import { Wrapper , Text} from './style';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='class'>
        <p>Madelyn Torff</p>
      </div>
      <span>
        {navlinks.map((elem) => (
          <Item key={elem.id} name={elem.name} path={elem.path} />
        ))}
      </span>
    <Text>
      </Text>
    </Wrapper>
  );
};

export default Navbar;
