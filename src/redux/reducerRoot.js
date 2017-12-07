import {combineReducers} from 'redux';
import {countReducer} from './reducers/counterReducer';
import {userInfoReducer} from './reducers/userInfoReducer';

const reducerRoot = combineReducers({
    countReducer,
    userInfoReducer
})

export default reducerRoot;