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
      playerInfo: []
    }
  },

  componentDidMount: function() {
    let query = this.props.location.query;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
    }.bind(this))
  },

  render: function() {
    return  (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playerInfo={this.state.playerInfo} />
    )
  }

})

module.exports = ConfirmBattleContainer