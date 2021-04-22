import React from 'react';
import { Logo, LogoWhite } from '../../img';
import './Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <Logo className='normal' />
      <LogoWhite className='white' />
    </div>
  );
};

export default Header;
