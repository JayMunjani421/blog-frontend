const initialState = {
  likeCount: 0
};

const LikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIKE_COUNT":
      return {
        ...state,
        likeCount: action.payload
      };
    default:
      return state;
  }
};

export default LikeReducer;
