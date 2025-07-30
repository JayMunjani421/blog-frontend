import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const getAllBlogData = () => {
    return (dispatch) => {
        dispatch({ "type": "START" });
        axios.get(`${BASE_URL}blog/getall`)
            .then((response) => {
                if (response.status === 200) {
                    var json = response.data;
                    dispatch({ "type": "STORE_DATA", "payload": { "data": json.data } });
                }
            })
            .catch((error) => {
                dispatch({ "type": "END" });
            })
    };
};

export const getSingleBlogData = (id) => {
    return (dispatch) => {
        axios.get(`${BASE_URL}blog/getbyid/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    var json = response.data.data;
                    console.log(json);
                    dispatch({ "type": "STORE_SINGLE", "payload": { "data": json } });
                }
            })
    };
};

export const insertBlog = (formData, navigate) => {
  return (dispatch) => {

    const token = sessionStorage.getItem('token');

    if (!token) {
      alert('No token found, please login first!');
      return;
    }

    axios.post(`${BASE_URL}blog/insert`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  // For handling file upload
        'Authorization': `Bearer ${token}`  // Send the token in the Authorization header
      }
    })
    .then(response => {
      if (response.status === 200) {
        alert('Blog inserted successfully!');
        navigate('/'); 
      }
    })
    .catch(error => {
      console.error('Error inserting blog:', error);
      alert('Error inserting blog. Please try again!');
    });
  };
};

// Update Blog Action
export const updateBlog = (id, formData, navigate) => {
  return (dispatch) => {
    const token = sessionStorage.getItem("token"); 

    if (!token) {
      alert("You must be logged in to perform this action.");
      return;
    }

    // Add token in headers for authentication
    axios
      .put(`${BASE_URL}blog/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
          Authorization: `Bearer ${token}`, 
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert(response.data.message);
          navigate("/"); 
        }
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        alert("There was an error updating the blog.");
      });
  };
};

export const deleteBlog = (id) => {
  return (dispatch) => {
    const token = sessionStorage.getItem("token"); // Retrieve token from sessionStorage

    if (!token) {
      alert("You must be logged in to perform this action.");
      return;
    }


    axios.delete(`${BASE_URL}blog/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert(response.data.message); 
          dispatch({ type: "DELETE_BLOG", payload: id }); 
        }
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        alert("There was an error deleting the blog.");
      });
  };
};
