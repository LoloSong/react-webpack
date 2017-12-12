import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducerRoot from './reducerRoot'

const store = createStore(
    reducerRoot,
    applyMiddleware(thunk)
)

export default store