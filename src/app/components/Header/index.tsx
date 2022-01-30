import * as React from 'react';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import './styles.scss';

const Header = () => {
  return (
    <div className={'header'}>
      <img src={'/logo.png'} alt={'logo'} />
      <ul className={'navbar'}>
        <li className={'nav-item'}>
          <Search />
        </li>
        <li className={'nav-item'}>Spaces</li>
        <li className={'nav-item'}>Shop</li>
        <li className={'nav-item'}>Brands</li>
        <li className={'nav-item'}>
          <ShoppingCartOutlined />
        </li>
      </ul>
    </div>
  );
};

export default Header;
