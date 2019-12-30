import { combineReducers } from 'redux';

import exercise from './exercise';
import exercises from './exercises'

export default combineReducers({
  exercise,
  exercises,
});
