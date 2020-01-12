import React, { Component } from "react";

class Form extends Component {
    render() {
        const {
            handleSelect,
            handleValue,
            buttons,
        } = this.props
        return (<div>
            <select onChange={handleSelect}>
                <option value="1">Progress#1</option>
                <option value="2">Progress#2</option>
                <option value="3">Progress#3</option>
            </select>
            {buttons.map(button => (
                <button key={button} onClick={() => handleValue(button)}>{button}</button>
            ))}
        </div>
        )
    }
}

export default Form