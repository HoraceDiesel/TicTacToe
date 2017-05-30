import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Sqaure} from '../styled/TicTacToe'

class TicTacToe extends Component {

	state = {
		rows: 3
	}

	componentWillMount = () => {
		let width = window.innerWidth
		let height = window.innerHeight
		let size = (width < height) ? width * .8 : height * .8
		let rows = this.state.rows
		let unit = size / rows
		let coordinates = []

		this.setState({
			size, rows, unit, coordinates
		})
	}

	move =() => {

	}

	makeAiMove = () => {

	}

	turingTest = () => {

	}

	recordGame = () => {

	}

	render() {

		let { size, rows, unit, 
					coordinates, gameState, win, 
					gameOver, yourTurn, ownMark 
				} = this.state

		return (
			<div>
				<Stage
					width={size}
					height={size}
				>
					<Board
						size={size}
						rows={rows}
						unit={unit}
					/>
					<Sqaure 
						unit={unit}
						coordinates={coordinates}
						gameState={gameState}
						win={win}
						gameOver={gameOver}
						yourTurn={yourTurn}
						ownMark={ownMark}
						move={this.move}
					/>
				</Stage>
			</div>
		)
	}
}

export default TicTacToe