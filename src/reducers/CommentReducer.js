const initialState = {
  comments: [],
  loading: false,
  message: ""
};

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_COMMENTS":
      return { ...state, loading: true, message: "" };

    case "END_COMMENTS":
      return { ...state, loading: false };

    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.payload.comments,
        loading: false,
        message: ""
      };

    case "ADD_COMMENT_START":
      return { ...state, loading: true, message: "" };

    case "ADD_COMMENT_SUCCESS":
      return { ...state, loading: false, message: "Comment added successfully" };

    case "ADD_COMMENT_FAIL":
      return { ...state, loading: false, message: action.payload };

    default:
      return state;
  }
};

export default CommentReducer;
