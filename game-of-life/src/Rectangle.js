import React from 'react';

export default class Rectangle extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.isOn !== nextProps.isOn;
	}

	render() {
		const {isOn, x, y, width, height, onClick, rowIndex, columnIndex} = this.props

		return (
			<div
				style={{width: width, height: height, left: x, top: y, backgroundColor: isOn ? 'black' : 'white', position: 'absolute', cursor: 'pointer'}}
				onClick={() => onClick(rowIndex, columnIndex)}
			/>
		);
	}
}
