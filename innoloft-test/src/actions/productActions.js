import axios from 'axios';
import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  FETCH_TRL_FAIL,
  FETCH_TRL_SUCCESS,
} from '../constants/productConstants';

const url = 'https://api-test.innoloft.com/';
const query = '/product/';
const id = '6781';
const productQuery = '/product/';
const trlQuery = '/trl/';

export const getProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_REQUEST,
    });

    const { data } = await axios.get(`${url}${productQuery}${id}`);

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: err,
    });
  }
};

export const getTrl = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${url}${trlQuery}`);
    dispatch({ type: FETCH_TRL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_TRL_FAIL, payload: err });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    await axios.put(`${url}${productQuery}${product.id}`, product);

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: err,
    });
  }
};
