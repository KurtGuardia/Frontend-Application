import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../..';
import { getTrl } from '../../../../actions/productActions';
import Modal from '../../../UI/Modal/Modal';
import './Attributes.scss';

const Attributes = ({ product }) => {
  const [trl, setTrl] = useState('');
  const [cat, setCat] = useState([]);
  const [businessModels, setBusinessModels] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [newTrl, setNewTrl] = useState('');
  const [newCat, setNewCat] = useState('');
  const [newBusinessModel, setNewBusinessModel] = useState('');

  const dispatch = useDispatch(null);

  const fetchedTrl = useSelector((state) => state.trl);
  const { trl: trlOpt } = fetchedTrl;

  useEffect(() => {
    setTrl(product?.trl);
    setCat(product?.categories);
    setBusinessModels(product?.businessModels);
  }, [product]);

  const handleIsEdit = () => {
    setIsEdit(true);
    dispatch(getTrl());
  };

  const handleSubmit = () => {};

  useEffect(() => {
    console.log(trlOpt);
  }, [trlOpt]);

  return (
    <div className='desc-att attributes'>
      <div className={isEdit && 'blur'}></div>
      <Modal show={isEdit}>
        <div className='modal__title'>
          <h2>Your Updates:</h2>
          <span onClick={() => dispatch(() => setIsEdit(false))}>X</span>
        </div>

        <form className='modal__form' onSubmit={handleSubmit}>
          <div className='modal__form--field'>
            <label>TRL:</label>
            <select
              defaultValue={trl.name}
              className={isEdit ? `isEdit` : ''}
              onChange={(e) => setNewTrl(e.target.value)}
            >
              {trlOpt?.map((trl) => (
                <option key={trl.id}>{trl.name}</option>
              ))}
            </select>
          </div>

          <div className='modal__form--field'>
            <label>Category:</label>
            <input
              type='text'
              className={isEdit ? `isEdit` : ''}
              placeholder='Add a category'
              onChange={(e) => setNewCat(e.target.value)}
            />
          </div>

          <div className='modal__form--field'>
            <label>Business Model</label>
            <input
              type='text'
              className={isEdit ? `isEdit` : ''}
              placeholder='Add a Business Model'
              onChange={(e) => setNewBusinessModel(e.target.value)}
            />
          </div>

          <Button text={'Submit'} symbol='✓' visible={true} />
        </form>
      </Modal>
      <div className='left'>
        <div className='trl'>
          <h3>
            <i className='fas fa-car-battery'></i> TRL
          </h3>{' '}
          <p>{trl.name}</p>
        </div>
        <div className='cat'>
          {' '}
          <h3>
            <i className='fas fa-list-ul'></i> Category
          </h3>{' '}
          <span>
            {cat.map((e) => (
              <p key={e.id}>{e.name}</p>
            ))}
          </span>
        </div>
      </div>
      <div className='right'>
        <Button text={'edit'} clicked={handleIsEdit} visible={true} />
        <div className='businessModels'>
          {' '}
          <h3>
            <i className='fas fa-tags'></i> Business Model
          </h3>
          <span>
            {businessModels.map((e) => (
              <p key={e.id}>{e.name}</p>
            ))}
          </span>
        </div>{' '}
      </div>
    </div>
  );
};

export default Attributes;
