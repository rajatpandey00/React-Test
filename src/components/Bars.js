import React, { Component } from 'react';
import Bars from 'react-bars';

class ProgressBar extends Component {
    state = { 
        bars: this.props.bars 
    }
    static getDerivedStateFromProps(props, state) {
        if(props.bars !== state.bars) {
            return {
                bars: [...props.bars],
            }
        }
        return null
    }
    render() {
        const {
            bars
        } = this.state
        return(
            <Bars data={bars} makeUppercase />
        )
    }
}

export default ProgressBar