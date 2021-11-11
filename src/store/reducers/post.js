import { GET_POSTS, GET_POST, ADD_COMMENTS } from "../types";

const initState = {
    posts: [],
    post: null,
};

const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.data
            }
        case GET_POST:
            return {
                ...state,
                post: action.data
            }
        case ADD_COMMENTS: 
            const post = JSON.parse(JSON.stringify({...state.post}));
            post.comments.push(action.data);
            return {
                ...state,
                post: post,
            }
        default:
            return { ...state };
    }
};

export default postsReducer;
