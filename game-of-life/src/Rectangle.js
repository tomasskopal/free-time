import React from 'react';
import {Rect} from 'react-konva';

export default class Rectangle extends React.Component {

	handleClick = () => {
		console.log(this.props.x)
	}

	render() {
		const {isOn, x, y, width, height} = this.props

		return (
			<Rect
				x={x} y={y} width={width} height={height}
				fill={isOn ? 'black' : 'white'}
				onClick={this.handleClick}
			/>
		);
	}
}