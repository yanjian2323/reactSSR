import React, { Component } from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';
import { actions } from './store';

let renderList = (list) => {
	return list.map((item) => {
		return <p key={item.id}>{item.title}</p>;
	});
};

class Home extends Component {
	render () {
		return (
			<div>
				<Header />
				<p>this is home page,name is {this.props.name}</p>
				<button onClick={() => alert(1)}>click me</button>
				{renderList(this.props.list)}
			</div>
		);
	}
	componentDidMount () {
		if (!this.props.list.length)
			this.props.getList();
	}
}

Home.loadData = (store) => {
	return store.dispatch(actions.getList());
};

let mapStateToProps = (state) => ({
	name: state.home.name,
	list: state.home.list
});

let mapDispatchToProps = (dispatch) => ({
	getList: () => {
		return dispatch(actions.getList());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);