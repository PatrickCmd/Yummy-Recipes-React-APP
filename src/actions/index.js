import axios from 'axios';
import jwt from 'jsonwebtoken';

import instance from './AxiosInstance';
import { ROOT_URL } from '../constants';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATED_ERROR = 'authenticated_error';
export const REGISTER = 'register_user';
export const USER_ALREADY_EXISTS = 'user_already_exists';
export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_CATEGORY = 'fetch_category';
export const FETCH_CATEGORY_RECIPES = 'fetch_category_recipes';
export const FETCH_RECIPES = 'fetch_recipes';
export const FETCH_RECIPE = 'fetch_recipe';
export const CREATE_CATEGORY = 'create_category';
export const CREATE_RECIPE = 'create_recipe';

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
    

/* action creator for creating new categories 
    takes in form data values and callback method
    executed after submition 
*/
export const createCategory = (values, callback) => {
    const request = instance.post(`${ROOT_URL}/recipe_category`, values)
        .then(() => callback());
    
    return {
        type: CREATE_CATEGORY,
        payload: request
    }
}

export const createRecipe = (values, cat_id, callback) => {
    const request = instance.post(`${ROOT_URL}/recipe_category/${cat_id}/recipes`, values)
        .then(() => callback());
    
    return {
        type: CREATE_RECIPE,
        payload: request
    }
}

export const fetching = () => {
    return {
        type: "FETCHING"
    }
}

export const fetchCat = (res) => {
    return {
        type: FETCH_CATEGORIES,
        payload: res,
    }
}

// action creator for fetching categories from the database
export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(fetching);
            const request = await instance.get(`${ROOT_URL}/recipe_category`);

            dispatch(fetchCat(request));
        }catch(error) {
            dispatch({
                type: "UNAUTHENTICATED",
                payload: "Invalid authentication credentials"
            });
        }
    }
}

// action creator for fetching single category
export const fetchCategory = (id) =>{
    return async (dispatch) => {
        try {
            const request = await instance.get(`${ROOT_URL}/recipe_category/${id}`);
            console.log(request);
            
            dispatch({
                type: FETCH_CATEGORY,
                payload: request
            });
        }catch(error) {
            dispatch({
                type: "UNAUTHENTICATED",
                payload: "Invalid or expired token please login again"
            })
        }
    }

}


export const fetchRec = (res) => {
    return {
        type: FETCH_RECIPES,
        payload: res,
    }
}

// action creator for fetching recipes from the database
export const fetchRecipes = () => {
    return async (dispatch) => {
        try {
            dispatch(fetching);
            const request = await instance.get(`${ROOT_URL}/recipes`);

            dispatch(fetchRec(request));
        }catch(error) {
            dispatch({
                type: "UNAUTHENTICATED",
                payload: "Invalid authentication credentials"
            });
        }
    }
}

// action creator for fetching recipes in category from the database
export const fetchCategoryRecipes = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetching);
            const request = await instance.get(`${ROOT_URL}/recipe_category/${id}/recipes`);

            dispatch({
                type: FETCH_CATEGORY_RECIPES,
                payload: request,
            });
        }catch(error) {
            dispatch({
                type: "UNAUTHENTICATED",
                payload: "Invalid authentication credentials"
            });
        }
    }
}

// action creator for fetching single recipe
export const fetchRecipe = (cat_id, recipe_id) =>{
    return async (dispatch) => {
        try {
            const request = await instance.get(`${ROOT_URL}/recipe_category/${cat_id}/recipes/${recipe_id}`);
            console.log(request);
            
            dispatch({
                type: FETCH_RECIPE,
                payload: request
            });
        }catch(error) {
            dispatch({
                type: "UNAUTHENTICATED",
                payload: "Invalid or expired token please login again"
            })
        }
    }

}