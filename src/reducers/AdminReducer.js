const initialState = {
    "adminData": [],
    "islogin": "",
    "adminProfile": null,
};

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                "islogin": true,
                "adminData": action.payload.data
            };
        case "LOGOUT":
            return {
                ...state,
                "islogin": false,
                "adminData": null
            };
        case "SET_ADMIN_PROFILE":
            return {
                ...state,
                adminProfile: action.payload,
            };
        default:
            return state;
    }
};

export default AdminReducer;
