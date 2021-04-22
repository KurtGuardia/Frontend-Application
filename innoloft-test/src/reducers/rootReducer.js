import { combineReducers } from 'redux';
import { getProductReducer, updateProductReducer } from './productReducer';

const rootReducer = combineReducers({
  product: getProductReducer,
  updateProduct: updateProductReducer,
});

export default rootReducer;
