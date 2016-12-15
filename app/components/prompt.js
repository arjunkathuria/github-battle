let React = require('react');
let transparentBg = require('../styles/index').transparentBg;
let PropTypes = React.PropTypes;

//functional stateless components

function Prompt(props) {
  return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{props.header}</h1>

        <div className="col-sm-12">
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

    </div>
    )
}

Prompt.PropTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

module.exports = Prompt;