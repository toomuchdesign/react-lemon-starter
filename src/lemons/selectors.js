import {stateName} from './reducers';

// Selector functions. State is the global state.

/**
 * Return the list of currently stored lemons
 * @param  {Object} state    [description]
 * @return {array}           The list of lemons
 */
export const getLemons = state => state[stateName].items;

export default {
  getLemons,
};
