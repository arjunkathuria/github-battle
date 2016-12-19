let React = require('react');
let styles = require('../styles/index');
let { PropTypes } = React

let Loading = React.createClass({
  propTypes: {
    speed: PropTypes.number,
    text: PropTypes.string
  },
  getDefaultProps: function() {
    return { 
      speed: 300,
      text: 'Loading'
    }
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function() {
    let stopper = this.originalText + '...';
    this.interval = setInterval(function(){
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})

module.exports = Loading;