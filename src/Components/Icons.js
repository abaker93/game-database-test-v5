import React from 'react';

const getViewBox = name => {
	switch (name) {
		case "caret":
			return "0 0 50 50";
		case "filter":
			return "0 0 50 50";
		case "group":
			return "0 0 50 50";
		case "hide":
			return "0 0 50 50";
		case "logo":
			return "0 0 500 360.4";
		case "menu":
			return "0 0 50 50";
		case "more":
			return "0 0 50 50";
		case "palette":
			return "0 0 50 50";
		case "row-height":
			return "0 0 50 50";
		case "search":
			return "0 0 50 50";
		case "share":
			return "0 0 50 50";
		case "sort":
			return "0 0 50 50";
		case "toggle":
			return "0 0 50 50";
		case "user":
			return "0 0 50 50";
		case "view--grid":
			return "0 0 50 50";
		default:
			return "0 0 50 50";
	}
};

const getPath = (name, props) => {
	switch (name) {
		case "caret":
			return <path {...props} d="M25 35 5 15H45Z" />;
		case "filter":
			return <path {...props} d="M38.3 27.2H11.7V22.8H38.3ZM29.4 38.3V33.9H20.6v4.4ZM5 16.1H45V11.7H5Z" />;
		case "group":
			return <path {...props} d="M40,10H10V7.52H5v5H7.48V37.47H5v5h5V40H40v2.48h5v-5H42.44V12.53H45v-5H40ZM13.44,27.52a.92.92,0,0,1-.92-.92V15.92a.92.92,0,0,1,.92-.92H26.56a.92.92,0,0,1,.92.92V26.6a.92.92,0,0,1-.92.92H13.44Zm24.06,6.6a.92.92,0,0,1-.92.92H23.46a.92.92,0,0,1-.92-.92V30h5.62A1.84,1.84,0,0,0,30,28.13V22.52h6.58a.92.92,0,0,1,.92.92Z" />;
		case "hide":
			return <path {...props} d="M45,24.08a21.11,21.11,0,0,1-6.24,8.64L33.44,27.4A9.06,9.06,0,0,0,25,15a9.25,9.25,0,0,0-3.32.64l-3.92-3.92A20.57,20.57,0,0,1,25,10.44,21.51,21.51,0,0,1,45,24.08Zm-20-5.4h-.32l5.72,5.72,0-.28A5.45,5.45,0,0,0,25,18.68ZM11.8,15,11,14.2,6.8,10,9.12,7.72,41.36,40,39,42.28,33.72,37,33,36.2a21.85,21.85,0,0,1-8,1.52A21.51,21.51,0,0,1,5,24.08,21.57,21.57,0,0,1,11.8,15Zm4.08,9A9.07,9.07,0,0,0,25,33.12a8.94,8.94,0,0,0,4-1l-2.8-2.8a4.13,4.13,0,0,1-1.2.16,5.45,5.45,0,0,1-5.44-5.44,6.18,6.18,0,0,1,.16-1.2l-2.8-2.8A9.66,9.66,0,0,0,15.88,24Z" />;
		case "logo":
			return <path {...props} d="M499.7 82.2c0-7.5-4.1-14.4-10.6-18L378.7 2.6C372.2-1 364.3-0.9 358 2.9l-97 57.8c-6.4 3.8-14.4 3.9-20.9 0.2L139.9 3.5c-6.5-3.7-14.5-3.7-20.9 0.2L10.1 68.5C3.8 72.3 0 79 0 86.4l0.3 123.3c0 7.5 4 14.3 10.6 18l230.8 130c6.3 3.6 14.1 3.6 20.4-0.1L489.5 228c6.5-3.7 10.5-10.6 10.5-18.1L499.7 82.2zM460.1 102.2l-75.6 43.9c-6.2 3.6-13.9-0.9-13.9-8l-0.2-87.4c0-7.1 7.7-11.6 13.9-8L460 86.1C466.2 89.7 466.2 98.6 460.1 102.2z" />;
		case "menu":
			return <path {...props} d="M5 38.3H45V33.9H5ZM5 27.2H45V22.8H5ZM5 11.7v4.4H45V11.7Z" />;
		case "more":
			return <path {...props} d="M10 20a5 5 0 1 0 5 5A5 5 0 0 0 10 20Zm30 0a5 5 0 1 0 5 5A5 5 0 0 0 40 20ZM25 20a5 5 0 1 0 5 5A5 5 0 0 0 25 20Z" />;
		case "palette":
			return <path {...props} d="M25 5a20 20 0 0 0 0 40 3.3 3.3 0 0 0 3.3-3.3 3.4 3.4 0 0 0-0.9-2.2A3.3 3.3 0 0 1 30 33.9h3.9A11.1 11.1 0 0 0 45 22.8C45 13 36 5 25 5ZM12.8 25a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 12.8 25Zm6.7-8.9a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 19.4 16.1Zm11.1 0a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 30.6 16.1ZM37.2 25a3.3 3.3 0 1 1 3.3-3.3A3.3 3.3 0 0 1 37.2 25Z" />;
		case "row-height":
			return <path {...props} d="M5 33.6H29.3V30.2H5Zm0 5.2H29.3V37.1H5ZM5 26.7H29.3V21.6H5Zm0-15.5v6.9H29.3V11.2Zm35.4 6.1H45l-6.1-6.1-6.1 6.1h4.6V32.7H32.8l6.1 6.1L45 32.7H40.4Z" />;
		case "search":
			return <path {...props} d="M31.8,30.16l-.64-.6a14.92,14.92,0,1,0-1.6,1.6l.6.64v1.8L41.6,45,45,41.6,33.6,30.16Zm-11.92,0A10.28,10.28,0,1,1,30.16,19.88,10.28,10.28,0,0,1,19.88,30.16Z" />;
		case "share":
			return <path {...props} d="M40.6 40.6H9.4V9.4H25V5H9.4A4.4 4.4 0 0 0 5 9.4V40.6A4.4 4.4 0 0 0 9.4 45H40.6A4.5 4.5 0 0 0 45 40.6V25H40.6ZM29.4 5V9.4h8L15.6 31.3l3.1 3.1L40.6 12.6v8H45V5Z" />;
		case "sort":
			return <path {...props} d="M41 21H9L25 5ZM25 45 41 29H9Z" />;
		case "toggle":
			return <path {...props} d="M35 15H15a10 10 0 0 0 0 20H35a10 10 0 0 0 0-20ZM15 33a8 8 0 1 1 8-8A8 8 0 0 1 15 33Z" />;
		case "user":
			return <path {...props} d="M8.1 35.9c0.1-2.6 2-4.6 5.9-6.3a28.1 28.1 0 0 1 11-2.4 27.6 27.6 0 0 1 11 2.5c3.9 1.7 5.8 3.8 5.9 6.2Q35.7 45 25 45T8.1 35.9ZM25 21.9a8.2 8.2 0 0 0 6-2.5 8.1 8.1 0 0 0 2.5-6 8.2 8.2 0 0 0-2.5-6A8.4 8.4 0 0 0 25 5a8.2 8.2 0 0 0-6 2.5 8.1 8.1 0 0 0-2.5 6A8.5 8.5 0 0 0 25 21.9Z" />;
		case "view--grid":
			return <path {...props} d="M43 5H7A2 2 0 0 0 5 7V43a2 2 0 0 0 2 2H43a2 2 0 0 0 2-2V7A2 2 0 0 0 43 5ZM18 42H8V32H18Zm0-12H8V20H18Zm0-12H8V8H18ZM42 42H20V32H42Zm0-12H20V20H42Zm0-12H20V8H42Z" />;
		default:
			return <path />;
	}
}

const Icon = ({
	name = "",
	style = {},
	fill = "#000",
	viewBox = "",
	width = "",
	className = "",
	height = ""
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