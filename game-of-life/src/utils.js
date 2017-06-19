
import {gunGrid_40} from './configuration'

export function getGunConfiguration () {
	return gunGrid_40
}

export function computeNextIteration (grid) {
	const result = []

	grid.forEach((row, rowIndex) => {
		const newRow = []
		row.forEach((column, columnIndex) => {
			let surroundings = 0
			switch (rowIndex) {
				case 0:
					surroundings =
						(grid[rowIndex][columnIndex - 1] || 0) +
						(grid[rowIndex][columnIndex + 1] || 0) +
						(grid[rowIndex + 1][columnIndex - 1] || 0) +
						(grid[rowIndex + 1][columnIndex] || 0) +
						(grid[rowIndex + 1][columnIndex + 1] || 0)
					break;
				case (grid.length - 1):
					surroundings =
						(grid[rowIndex][columnIndex - 1] || 0) +
						(grid[rowIndex][columnIndex + 1] || 0) +
						(grid[rowIndex - 1][columnIndex - 1] || 0) +
						(grid[rowIndex - 1][columnIndex] || 0) +
						(grid[rowIndex - 1][columnIndex + 1] || 0)
					break;
				default:
					surroundings =
						(grid[rowIndex + 1][columnIndex - 1] || 0) +
						(grid[rowIndex + 1][columnIndex] || 0) +
						(grid[rowIndex + 1][columnIndex + 1] || 0) +
						(grid[rowIndex][columnIndex - 1] || 0) +
						(grid[rowIndex][columnIndex + 1] || 0) +
						(grid[rowIndex - 1][columnIndex - 1] || 0) +
						(grid[rowIndex - 1][columnIndex] || 0) +
						(grid[rowIndex - 1][columnIndex + 1] || 0)
			}

			if (column) { // live
				newRow.push((surroundings === 2 || surroundings === 3)
					? 1 // keep live
					: 0 // die
				)
			} else { // die now
				newRow.push(surroundings === 3
					? 1 // comes alive
					: 0 // keep died
				)
			}
		})
		result.push(newRow)
	})


	return result
}