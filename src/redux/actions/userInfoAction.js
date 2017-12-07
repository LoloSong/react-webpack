import * as type from '../actionType';
import ajax from 'utils/ajax';

export const get_userInfo = () => {
    return dispatch => {
        var json = ajax({
            url: 'https://api.shanghaichujie.com/api/bgy/user',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                var data = JSON.parse(data);
                dispatch({type: type.get_userInfo_received, data})
            },
            fail: function(res){
                console.log(res)
            }
        })
    }
        
    
}