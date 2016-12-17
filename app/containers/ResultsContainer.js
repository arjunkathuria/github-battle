let React = require('react');
let Result = require('../components/Results');
let githubHelpers = require('../utils/githubHelpers');

let ResultsContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo)
    .then(function(scores) {
      this.setState({
        isLoading: false,
        scores: scores
      })
    }.bind(this))
  },
  render: function() {
    return (
      <Result
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}/>
    )
  }
})

module.exports = ResultsContainer;