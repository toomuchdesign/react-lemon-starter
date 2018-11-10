import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authDataReducer, { stateName as authDataName } from '../authData';
import userReducer, { stateName as userName } from '../user';
import lemonsReducer, { stateName as lemonsName } from '../lemons';

const rootReducer = combineReducers({
  [authDataName]: authDataReducer,
  [userName]: userReducer,
  [lemonsName]: lemonsReducer,
  // Connect store to react-router-redux: https://github.com/reactjs/react-router-redux
  routing: routerReducer,
});

export default rootReducer;
