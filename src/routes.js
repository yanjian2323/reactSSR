import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Translation from './pages/translation';
import NotFound from './pages/404';

// let routes = (
// 	<div>
// 		<Route path="/" exact component={Home} />
// 		<Route path="/login" exact component={Login} />
// 	</div>
// );

// let routes = [{
// 	key: 'home',
// 	path: "/",
// 	exact: true,
// 	component: Home,
// 	loadData: Home.loadData
// }, {
// 	key: 'login',
// 	path: "/login",
// 	exact: true,
// 	component: Login
// }];

// 配置多级路由
const routes = [{
	key: 'root',
	path: '/',
	component: App,
	loadData: App.loadData,
	routes: [{
		key: 'home',
		path: "/",
		exact: true,
		component: Home,
		loadData: Home.loadData
	}, {
		key: 'translation',
		path: "/translation",
		exact: true,
		component: Translation,
		loadData: Translation.loadData
	}, {
		key: 'notfound',
		component: NotFound
	}]
}];
export default routes;