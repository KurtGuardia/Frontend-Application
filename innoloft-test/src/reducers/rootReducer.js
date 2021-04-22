import { combineReducers } from 'redux';
import {
  getProductReducer,
  getTrlReducer,
  updateProductReducer,
} from './productReducer';
import { getConfigReducer } from './config';

const rootReducer = combineReducers({
  product: getProductReducer,
  trl: getTrlReducer,
  updateProduct: updateProductReducer,
  getConfig: getConfigReducer,
});

export default rootReducer;
