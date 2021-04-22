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
  const { loading, product: prod, error } = product;

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className='main'>
      <div className='product'>
        <ProductImage product={prod} />
        <ProductMainInfo product={prod} />
        <div className='tabs'>
          <Description product={prod} />
          <Attributes product={prod} />
        </div>
      </div>
      <div className='user'>
        <UserInfo product={prod} />
        <Map product={prod} />
      </div>
    </div>
  );
};

export default Product;
