import React, {Component} from 'react';
import '../style/Page1.css'

class Page1 extends Component{
    render(){
        return(
            <div>
                <div className="page-box">Page1s</div>
                <img src={require('static/ball.png')}/>
            </div>
            
        )
    }
}

export default Page1;