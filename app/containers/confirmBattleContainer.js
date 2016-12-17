let React = require('react');
let ConfirmBattle = require('../components/confirmBattle');
let githubHelpers = require('../utils/githubHelpers');

let ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },

  componentDidMount: function() {
    let query = this.props.location.query;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },

  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo : this.state.playersInfo
      }
    })
  },

  render: function() {
    return  (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onBattleInitiate={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo} />
    )
  }

})

module.exports = ConfirmBattleContainer