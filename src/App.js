import React, { Fragment } from 'react';
import Header from './components/header';
import { renderRoutes } from 'react-router-config';

let App = (props) => {
	return (
		<Fragment>
			<Header />
			{renderRoutes(props.route.routes)}
		</Fragment>
	);
};

export default App;