import React from 'react';
import {
  ProductImage,
  ProductMainInfo,
  UserInfo,
  Map,
  Description,
  Attributes,
} from './components';

const Product = () => {
  return (
    <>
      <div className='Product'>
        <ProductImage />
        <ProductMainInfo />
        <Description />
        <Attributes />
      </div>
      <div className='user'>
        <UserInfo />
        <Map />
      </div>
    </>
  );
};

export default Product;
