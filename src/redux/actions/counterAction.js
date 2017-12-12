import * as type from '../actionType'

export const increment = () => {
    return {type: type.increment}
}

export const decrement = () => {
    return {type: type.decrement}
}

export const reset = () => {
    return {type: type.reset}
}