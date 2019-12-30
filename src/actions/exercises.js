export const FETCH_EXERCISES_ACTION = 'FETCH_EXERCISES';

export const fetchExercises = (page = 0) => dispatch => {
  dispatch({
    type: FETCH_EXERCISES_ACTION,
    $payload: {
      url: `/api/exercises/${page}`
    }
  })
};
