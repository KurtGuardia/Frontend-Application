import React, { useEffect } from 'react';
import {
  ProductImage,
  ProductMainInfo,
  UserInfo,
  Map,
  Description,
  Attributes,
} from './components';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../actions/productActions';

const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  // const { loading, product: prod, error } = product;

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className='main'>
      <div className='Product'>
        <ProductImage payload={product} />
        <ProductMainInfo payload={product} />
        <div className='tabs'>
          <Description payload={product} />
          <Attributes payload={product} />
        </div>
      </div>
      <div className='user'>
        <UserInfo payload={product} />
        <Map payload={product} />
      </div>
    </div>
  );
};

export default Product;
