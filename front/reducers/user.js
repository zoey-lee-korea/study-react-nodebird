// DUMMY(USER)
const dummyUser = {
  id: 1,
  nickname: 'zoey',
  Posts: [],
  Followings: [],
  Followers: [],
};

// INITIAL STATE
export const initialState = { // index.js에서 합쳐서 사용할거라서 export
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// ACTION_NAME
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';

// ACTIONS
export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  }
};
export const logoutAction = {
  type: LOG_OUT,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return {
        ...state,
      }
    }
  }
};

export default reducer;