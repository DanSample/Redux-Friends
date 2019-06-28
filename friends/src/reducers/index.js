import { LOGIN_START } from '../actions';

const initialState = {
  friends: [],
  inLoggingIn: false,
  isLoading: false,
  isFetchingData: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
  }
};

export default reducer;
