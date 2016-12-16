let React = require('react');
let ReactRouter = require('react-router');
let {Router, Route, IndexRoute, hashHistory} = ReactRouter
let Main = require('../components/Main');
let Home = require('../components/Home');
let PromptContainer = require('../containers/PromptContainer');
let ConfirmBattleContainer = require('../containers/confirmBattleContainer')
let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/playerOne' header="Player One" component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
      <Route path='/battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;