let React = require('react');
let transparentBG = require('../styles/index').transparentBg;
let ReactRouter = require('react-router');
let Link = ReactRouter.Link;

let Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBG}>
        <h1>Github Battle</h1>
        <p className="lead"> Some fancy moto</p>
        <Link to="/playerOne">
          <button type='button' className='btn btn-lg btn-success' >
            Get Started 
          </button>
        </Link>
      </div> 
    )
  }
})

module.exports = Home