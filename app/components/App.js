// import React from 'react'
// import Popular from './Popular'
var React = require('react')
var Popular = require('./Popular')
var Home = require('./Home')
var Nav = require('./Nav')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Route exact path="/" component={Home} />
                    <Route path="/popular" component={Popular} />
                </div>
            </Router>
        )
    }
}

module.exports = App