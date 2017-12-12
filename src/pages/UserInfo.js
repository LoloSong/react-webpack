import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get_userInfo} from 'actions/userInfoAction'

class UserInfo extends Component{
    handleClick(){
        const { dispatch } = this.props
        dispatch(get_userInfo())
    }
    
    render(){
        return(
            <div>
                <div>userInfo页面</div>
                <button onClick = { () => {this.handleClick()}}>点击测试异步数据</button>
            </div>
            
        )
    }
}

// export default UserInfo;
export default connect(state => {
    const { userInfoReducer } = state
    return { userInfoReducer }
})(UserInfo)