import { combineReducers } from 'redux';
import globalSlice from './slices/global';
import auth from './slices/auth';

const rootReducer = combineReducers({
  global: globalSlice,
  auth: auth,
});

export default rootReducer;
