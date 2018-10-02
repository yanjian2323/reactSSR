import React, { Fragment } from 'react';
import Header from './components/header';
import { renderRoutes } from 'react-router-config';

import { actions } from './components/header/store';

let App = (props) => {
	return (
		<Fragment>
			<Header />
			{renderRoutes(props.route.routes)}
		</Fragment>
	);
};

App.loadData = (store) => {
	return store.dispatch(actions.isLogin());
};

export default App;