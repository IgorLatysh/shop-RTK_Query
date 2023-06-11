import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

import App from './App';

import store from "./store";

import "./index.css"
import "../src/styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);