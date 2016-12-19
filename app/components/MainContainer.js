let React = require('react')
let styles = require('../styles/index')

function MainContainer(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;