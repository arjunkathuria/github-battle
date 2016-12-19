let React = require('react');
let { PropTypes } = React;
let styles = require('../styles/index');
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');
let ReactRouter = require('react-router');
let { Link } = ReactRouter
let MainContainer = require('./MainContainer');

function StartOver() {
  return (
    <div className="col-sm-12">
        <Link to='/playerOne'>
          <button type="button" className='btn btn-lg btn-success' style={styles.space}> Start Over </button>
        </Link>
    </div>
  )
}

function Results(props) {
  if (props.isLoading === true) {
    return (
      <p>LOADING...</p>
    )
  }

  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1> Its a TIE!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  let winingIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex = winingIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Winner</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails info={props.playersInfo[winingIndex]} score={props.scores[winingIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails info={props.playersInfo[losingIndex]} score={props.scores[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
