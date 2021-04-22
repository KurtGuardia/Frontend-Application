import { combineReducers } from 'redux';
import {
  getProductReducer,
  getTrlReducer,
  updateProductReducer,
} from './productReducer';

const rootReducer = combineReducers({
  product: getProductReducer,
  trl: getTrlReducer,
  updateProduct: updateProductReducer,
});

export default rootReducer;
