import RepositoryFactory from "../../repository/RepositoryFactory";
import { GET_POSTS, ADD_POSTS, GET_POST } from "../types";
const api = RepositoryFactory.get("posts");

export const getPosts = (payload = {}) => {
    return (dispatch) => {
        api.get(payload)
            .then(res => {
                dispatch({type: GET_POSTS, data: res.data})
            })
            .catch(err => console.log(err));
    }
}

export const getPost = (id) => {
    return (dispatch) => {
        api.show(id)
            .then(res => {
                dispatch({type: GET_POST, data: res.data})
            })
            .catch(err => console.log(err));
    }
}

export const createPosts = (payload = {}) => {
    return (dispatch) => {
        api.create(payload)
            .then(res => {
                dispatch({type: ADD_POSTS, data: res.data})
            })
            .catch(err => console.log(err));
    }
}
