import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createCar, createGarage} from './state';

let garage = createGarage();
garage.addCar(createCar("Mersedes", 2019));
garage.addCar(createCar("Audi", 2019));
garage.addCar(createCar("BMW", 2019));

const rerenderFullApp = () => {
    ReactDOM.render(<App garage={garage}/>, document.getElementById('root'))
};

rerenderFullApp();
garage.subscribe(rerenderFullApp);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
