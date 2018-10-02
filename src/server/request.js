import axios from 'axios';
import config from '../config';

export default (req) => {
	return axios.create({
		baseURL: 'http://47.95.113.63/ssr/',
		// 解决在服务端axios发送请求时不能携带客户端cookie的问题
		headers: {
			cookie: req.get('cookie') || ''
		},
		params: {
			secret: config.secret
		}
	});
};