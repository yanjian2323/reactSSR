import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actions } from './store';

function getList (list) {
	return list.map((item) => {
		return <div key={item.id}>{item.title}</div>;
	});
}

class Translation extends Component {
	render () {
		const { list, isLogin } = this.props;
		return (
			isLogin ? 
			<div className="traslation">
				{getList(list)}
			</div> 
			: <Redirect to="/" />
		);
	}
	componentDidMount () {
		if (!this.props.list.length) {
			this.props.getTranlationList();
		}
	}
}

Translation.loadData = (store) => {
	return store.dispatch(actions.getTranlationList());
};

const mapStateToProps = (state) => ({
	list: state.translation.list,
	isLogin: state.header.isLogin
});

const mapDispathToProps = (dispatch) => ({
	getTranlationList () {
		dispatch(actions.getTranlationList());
	}
});

export default connect(mapStateToProps, mapDispathToProps)(Translation);