import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Bars from 'react-bars';

class BarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: [
                { label: '75%', value: 75, barColor: 'cyan' },
                { label: '25%', value: 25, barColor: 'grey' }
            ],
            optionsSelected: 1,
        };
        this.handleValue = this.handleValue.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(e) {
      e.preventDefault()
      this.setState({ optionsSelected: e.target.value })
    }
    handleValue(text) {
        const indexToUpdate = this.state.optionsSelected
        console.log('indexToUpdate', indexToUpdate-1)
        const updateValue = this.state.testData[indexToUpdate -1 ].value + text
        console.log('updateValue', updateValue)
         const color = (updateValue >= 100) ? 'red' : 'cyan'
        this.setState(prevState => ({
              [prevState.testData[indexToUpdate-1]]: updateValue
        }))
        console.log('State', this.state)
    }
    render() {
        const { testData } = this.state
        return (
            <div>
                <Bars data={testData} />
                <select onChange={this.handleSelect}>
                    <option value="1">Progress#1</option>
                    <option value="2">Progress#2</option>
                </select>
                <button onClick={() => this.handleValue(25)}>+25</button>
                <button onClick={() => this.handleValue(10)}>+10</button>
                <button onClick={() => this.handleValue(-10)}>-10</button>
            </div>
        )
    }
}

ReactDOM.render(<BarExample />, document.getElementById('app'))