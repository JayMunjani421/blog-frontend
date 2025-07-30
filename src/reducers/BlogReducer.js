const initialState = {
    "Blog_data": [],
    "loading": false,
    "single": null,
    "message": ""
};

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START":
            return {
                ...state,
                "loading": true
            };
        case "END":
            return {
                ...state,
                "loading": false
            };
        case "STORE_DATA":
            return {
                ...state,
                Blog_data: action.payload.data,
                "loading": false
            };
        case "SHOW_MESSAGE":
            return {
                ...state,
                message: action.payload.message,
            }
        case "STORE_SINGLE":
            return {
                ...state,
                single: action.payload.data,
                "loading": false
            };
        case "DELETE_BLOG":
            return {
                ...state,
                Blog_data: state.Blog_data.filter((blog) => blog.blog_id !== action.payload),
            };
        default:
            return state;
    }
};

export default BlogReducer;