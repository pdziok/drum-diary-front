import { combineReducers } from 'redux';

import { FETCH_EXERCISE_ACTION, FETCH_EXERCISE_EXECUTIONS_ACTION } from '../actions/exercise';
import { generateBasicFetchReducer } from './utils';

const details = generateBasicFetchReducer(FETCH_EXERCISE_ACTION);
const executions = generateBasicFetchReducer(FETCH_EXERCISE_EXECUTIONS_ACTION);

export default combineReducers({
  details, executions
});


