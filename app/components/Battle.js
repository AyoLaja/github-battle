var React = require('react')
var PropTypes = require('prop-types')

class PlayerInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        var value = event.target.value

        this.setState(function() {
            return {
                username: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onSubmit(
            this.props.id,
            this.state.username
        )
    }

    render() {
        return (
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input id="username" 
                    placeholder="Github Username" 
                    type="text" 
                    autoComplete="off" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                />
                <button 
                    type="submit"
                    disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propsTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playerOneName: '',
            playerOneImage: null,
            playerTwoName: '',
            PlayerTwoImage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(id, username) {
        this.setState(function() {
            var newState = {}
            
            newState[id + 'Name'] = username
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
            return newState
        })
    }

    render() {
        var playerOneName = this.state.playerOneName
        var playerTwoName = this.state.playerTwoName

        return (
            <div className="container">
                <div className="row">
                    {!playerOneName && <PlayerInput id="playerOne" label="Player 1" onSubmit={this.handleSubmit}/>}
                    <div className="versus">
                        <span>vs</span>
                    </div>
                    {!playerTwoName && <PlayerInput id="playerTwo" label="Player 2" onSubmit={this.handleSubmit}/>}
                </div>
            </div>
        )
    }
}

module.exports = Battle