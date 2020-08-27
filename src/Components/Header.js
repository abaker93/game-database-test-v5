import React from 'react';
import Icon from './Icons';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div id="logo">
					<Icon name="logo" fill="" className="icon" />
					<h1>Game Database Test V5</h1>
				</div>
				<ul id="header-right">
					<li>
						<Icon name="palette" fill="" className="icon icon__palette btn-icon" />
					</li>
					<li>
						<Icon name="user" fill="" className="icon icon__user btn-icon" />
					</li>
				</ul>
				<nav>
					<ul>
						<li id="tables">
							<Icon name="menu" fill="" className="icon icon__menu btn-icon" />
						</li>
						<li className="active">Totals</li>
						<li>Consoles</li>
						<li>Games</li>
						<li>Controllers</li>
						<li>Peripherals</li>
						<li>Amiibo</li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header;