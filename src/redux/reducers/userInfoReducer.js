import * as type from '../actionType';

export const userInfoReducer = (state = 0, action) => {
    
    switch(action.type){
        case type.get_userInfo_received:
        console.log(action.data)
            return state
        default:
            return state
    }
}