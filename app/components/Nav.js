var React = require('react')
// var Link = require('react-router-dom').Link
var NavLink = require('react-router-dom').NavLink

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-logo-container">
                <h1 className="nav-logo">
                    gb
                </h1>
            </div>
            <ul className="nav">
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/battle">
                        Battle
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/popular">
                        Popular
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

module.exports = Nav