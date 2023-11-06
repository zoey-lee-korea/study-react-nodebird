export const initialState = { // index.js에서 합쳐서 사용할거라서 export
    mainPosts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      default: {
        return {
          ...state,
        };
      }
    }
};

export default reducer