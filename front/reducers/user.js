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
  isLoggingIn : false, // 로그인 시도중 - 이런게 true인 경우 Loading창을 띄우기 위함
  isLoggedIn: false,
  isLoggingOut : false, // 로그아웃 시도중
  user: null,
  signUpData: {},
  loginData: {},
};

// ACTION_NAME
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// ACTIONS
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};
export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn : true,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn : false,
        isLoggedIn: true,
        user: { ...dummyUser, nickname: 'zoey'},
        loginData: { ...action.data, nickname: 'zoey'},
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn : false,
        isLoggedIn: false,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut : true,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut : false,
        isLoggedIn: false,
        user: null,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLoggingIn : false,
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