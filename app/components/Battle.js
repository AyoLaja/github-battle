var React = require('react')
var PropTypes = require('prop-types')
var Link = require('react-router-dom').Link

function PlayerPreview(props) {
    return (
        <div id="player-preview">
            <div className="column">
                <img className="avatar"
                    src={props.avatar}
                    alt={'Avatar for ' + props.username}
                />
                <h2 className="username">@{props.username}</h2>
            </div>
            <button className="reset"
                onClick={props.onReset.bind(null, props.id)}>
                Reset
            </button>
        </div>
    )
}

PlayerPreview.propsTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
}

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
                    autoComplete="on" 
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
            playerTwoImage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleSubmit(id, username) {
        this.setState(() => {
            var newState = {}
            
            newState[id + 'Name'] = username
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
            return newState
        })
    }

    handleReset(id) {
        this.setState(() => {
            var newState = {}
            
            newState[id + 'Name'] = ''
            newState[id + 'Image'] = null
            return newState
        })
    }

    render() {
        var match = this.props.match
        var playerOneName = this.state.playerOneName
        var playerTwoName = this.state.playerTwoName
        var playerOneImage = this.state.playerOneImage
        var playerTwoImage = this.state.playerTwoImage

        return (
            <div className="container">
                <div className="row">
                    {!playerOneName && <PlayerInput id="playerOne" label="Player 1" onSubmit={this.handleSubmit}/>}
                    {playerOneImage !== null 
                        && 
                        <PlayerPreview avatar={playerOneImage} 
                            username={playerOneName} 
                            onReset={this.handleReset} 
                            id="playerOne"/>
                    }
                    <div className="versus">
                        <span>vs</span>
                    </div>
                    {!playerTwoName && <PlayerInput id="playerTwo" label="Player 2" onSubmit={this.handleSubmit}/>}
                    {playerTwoImage !== null 
                        && 
                        <PlayerPreview avatar={playerTwoImage} 
                        username={playerTwoName} 
                        onReset={this.handleReset} 
                        id="playerTwo"/>
                    }
                </div>
                <div className="row">
                {playerOneImage && playerTwoImage && 
                    <Link className="button" 
                        to={{
                            pathname: match.url + '/results',
                            search: `?playerOneName=` + playerOneName + '&playerTwoName=' + playerTwoName
                        }}>
                        Battle
                    </Link>
                }
                </div>
            </div>
        )
    }
}

module.exports = Battle