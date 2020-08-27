import React from 'react';
import Icon from './Icons';

class Sort extends React.Component {
	render() {
		return (
			<section id="sort">
				<ul className="sort-nav">
					<li className="sort-nav__view">
						<button className="sort-button">
							<Icon name="caret" fill="" className="icon icon__caret" />
							<Icon name="view--grid" fill="" className="icon icon__view--grid" />
							<span>Master view</span>
						</button>
						<ul id="sort-nav__view--menu" className="hidden">
							<li className="search">
								<form>
									<input type="search" placeholder="Find a view" name="sort-nav__view--search" />
								</form>
							</li>
							<li className="options">
								<ul>
									<li>
										<Icon name="view--grid" fill="" className="icon icon__view--grid" />
										<span>Master View</span>
									</li>
									<li>
										<Icon name="view--grid" fill="" className="icon icon__view--grid" />
										<span>Behind the Scenes</span>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="sort-nav__hidden">
						<button className="sort-button active">
							<Icon name="hide" fill="" className="icon" />
							<span>16 hidden fields</span>
						</button>
						<ul id="sort-nav__hidden--menu" className="hidden">
							<li className="search">
								<form>
									<input type="search" placeholder="Find a field" name="sort-nav__hidden--search" />
								</form>
							</li>
							<li className="options">
								<ul>
									{
										this.props.tableHeaders.map(header => {
											return (
												<li>
													<Icon name={header.type}
														  fill="" 
														  className="icon"
													/>
													<span>{header.name}</span>
												</li>
											)
										})
									}
								</ul>
							</li>
						</ul>
					</li>
					<li className="sort-nav__filter">
						<button className="sort-button active">
							<Icon name="filter" fill="" className="icon" />
							<span>2 filters</span>
						</button>
					</li>
					<li className="sort-nav__group">
						<button className="sort-button active">
							<Icon name="group" fill="" className="icon" />
							<span>Grouped by 1 field</span>
						</button>
					</li>
					<li className="sort-nav__sort">
						<button className="sort-button active">
							<Icon name="sort" fill="" className="icon" />
							<span>Sorted by 1 field</span>
						</button>
					</li>
					<li className="sort-nav__row-height">
						<button className="sort-button">
							<Icon name="row-height" fill="" className="icon" />
						</button>
					</li>
					<li className="sort-nav__share">
						<button className="sort-button">
							<Icon name="share" fill="" className="icon" />
						</button>
					</li>
					<li className="sort-nav__search">
						<button className="sort-button">
							<Icon name="search" fill="" className="icon" />
						</button>
					</li>
					<li className="sort-nav__more">
						<button className="sort-button">
							<Icon name="more" fill="" className="icon" />
						</button>
					</li>
				</ul>
			</section>
		)
	}
}

export default Sort;