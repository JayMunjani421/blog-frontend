import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const addLike = (blog_id) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post(`${BASE_URL}like/add`, { blog_id });
      if (resp.data.status) {
        dispatch(getLikeCount(blog_id));
      }
    } catch (error) {
      console.error("Add Like Error:", error);
    }
  };
};

export const removeLike = (blog_id) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post(`${BASE_URL}like/remove`, { blog_id });
      if (resp.data.status) {
        dispatch(getLikeCount(blog_id));
      }
    } catch (error) {
      console.error("Remove Like Error:", error);
    }
  };
};

export const getLikeCount = (blog_id) => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`${BASE_URL}like/get/${blog_id}`);
      if (resp.data.status) {
        dispatch({ type: "SET_LIKE_COUNT", payload: resp.data.likes });
      }
    } catch (error) {
      console.error("Get Like Count Error:", error);
    }
  };
};
