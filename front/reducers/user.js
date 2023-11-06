const dummyUser = {
    id: 1,
    nickname: 'zoey',
    Posts: [],
    Followings: [],
    Followers: [],
  };
  
  export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  };
  
  export const SIGN_UP = 'SIGN_UP';
  export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
  export const LOG_IN = 'LOG_IN'; // 액션의 이름
  export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
  export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
  export const LOG_OUT = 'LOG_OUT';

  
  export const loginAction = (data) => {
    return {
      type: LOG_IN,
      data,
    }
  };
  export const logoutAction = {
    type: LOG_OUT,
  };

  export default (state = initialState, action) => {
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