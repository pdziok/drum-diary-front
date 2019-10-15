export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_EXERCISE':
      return {
        result: action.payload
      };
    default:
      return state
  }
}
