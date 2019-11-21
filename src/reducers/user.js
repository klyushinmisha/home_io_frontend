export default function user(state = {}, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}