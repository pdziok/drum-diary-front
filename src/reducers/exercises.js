import { generateBasicFetchReducer } from './utils';
import { FETCH_EXERCISES_ACTION } from '../actions/exercises';

const exercises = generateBasicFetchReducer(FETCH_EXERCISES_ACTION);

export default exercises;


