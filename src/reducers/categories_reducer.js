import _ from 'lodash';

import { FETCH_CATEGORIES, UNAUTHENTICATED } from '../constants';

export default (state = {}, action) => {
    switch(action.type) {
        case "FETCHING":
            return null
        case FETCH_CATEGORIES:
            return _.mapKeys(action.payload.data.recipe_categories, "id") // using lodash mapKeys to covert an array to an object
        case UNAUTHENTICATED:
            return {  ...state,  categories: {} };
        default:
            return state
    }
}