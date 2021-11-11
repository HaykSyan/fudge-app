import RepositoryFactory from "../../repository/RepositoryFactory";
import { GET_COMMENTS, ADD_COMMENTS } from "../types";
const api = RepositoryFactory.get("comments");

export const getComments = (payload = {}) => {
    return (dispatch) => {
        api.get(payload)
            .then(res => {
                dispatch({type: GET_COMMENTS, data: res.data})
            })
            .catch(err => console.log(err));
    }
}

export const createComments = (payload = {}) => {
    return (dispatch) => {
        api.create(payload)
            .then(res => {
                dispatch({type: ADD_COMMENTS, data: res.data})
            })
            .catch(err => console.log(err));
    }
}
