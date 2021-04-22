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
    <div className='main'>
      <div className='Product'>
        <ProductImage />
        <ProductMainInfo />
        <div className='tabs'>
          <Description />
          <Attributes />
        </div>
      </div>
      <div className='user'>
        <UserInfo />
        <Map />
      </div>
    </div>
  );
};

export default Product;
