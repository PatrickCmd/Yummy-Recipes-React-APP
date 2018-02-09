import axios from 'axios';
import jwt from 'jsonwebtoken';

import instance from './AxiosInstance';
import { ROOT_URL, REGISTER, USER_ALREADY_EXISTS, AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATED_ERROR } from '../constants';

// action creator for signing in user
export const login = (res) => {
    return {
        type: AUTHENTICATED, 
        user: jwt.decode(res.data.auth_token),
        payload: res
    }
}

export const signInAction = ({ email, password }, history) => {
    return async (dispatch) => {
        try {
            const request = await axios.post(`${ROOT_URL}/auth/login`, { email, password });

            dispatch({ 
                type: AUTHENTICATED, 
                user: jwt.decode(request.data.auth_token),
                payload: request
             });
            localStorage.setItem('current_user', request.data.auth_token);
            history.push('/dashboard');
        }catch(error){
            dispatch({
                type: AUTHENTICATED_ERROR,
                payload: 'Invalid email or password'
            });
        }
    }
}

// action creator for signing up user
export const signUpAction = (values, callback) => {
    return async (dispatch) => {
        try {
            const request = await axios.post(`${ROOT_URL}/auth/register`, values);
            dispatch({
                type: REGISTER,
                payload: request
            });
            callback();
        }catch(error) {
            dispatch({
                type: USER_ALREADY_EXISTS,
                payload: 'User already exists'
            })
        }
    }
}

// logging/signing out user
export const signOutAction = () => {
    return async (dispatch) => {
        try {
            const request = await instance.post(`${ROOT_URL}/auth/logout`);
            localStorage.clear();
            dispatch({
                type: UNAUTHENTICATED,
                payload: request
            });
        }catch(error){
            dispatch({
                type: AUTHENTICATED_ERROR,
                payload: 'Invalid token, please login again!'
            });
        }
    }
}
