import './App.css'
import React from 'react';

import Rectangle from './Rectangle'
import {getGunConfiguration, computeNextIteration} from './utils'

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
        }, 150)
    }

    onCellClick = (rowIndex, columnIndex) => {
    	const grid = this.state.grid
    	const actualValue = grid[rowIndex][columnIndex]
		grid[rowIndex][columnIndex] = actualValue ? 0 : 1

		this.setState({
			grid: computeNextIteration(grid)
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
						rowIndex={rowIndex}
						columnIndex={columnIndex}
                    />
                )
            })
        })

        return result
    }

    render () {
		return (
            <div style={{border: '1px solid', position: 'relative', width: '400px', height: '400px'}}>
                {this.renderGrid()}
            </div>
		);
	}
}
