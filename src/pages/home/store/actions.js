import axios from 'axios';
import { CHANGE_LIST } from './constants';

let changeList = (list) => ({
	type: CHANGE_LIST,
	list
});

export let getList = () => {
	return dispatch => {
		return axios.get('http://47.95.113.63/ssr/api/news.json?secret=D37msjPeC3')
		.then((res) => {
			let list = res.data.data;
			dispatch(changeList(list));
		});
	};
}

