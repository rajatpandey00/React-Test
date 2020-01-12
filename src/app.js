import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import ProgressBar from './components/Bars'
import createdLabelDataForBar from './utils/utils'
import './styles/progress-bar.scss'

class BarExample extends Component {
    state = {
        bars: createdLabelDataForBar([44, 13, 68]), // This value later can be fetched via api
        buttons: [39, 35, -22, -43],
        optionsSelected: 1,
        limitReceived: 190
    };

    handleSelect = e => {
        e.preventDefault()
        this.setState({ optionsSelected: e.target.value })
    }

    handleValue = text => {
        const { optionsSelected, bars, limitReceived } = this.state
        const indexToUpdate = optionsSelected - 1
        const updateValue = bars[indexToUpdate].value + text
        const color = (updateValue >= limitReceived) ? 'red' : 'cyan'
        this.setState(prevState => {
            const { bars } = prevState
            const updatedObj = {
                label: `${updateValue}%`,
                value: updateValue,
                barColor: `${color}`
            }
            const updatedObjects = [
                ...bars.slice(0, indexToUpdate),
                updatedObj,
                ...bars.slice(indexToUpdate + 1),
            ]
            return {
                bars: [...updatedObjects]
            }
        })
    }
    render() {
        const { bars, buttons, limitReceived } = this.state
        return (
            <div>
                Limit is {limitReceived}
                <ProgressBar bars={bars} />
                <Form handleSelect={this.handleSelect} buttons={buttons} handleValue={this.handleValue} />
            </div>
        )
    }
}

ReactDOM.render(<BarExample />, document.getElementById('app'))