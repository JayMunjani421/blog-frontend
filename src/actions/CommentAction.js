import axios from 'axios';
import { BASE_URL } from '../constants/constant';


export const getCommentsByBlogId = (blog_id) => {
  return (dispatch) => {
    dispatch({ type: "START_COMMENTS" });

    axios.get(`${BASE_URL}comment/getall/${blog_id}`)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: "SET_COMMENTS",
            payload: { comments: response.data.data }
          });
        }
      })
      .catch(() => {
        dispatch({ type: "END_COMMENTS" });
      });
  };
};

export const addComment = (blog_id, commentData) => (dispatch) => {
  dispatch({ type: "ADD_COMMENT_START" });
  axios.post(`${BASE_URL}comment/insert/${blog_id}`, commentData)
    .then((res) => {
      if (res.data.status) {
        dispatch({ type: "ADD_COMMENT_SUCCESS" });
        dispatch(getCommentsByBlogId(blog_id));
      } else {
        dispatch({ type: "ADD_COMMENT_FAIL", payload: "Failed to add comment" });
      }
    })
    .catch((err) => {
      dispatch({ type: "ADD_COMMENT_FAIL", payload: err.message });
    });
};
