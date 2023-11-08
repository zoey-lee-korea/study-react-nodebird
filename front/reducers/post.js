import shortId from 'shortid';
import faker from 'faker';

// DUMMY(post)
const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'zoey',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'zoey',
  },

});

// INITIAL STATE
export const initialState = { // index.js에서 합쳐서 사용할거라서 export
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'zoey',
    },
    content: '첫 번째 게시글 #해시태그',
    Images: [{
      id: shortId.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      id: shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      id: shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      id: shortId.generate(),
      User: {
        nickname: 'nero',
      },
      content: '우와 안녕하세요~',
    }, {
      id: shortId.generate(),
      User: {
        nickname: 'hero',
      },
      content: '반갑습니다^^~',
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
};

// ACTION_NAME
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// ACTIONS
export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      console.log(state.mainPosts)
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;

      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    }
    case REMOVE_POST_REQUEST: {
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    }
    case REMOVE_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
      };
    }
    case REMOVE_POST_FAILURE: {
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer