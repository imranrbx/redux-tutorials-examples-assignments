import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
const el = document.querySelector('#root');
render(
	<Provider store={store}>
		<App />
	</Provider>,
	el,
);
