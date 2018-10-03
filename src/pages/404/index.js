import React, { Component } from 'react';

class NotFound extends Component {
	componentWillMount () {
		// 判断是否在服务端，客户端不执行这个代码
		if (this.props.staticContext) {
			this.props.staticContext.notFound = true;
		}
	}
	render () {
		return <div className="not-found">the page is not found</div>;
	}
}

export default NotFound;