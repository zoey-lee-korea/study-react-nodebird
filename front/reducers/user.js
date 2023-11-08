// DUMMY(USER)
const dummyUser = (data) => ({
  ...data,
  id: 1,
  nickname: 'zoey',
  Posts: [{ id: 1 }],
  Followings: [{ nickname: 'following1' }, { nickname: 'following2' }, { nickname: 'following3' }],
  Followers: [{ nickname: 'follower1' }, { nickname: 'follower2' }, { nickname: 'follower3' }],
});

// INITIAL STATE
export const initialState = { // index.js에서 합쳐서 사용할거라서 export
  logInLoading: false, // 로그인 시도중 - 이런게 true인 경우 Loading창을 띄우기 위함
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  user: null,
  signUpData: {},
  loginData: {},
};

// ACTION_NAME (너무 길면 별도의 파일로 분리해도 된다)
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

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
      console.log('reducer logIn');
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        user: dummyUser(action.user)
        // user: { ...dummyUser, nickname: 'zoey'},
        // loginData: { ...action.data, nickname: 'zoey'},
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        user: null,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        logInLoading: false,
        logOutError: action.error,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    }
    case CHANGE_NICKNAME_REQUEST: {
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      };
    }
    case CHANGE_NICKNAME_SUCCESS: {
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: true,
      };
    }
    case CHANGE_NICKNAME_FAILURE: {
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      };
    }
    case ADD_POST_TO_ME: {
      return {
        ...state,
        user: {
          ...state.user,
          Posts: [{ id: action.data }, ...state.user.Posts],
        }
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
};

export default reducer;