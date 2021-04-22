import axios from 'axios';
import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  // PRODUCT_UPDATE_FAIL,
  // PRODUCT_UPDATE_REQUEST,
  // PRODUCT_UPDATE_SUCCESS,
} from '../constants/productConstants';

const url = 'https://api-test.innoloft.com/';
const query = '/product/';
const id = '6781';

export const getProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_REQUEST,
    });

    const { data } = await axios.get(`${url}${query}${id}`);

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
