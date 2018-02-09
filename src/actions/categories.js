import instance from './AxiosInstance';
import { notify, error } from 'react-notify-toast';
import { ROOT_URL, CREATE_CATEGORY, FETCH_CATEGORIES, FETCH_CATEGORY } from '../constants';


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
    notify.show(request.response.data.message, 'success', 5000);
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

