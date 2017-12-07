import * as type from '../actionType';

const initState = {
    count: 0
}

export const countReducer = (state = initState, action) => {
    switch(action.type){
        case type.increment:
            return{
                count: state.count + 1
            };
        case type.decrement:
            return{
                count: state.count - 1
            }
        case type.reset:
            return{
                count: 0
            }
        default:
            return state
    }
}