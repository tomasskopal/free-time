import './App.css'
import React from 'react';
import {Layer, Stage} from 'react-konva';

import Rectangle from './Rectangle'
import {getGunConfiguration, computeNextIteration} from './utils'

export const SIZE = 40
const RECTANGLE_SIZE = 10

export default class App extends React.Component {

    state = {
        grid: getGunConfiguration()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
              	grid: computeNextIteration(this.state.grid)
            })
        }, 100)
    }

    onCellClick = () => {
		this.setState({
			grid: computeNextIteration(this.state.grid)
		})
    }

    renderGrid () {
        const {grid} = this.state
        const result = []

        grid.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                result.push(
                    <Rectangle
                        key={`${rowIndex}-${columnIndex}`}
                        isOn={column}
                        x={columnIndex * RECTANGLE_SIZE}
                        y={rowIndex * RECTANGLE_SIZE}
                        width={RECTANGLE_SIZE}
                        height={RECTANGLE_SIZE}
                        onClick={this.onCellClick}
                    />
                )
            })
        })

        return result
    }

    render () {
		return (
            <Stage width={SIZE * 10} height={SIZE * 10}>
                <Layer>
                    {this.renderGrid()}
                </Layer>
            </Stage>
		);
	}
}
