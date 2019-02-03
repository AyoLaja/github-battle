// import React from 'react'
// import Popular from './Popular'
var React = require('react')
var Popular = require('./Popular')
var Results = require('./Results')
var Home = require('./Home')
var Nav = require('./Nav')
var Battle = require('./Battle')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/battle/results" component={Results} />
                        <Route path="/popular" component={Popular} />
                        <Route render={function() {
                            return <h1>Not Found</h1>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App