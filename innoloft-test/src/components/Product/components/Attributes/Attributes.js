import React, { useEffect, useState } from 'react';
import { Button } from '../../..';
import './Attributes.scss';

const Attributes = ({ product }) => {
  const [trl, setTrl] = useState('');
  const [cat, setCat] = useState([]);
  const [businessModels, setBusinessModels] = useState([]);
  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    setTrl(product?.trl);
    setCat(product?.categories);
    setBusinessModels(product?.businessModels);
  }, [product]);

  return (
    <div className='desc-att attributes'>
      <div className='left'>
        <div className='trl'>
          <h3>
            <i className='fas fa-car-battery'></i> TRL
          </h3>{' '}
          <p>{trl.name}</p>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className='cat'>
          {' '}
          <h3>
            <i className='fas fa-list-ul'></i> Category
          </h3>{' '}
          <span>
            {cat.map((e) => (
              <p>{e.name}</p>
            ))}
          </span>
          <input type='text' />
        </div>
      </div>
      <div className='right'>
        <Button visible text={'edit'} />
        <div className='businessModels'>
          {' '}
          <h3>
            <i className='fas fa-tags'></i> Business Model
          </h3>
          <span>
            {businessModels.map((e) => (
              <p>{e.name}</p>
            ))}
          </span>
          <input type='text' />
        </div>{' '}
        <Button visible text={'submit'} />
      </div>
    </div>
  );
};

export default Attributes;
