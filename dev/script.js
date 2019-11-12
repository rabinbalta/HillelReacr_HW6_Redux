import React, { Component } from 'react';

import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';

import List from './components/List';

import Form from './components/Form';

import store from './store';

const App = () => (
	<Provider store={store}>
		<div>
			<Form />
			<List />
		</div>
	</Provider>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);