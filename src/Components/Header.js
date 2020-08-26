import React from 'react';
import Icon from './Icons';

class Header extends React.Component {
	render() {
		return (
			<div>
				<header>
					<div id="logo">
						<Icon name="logo" fill="#666" />
						<h1>Game Database Test V5</h1>
					</div>
				</header>
			</div>
		)
	}
}

export default Header;