// DUMMY(post)
const dummyPost = {
    id: 2,
    content: '두 번째 게시글 더미데이터입니다.',
    User: {
      id: 1,
      nickname: 'zoey',
    },
    Images: [],
    Comments: [],
  };

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
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '우와 안녕하세요~',
    }, {
      User: {
        nickname: 'hero',
      },
      content: '반갑습니다^^~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
};

// ACTION_NAME
const ADD_POST = 'ADD_POST';

// ACTIONS
export const addPost = {
  type: ADD_POST,
};

// REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
          return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true,
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