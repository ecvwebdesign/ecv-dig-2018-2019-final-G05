export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(loggedUser) {
    return {
        type: LOGIN,
        loggedUser
    }
}
export function logout() {
    return {
        type: LOGOUT,
    }
}