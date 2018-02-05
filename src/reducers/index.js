import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import categoriesReducer from './categories_reducer';
import categoryReducer from './category_reducer';
import recipesReducer from './recipes_reducer';
import recipeReducer from './recipe_reducer';

/* reducers for the entire project */
const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    categories: categoriesReducer,
    category: categoryReducer,
    recipes: recipesReducer,
    recipe: recipeReducer
});

export default rootReducer;