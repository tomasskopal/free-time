import './App.css'
import React from 'react';

import Rectangle from './Rectangle'
import {getGunConfiguration, computeNextIteration} from './utils'

const RECTANGLE_SIZE = 10

export default class App extends React.Component {

    state = {
        grid: getGunConfiguration(),
		timer: null
    }

    onCellClick = (rowIndex, columnIndex) => {
    	const grid = this.state.grid
    	const actualValue = grid[rowIndex][columnIndex]
		grid[rowIndex][columnIndex] = actualValue ? 0 : 1

		this.setState({
			grid: computeNextIteration(grid)
		})
		this.onStop()
		this.onStart()
    }

    onStart = () => {
		const timer = setInterval(() => {
			this.setState({
				grid: computeNextIteration(this.state.grid)
			})
		}, 150)

		this.setState({timer})
	}

	onStop = () => {
    	if (this.state.timer) {
			clearInterval(this.state.timer)

			this.setState({timer: null})
		}
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
			<div className='scope__game-of-life'>
				<div style={{width: '400px', display: 'flex', margin: '0px auto'}}>
					<a href='javascript:' className='btn' style={{display: 'flex', margin: '0px auto 0px 20%'}} onClick={this.onStart}>
						Start
					</a>
					<a href='javascript:' className='btn' style={{display: 'flex', margin: '0px 20% 0px auto'}} onClick={this.onStop}>
						Stop
					</a>
				</div>
				<div style={{border: '1px solid', position: 'relative', width: '402px', height: '402px', margin: '10px auto'}}>
					{this.renderGrid()}
				</div>
			</div>
		);
	}
}
