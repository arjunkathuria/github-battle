let React = require('react');
let transparentBg = require('../styles/index').transparentBg;
let Prompt = require('../components/prompt');

let PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      'username': ''
    }
  },

  handleUpdateUser: function (event) {
    this.setState({
      'username': event.target.value
    })
  },

  handleSubmitUser: function (event){
    event.preventDefault();
    let username = this.state.username;
    this.setState({
      'username': ''
    })

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/PlayerTwo/' + this.state.username)
    }
  },

  render: function () {
    return (
      <Prompt
        header={this.props.route.header}
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
      />
    )

  }
})

module.exports = PromptContainer;