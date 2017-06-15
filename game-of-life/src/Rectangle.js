import React from 'react';
import {Rect} from 'react-konva';

export default class Rectangle extends React.Component {


	render() {
		const {isOn, x, y, width, height, onClick} = this.props

		return (
			<Rect
				x={x} y={y} width={width} height={height}
				fill={isOn ? 'black' : 'white'}
				onClick={onClick}
			/>
		);
	}
}