import React from 'react';

const getViewBox = name => {
	switch (name) {
		case "logo":
			return "0 0 500 360.4";
		case "palette":
			return "0 0 50 50";
		case "user":
			return "0 0 50 50";
		default:
			return "0 0 50 50";
	}
};

const getPath = (name, props) => {
	switch (name) {
		case "logo":
			return (
				<path
					{...props}
					d="M499.7 82.2c0-7.5-4.1-14.4-10.6-18L378.7 2.6C372.2-1 364.3-0.9 358 2.9l-97 57.8c-6.4 3.8-14.4 3.9-20.9 0.2L139.9 3.5c-6.5-3.7-14.5-3.7-20.9 0.2L10.1 68.5C3.8 72.3 0 79 0 86.4l0.3 123.3c0 7.5 4 14.3 10.6 18l230.8 130c6.3 3.6 14.1 3.6 20.4-0.1L489.5 228c6.5-3.7 10.5-10.6 10.5-18.1L499.7 82.2zM460.1 102.2l-75.6 43.9c-6.2 3.6-13.9-0.9-13.9-8l-0.2-87.4c0-7.1 7.7-11.6 13.9-8L460 86.1C466.2 89.7 466.2 98.6 460.1 102.2z"
				/>
			);
		case "palette":
			return (
				<path
					{...props}
					d="M25 5a20 20 0 0 0 0 40 3.3 3.3 0 0 0 3.3-3.3 3.4 3.4 0 0 0-0.9-2.2A3.3 3.3 0 0 1 30 33.9h3.9A11.1 11.1 0 0 0 45 22.8C45 13 36 5 25 5ZM12.8 25a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 12.8 25Zm6.7-8.9a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 19.4 16.1Zm11.1 0a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 30.6 16.1ZM37.2 25a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 37.2 25Z"
				/>
			);
		case "user":
			return (
				<path
					{...props}
					d="M8.1 35.9c0.1-2.6 2-4.6 5.9-6.3a28.1 28.1 0 0 1 11-2.4 27.6 27.6 0 0 1 11 2.5c3.9 1.7 5.8 3.8 5.9 6.2Q35.7 45 25 45T8.1 35.9ZM25 21.9a8.2 8.2 0 0 0 6-2.5 8.1 8.1 0 0 0 2.5-6 8.2 8.2 0 0 0-2.5-6A8.4 8.4 0 0 0 25 5a8.2 8.2 0 0 0-6 2.5 8.1 8.1 0 0 0-2.5 6A8.5 8.5 0 0 0 25 21.9Z"
				/>
			);
		default:
			return <path />;
	}
}

const Icon = ({
	name = "",
	style = {},
	fill = "#000",
	viewBox = "",
	width = "100%",
	className = "",
	height = "100%"
}) => (
	<svg
		width={width}
		height={height}
		style={style}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox={viewBox || getViewBox(name)}
		xmlnsXlink="http://www.w3.org/1999/xlink"
	>
		{getPath(name, { fill })}
	</svg>
);

export default Icon;