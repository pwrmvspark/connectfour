import React from 'react'
import './row.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {    
      board: [
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']
      ],
      player: 1
    }

    this.handleClickDrop = this.handleClickDrop.bind(this)
  }

  handleClickDrop(columnIndex) {
    return () => {
      if (this.state.board[0][columnIndex] !== '') {
        return alert("no more spaces to fill my dude.")
      }

      let token = this.state.player === 1 ? 'x' : 'o'
      //  if (this.state.player === 1) {
      //   token = 'x'
      // } else {
      //   token = 'o'
      // }
    console.log(columnIndex, token)

    let rowIndex
    let i = this.state.board.length - 1

    while (true) {
      if (this.state.board[i][columnIndex] === '') {
        rowIndex = i
        break
      }
      i--
    } 

    const newBoard = this.state.board.slice()
    newBoard[rowIndex][columnIndex] = token
    let nextPlayer = this.state.player === 1 ? 2 : 1
    this.setState({
      board: newBoard,
      player: nextPlayer
    })

    }
  }

  render() {
    return (
      <div>
        <h1>Check fo'</h1>
        <div>
          <div className='btn-row'>
            {this.state.board[0].map((btn, i) => {
              return (
                <button className='button' onClick={this.handleClickDrop(i)}>drop</button>
              )
            })}
          </div>
          {this.state.board.map(function(row) {
            return (
              <div className='row'> 
                {row.map(function(square) {
                  return (
                    <div className='square'>{square}</div>
                  ) 
                })}
              </div>
            )
          })}
        </div>
        
      </div>
    )
  }
}

export default App