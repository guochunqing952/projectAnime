// import React, { Component } from 'react'
import React from 'react'
import { Switch, Route } from "react-router-dom"
import Display from "./pages/display/Display"
import Login from "./pages/login/Login"
import { Provider } from 'react-redux'
import store from './store/index'
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history'

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Display} />
                </Switch>
            </ConnectedRouter >
        </Provider>
    )
}


// export default class App extends Component {
//     render() {
//         return (
//             <Router>
//                 <Switch>
//                     <Route path="/login" component={Login} />
//                     <Route path="/" component={Display} />
//                 </Switch>
//             </Router>
//         )
//     }
// }



