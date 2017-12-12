import React, {Component} from 'react'
import Nav from './components/Nav/Nav'
import Router from './router/Router'

class App extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Router/>
            </div>
        )
    }
}
export default App