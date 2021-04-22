import React, { useEffect, useState } from 'react';
import { Logo, LogoWhite } from '../../img';
import './Header.scss';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('Header blue');
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setDisplay('block');
  }, []);

  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value === 0) {
      setHeaderClass('Header blue');
      setDisplay(true);
    } else {
      setHeaderClass('Header white');
      setDisplay(false);
    }
  });

  return (
    <div className={headerClass}>
      {display ? <LogoWhite className='white' /> : <Logo className='normal' />}
    </div>
  );
};

export default Header;
