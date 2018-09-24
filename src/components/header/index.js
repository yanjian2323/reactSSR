import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => {
	return (
		<div className="header">
			<Link to="/">首页&nbsp;</Link>
			<Link to="/login">登陆</Link>
		</div>
	);
};

export default Header;