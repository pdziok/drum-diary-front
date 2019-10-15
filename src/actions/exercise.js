
export const fetchExercise = (id) => dispatch => {
  dispatch({
    type: 'FETCH_EXERCISE',
    payload: id
  })
};
