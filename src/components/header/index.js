import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from './store';

class Header extends Component {
	componentWillMount () {
		
	}
	render () {
		const { isLogin, login, logout } = this.props;
		return (
			<div className="header">
				<Link to="/">首页&nbsp;</Link>
				{ isLogin ? (
					<div>
						<Link to="/translation">翻译列表</Link>
						<a href="#" onClick={logout}>&nbsp;退出</a>
					</div>
				) : (
					<div>
						<a href="#" onClick={login}>登陆</a>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogin: state.header.isLogin
});

const mapDispathToProps = (dispatch) => ({
	login () {
		dispatch(actions.login());
	},
	logout () {
		dispatch(actions.logout());
	}
});

export default connect(mapStateToProps, mapDispathToProps)(Header);