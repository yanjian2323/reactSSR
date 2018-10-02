import { CHANGE_LIST } from './constants';

let changeList = (list) => ({
	type: CHANGE_LIST,
	list
});

export let getList = () => {
	// 这个地方的axios是在createStore的时候通过thunk注入进来的
	return (dispatch, getState, axios) => {
		return axios.get('/api/news.json')
		.then((res) => {
			let list = res.data.data;
			dispatch(changeList(list));
		});
	};
}

