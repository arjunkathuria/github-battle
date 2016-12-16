let React = require('react');
let PropTypes = React.PropTypes;
let styles = require('../styles/index');
let ReactRouter = require('react-router');
let { Link } = ReactRouter;
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');

function ConfirmBattle(props) {
  return (
    props.isLoading === true 
    ? <p> LOADING!</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm players</h1>
        <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Player 1">
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="Player 2">
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12">
            <button type='button' className="btn btn-lg btn-success" style={styles.space} onClick={props.onBattleInitiate}>
              Initiate Battle
            </button>
          </div>
          <br />
          <div className="col-sm-12">
            <Link to='playerOne'>
              <button type="button" className="btn btn-lg btn-info" style={styles.space}>
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </div>
  )
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onBattleInitiate: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;