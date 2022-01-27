import * as React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <div className={'header'}>
      <img src={'/logo.png'} alt={'logo'} />
      <ul className={'navbar'}>
        <li className={'nav-item'}>Space</li>
        <li className={'nav-item'}>Shop</li>
        <li className={'nav-item'}>Brands</li>
      </ul>
    </div>
  );
};

export default Header;
