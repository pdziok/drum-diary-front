const initialState = {
  pending: false,
  error: null,
  data: {},
};

export const generateBasicFetchReducer = (actionType) => (state = initialState, action) => {
  switch (action.type) {
    case `${actionType}_REQUEST`:
      return { ...state, pending: true };

    case `${actionType}_SUCCESS`:
      return { ...state, pending: false, data: action.data.data };

    case `${actionType}_FAILURE`:
      return { ...state, pending: false, error: action.data.error };

    default:
      return state;
  }
};
