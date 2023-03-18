import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {peopleStore} from "./components/peopleStore/peopleStore"
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={peopleStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)