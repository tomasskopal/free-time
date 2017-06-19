import React from 'react';
import pureRender from 'pure-render-decorator';

class Rectangle extends React.Component {

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

export default pureRender(Rectangle)