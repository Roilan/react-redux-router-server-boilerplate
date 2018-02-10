const SET_DEVICE = 'SET_DEVICE';

const INITIAL_STATE = {
  isMobile: false
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DEVICE:
      return Object.assign({}, state, {
        isMobile: action.payload
      });

    default:
      return state;
  }
}

export function IS_MOBILE(isMobile) {
  return {
    payload: isMobile,
    type: SET_DEVICE
  };
}

export default reducer;
