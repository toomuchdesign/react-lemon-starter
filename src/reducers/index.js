import { combineReducers } from 'redux';
import authDataReducer, { stateName as authDataName } from '../authData';
import userReducer, { stateName as userName } from '../user';
import lemonsReducer, { stateName as lemonsName } from '../lemons';

const rootReducer = combineReducers({
  [authDataName]: authDataReducer,
  [userName]: userReducer,
  [lemonsName]: lemonsReducer,
});

export default rootReducer;
