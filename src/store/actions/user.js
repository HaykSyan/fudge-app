import RepositoryFactory from "../../repository/RepositoryFactory";
import { GET_USERS, GET_USER } from "../types";
const api = RepositoryFactory.get("users");

export const getUsers = (payload = {}) => {
    return (dispatch) => {
        api.get(payload)
            .then(res => {
                dispatch({type: GET_USERS, data: res.data})
            })
            .catch(err => console.log(err));
    }
}

export const getUser = (payload = {}) => {
    return (dispatch) => {
        api.show(payload = 1)
            .then(res => {
                dispatch({type: GET_USER, data: res.data})
            })
            .catch(err => console.log(err));
    }
}