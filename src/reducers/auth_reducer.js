import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATED_ERROR } from '../actions';

export default (state={}, action) => {
    switch(action.type) {
        case AUTHENTICATED:
            return { ...state, authenticated: true };
        case UNAUTHENTICATED:
            return {  ...state,  authenticated: false };
        case AUTHENTICATED_ERROR:
            return { ...state, error: action.payload };
    }
    return state;
}