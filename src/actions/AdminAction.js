import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const adminLogin = (params, navigate) => {
    return (dispatch) => {
        console.log("Login params:", params);
        axios.post(`${BASE_URL}admin/login`, params)
            .then((response) => {
                console.log("Login response:", response);
                if (response.status == 200) {
                    var json = response.data;
                    if (json["status"] == true) {
                        var message = json["message"];
                        alert(message);
                        sessionStorage.setItem("adminlogin", true);
                        sessionStorage.setItem("token", json.data.token)
                        dispatch({ "type": "LOGIN", "payload": { "data": json["data"].admin || [] } });
                        navigate("/");
                    } else {
                        var message = json["message"];
                        alert(message);
                    }
                }
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };
};

export const getAdminProfile = () => {
  return (dispatch) => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to access this page.");
      return;
    }

    axios.get(`${BASE_URL}admin/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: "SET_ADMIN_PROFILE", payload: response.data.data });
        }
      })
      .catch((error) => {
        console.error("Error fetching admin profile:", error);
        alert("There was an error fetching your profile.");
      });
  };
};