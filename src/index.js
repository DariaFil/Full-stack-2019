import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from "./routers";
import {storeFactory} from "./reducers";
import {Provider} from 'react-redux';

const initialState = {
    user: {
        login: "random_fox",
        email: "",
        avatar: null,
        status: "",
    },

};


const store = storeFactory(initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

