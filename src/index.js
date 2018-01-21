import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import Navbar from './components/universal/navbar';
import Carousel from './components/universal/carousel';
import Homepage from './components/homepage';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <Router>
            <div>
                <Navbar />
                <Carousel />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                </Switch>
            </div>
        </Router>
    </Provider>, 
    document.querySelector('#root')
);
registerServiceWorker();
