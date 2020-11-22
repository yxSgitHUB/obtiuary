import React, {lazy, Suspense} from 'react'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'

const Home = lazy(() => import('../Page/Home'));
export default class Router extends React.Component {

    render() {
        return (
            <HashRouter>
                <Suspense fallback="">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect from="/*" to="/"/>
                    </Switch>
                </Suspense>
            </HashRouter>)
    }
}