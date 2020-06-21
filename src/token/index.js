const DEFAULT_TOKEN_STATE = {
    token: localStorage.getItem("token"),
}


//reduceriai visada gauna state ir action

function tokenReducer(state = DEFAULT_TOKEN_STATE, action) {
    switch (action.type) {
        case "SET_TOKEN": {
            return { ...state, token: action.token }
        }
        default:
            return state;
    }
}




export default tokenReducer;