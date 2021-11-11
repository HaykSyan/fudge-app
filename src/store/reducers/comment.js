import { GET_COMMENTS } from "../types";

const initState = {
    comments: []
};

const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.data,
            }
        default:
            return { ...state };
    }
};

export default commentsReducer;
