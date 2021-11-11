import { GET_USER, GET_USERS } from "../types";

const initState = {
    users: [],
    user: {},
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.data,
            }
        case GET_USER:
            return {
                ...state,
                user: action.data,
            }
        default:
            return { ...state };
    }
};

export default usersReducer;
