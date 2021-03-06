import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes, renderRoutes } from 'react-router-config';
import routes from '../routes';
import proxy from 'express-http-proxy';
import Home from '../pages/home';
import { getStore } from '../store';

let app = express();
app.use(express.static('public'));

app.use('/api', proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
      return '/ssr/api' + req.url;
    }
  }));


// let getRoutes = () => {
// 	return routes.map(item => {
// 		return <Route {...item} />
// 	});
// }

let render = (store, req, res) => {
	let context = {};
	let content = renderToString((
		<Provider store={store}>
			<StaticRouter context={context} location={req.path}>
				<div>
					{renderRoutes(routes)}
				</div>
			</StaticRouter>
		</Provider>
	));
	const html = `
		<!DOCTYPE html>
		<html>
			<head></head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.context = ${JSON.stringify(store.getState())};
				</script>
				<script src="/index.js"></script>
			</body>
		</html>
	`;
	if (context.notFound) {
		res.status(400);
	} else if (context.action === 'REPLACE') {
		res.redirect(302, context.url);
		return;
	}
	res.send(html);
};

app.get('*', function (req, res) {
	let store = getStore(req);
	let branch = matchRoutes(routes, req.path);
	let promises = branch.map(({route}) => {
		if (route.loadData) {
			return new Promise((resolve, reject) => {
				route.loadData(store).then(resolve, resolve);
			});
		}
		return Promise.resolve();
	});
	Promise.all(promises).then(() => {
		render(store, req, res);
	});
});

app.listen(8080, function () {
	console.log('server is start, port is: 8080');
});