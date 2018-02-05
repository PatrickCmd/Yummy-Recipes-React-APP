import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import categoryReducer from './category_reducer';
import recipeReducer from './recipes_reducer';

/* reducers for the entire project */
const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    categories: categoryReducer,
    recipes: recipeReducer
});

export default rootReducer;