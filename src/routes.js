import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Login from './pages/login';

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
	routes: [{
		key: 'home',
		path: "/",
		exact: true,
		component: Home,
		loadData: Home.loadData
	}, {
		key: 'login',
		path: "/login",
		exact: true,
		component: Login
	}]
}];
export default routes;