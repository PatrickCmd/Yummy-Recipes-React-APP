import _ from 'lodash';

import { FETCH_RECIPES, UNAUTHENTICATED } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case "FETCHING":
            return null
        case FETCH_RECIPES:
            return  _.mapKeys(action.payload.data.recipes, "id"); // using lodash mapKeys to covert an array to an object
        case UNAUTHENTICATED:
            return {  ...state, recipes: {} };
        default:
            return state
    }
}