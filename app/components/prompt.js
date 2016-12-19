let React = require('react');
let transparentBg = require('../styles/index').transparentBg;
let PropTypes = React.PropTypes;
let MainContainer = require('./MainContainer');

//functional stateless components

function Prompt(props) {
  return (
      <MainContainer>
        <h1>{props.header}</h1>

        <div className="col-sm-8 col-sm-offset-2">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                className='form-control'
                onChange={props.onUpdateUser}
                placeholder='Github Username'
                type='text'
                value={props.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>

    </MainContainer>
    )
}

Prompt.PropTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

module.exports = Prompt;