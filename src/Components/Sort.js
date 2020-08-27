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
					</li>
					<li className="sort-nav__hidden">
						<button className="sort-button active">
							<Icon name="hide" fill="" className="icon" />
							<span>16 hidden fields</span>
						</button>
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