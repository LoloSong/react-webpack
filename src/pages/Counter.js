import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement, reset} from 'actions/counterAction'

class Counter extends Component{
    increment(){
        const { dispatch } = this.props
        dispatch(increment())
    }

    decrement(){
        const { dispatch } = this.props
        dispatch(decrement())
    }

    reset(){
        const { dispatch } = this.props
        dispatch(reset())
    }

    render(){
        const { countReducer } = this.props
        return(
            <div>
                <div>当前计数为: {countReducer.count}</div>
                <button onClick={() => {this.increment()}}>自增</button>
                <button onClick={() => {this.decrement()}}>自减</button>
                <button onClick={() => {this.reset()}}>重置</button>
            </div>
        )
    }
}

export default connect(state => {
    const { countReducer } = state
    return { countReducer }
})(Counter)