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
						<ul id="palette-menu" className="dropdown-content">
							<li className="colors">
								<ul>
									<li id="teal" className="bg-teal active" onClick="changeColorPalette('teal')"></li>
									<li id="lt-blue" className="bg-lt-blue" onClick="changeColorPalette('lt-blue')"></li>
									<li id="blue" className="bg-blue" onClick="changeColorPalette('blue')"></li>
									<li id="purple" className="bg-purple" onClick="changeColorPalette('purple')"></li>
									<li id="pink" className="bg-pink" onClick="changeColorPalette('pink')"></li>
									<li id="red" className="bg-red" onClick="changeColorPalette('red')"></li>
									<li id="yellow" className="bg-yellow" onClick="changeColorPalette('yellow')"></li>
								</ul>
							</li>
							<li className="options">
								<ul>
									<li>
										<Icon name="toggle" fill="" className="icon" />
										<span>Dark mode</span>
									</li>
								</ul>
							</li>
						</ul>
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