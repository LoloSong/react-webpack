import React, {Component} from 'react'
import {HashRouter, Route, Switch, Link} from 'react-router-dom'

import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=home!pages/Home'
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1'
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound'
import Loading from 'pages/Loading'

const createComponent = (component) => {
    return (
        () => {
            return (
                <Bundle load={component}>
                    {
                        (Component) => {
                            return (
                                Component ? <Component/> : <Loading/>
                            )
                        }
                            
                    }
                </Bundle>
            )
        }
    )
}

class Router extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={createComponent(Home)}/>
                    <Route path="/page1" component={createComponent(Page1)}/>
                    <Route path="/counter" component={createComponent(Counter)}/>
                    <Route path="/userInfo" component={createComponent(UserInfo)}/>
                    <Route component={createComponent(NotFound)}/>
                </Switch>
            </div>
        )
    }
}

export default Router