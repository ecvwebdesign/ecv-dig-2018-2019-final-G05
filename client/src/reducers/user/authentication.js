import { combineReducers } from 'redux'
import {
    LOGIN,
    LOGOUT,
} from '../../actions/user/authentication'

export function authentication(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                loggedUser: action.loggedUser
            })
        case LOGOUT:
            return Object.assign({}, state, {
                loggedUser: null
            })
        default:
            return state
    }
}
export default combineReducers({ authentication });

