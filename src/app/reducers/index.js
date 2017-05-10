import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authDataReducer, { stateName as authDataName } from 'app/authData';
import userReducer, { stateName as userName } from 'app/user';

const rootReducer = combineReducers({
  [authDataName]: authDataReducer,
  [userName]: userReducer,
  // Connect store to react-router-redux: https://github.com/reactjs/react-router-redux
  routing: routerReducer,
});

export default rootReducer;
