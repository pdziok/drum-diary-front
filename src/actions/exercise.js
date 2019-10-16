export const FETCH_EXERCISE_ACTION = 'FETCH_EXERCISE';
export const FETCH_EXERCISE_EXECUTIONS_ACTION = 'FETCH_EXERCISE_EXECUTIONS';

export const fetchExercise = (id) => dispatch => {
  dispatch({
    type: FETCH_EXERCISE_ACTION,
    $payload: {
      url: `/api/exercise/${id}`
    }
  })
};

export const fetchExerciseExecutions = (id) => dispatch => {
  dispatch({
    type: FETCH_EXERCISE_EXECUTIONS_ACTION,
    $payload: {
      url: `/api/exercise/${id}/executions`
    }
  })
};
