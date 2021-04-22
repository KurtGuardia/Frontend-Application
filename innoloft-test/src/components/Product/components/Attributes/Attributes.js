import React, { useEffect, useState } from 'react';
import './Attributes.scss';

const Attributes = ({ product }) => {
  const [trl, setTrl] = useState('');
  const [cat, setCat] = useState([]);
  const [businessModels, setBusinessModels] = useState([]);

  useEffect(() => {
    setTrl(product?.trl);
    setCat(product?.categories);
    setBusinessModels(product?.businessModels);
    console.log(cat);
  }, [product]);

  return (
    <div className='desc-att attributes'>
      <div className='left'>
        <span className='trl'>
          {' '}
          <h3>TRL</h3> <p>{trl.name}</p>
        </span>
        <span className='cat'>
          {' '}
          <h3>Category</h3>{' '}
          <span>
            {cat.map((e) => (
              <p>{e.name}</p>
            ))}
          </span>
        </span>
      </div>
      <div className='right'>
        <span className='businessModels'>
          {' '}
          <h3>Business Model</h3>
          <p>
            {businessModels.map((e) => (
              <p>{e.name}</p>
            ))}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Attributes;
