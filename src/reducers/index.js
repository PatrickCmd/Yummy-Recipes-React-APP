import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';

/* reducers for the entire project */
const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer
});

export default rootReducer;