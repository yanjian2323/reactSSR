import React from 'react';
import ReactDom from 'react-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from '../routes';
import { getClientStore } from '../store';

// let getRoutes = () => {
// 	return routes.map(item => {
// 		return <Route {...item} />
// 	});
// }

let App = () => {
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter>
				<div>
					{renderRoutes(routes)}
				</div>
			</BrowserRouter>
		</Provider>
	);
};

ReactDom.hydrate(<App />, document.getElementById('root'));

