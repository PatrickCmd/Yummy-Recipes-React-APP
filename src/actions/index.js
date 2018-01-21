import axios from 'axios';

import { ROOT_URL } from '../constants';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATED_ERROR = 'authenticated_error';

export const signInAction = ({ email, password }, history) => {
    return async (dispatch) => {
        try {
            const request = await axios.post(`${ROOT_URL}/auth/login`, { email, password });

            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('current_user', request.data.auth_token);
            //history.push('/');
            console.log("logged in")
        }catch(error){
            dispatch({
                type: AUTHENTICATED_ERROR,
                payload: 'Invalid email or password'
            });
        }
    }
}