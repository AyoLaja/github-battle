var React = require('react')
var Link = require('react-router-dom').Link

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>GITHUB BATTLE</h1>
                <h3>Battle your github friends</h3>
                <Link className="button" to="/battle">
                    Battle
                </Link>
            </div>
        )
    }
}

module.exports = Home