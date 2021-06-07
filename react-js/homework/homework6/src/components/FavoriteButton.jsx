import React from 'react';
import PropTypes from 'prop-types';
import '../assets/FavoriteButton.scss';

export const FavoriteButton = ({ width, height, fill, viewBox, xmlns, d, onClick }) => {

	return (
		<button
			className="Favorite__Btn"
			onClick={onClick}
		>
			<svg
				width={width}
				height={height}
				fill="none"
				viewBox={viewBox}
				xmlns={xmlns}
			>
				<path
					d={d}
					fill={fill}
				/>
			</svg>
		</button>
	)
}

FavoriteButton.defaultProps = {
	width: "30",
	height: "30",
	fill: "gold",
	viewBox: "0 0 20 20",
	xmlns: "http://www.w3.org/2000/svg",
}

FavoriteButton.propTypes = {
	onClick: PropTypes.func,
	d: PropTypes.string,
}