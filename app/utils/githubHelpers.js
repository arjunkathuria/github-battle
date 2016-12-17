let axios = require('axios');

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, curr) => prev + curr.stargazers_count, 0);
}

function getPlayerData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars){
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
  players[0].followers * 3 + players[0].totalStars,
  players[1].followers * 3 + players[1].totalStars
  ]
}

let helpers = {
  getPlayersInfo: function getPlayerInfo(players) {
    return axios.all(players.map((playerName) => getUserInfo(playerName)))
    .then((info) => {
      return info.map((user) => user.data);
    })
    .catch((err) => console.warn('Error in getPlayersInfo ', err));
  },

  battle: function battle(PlayersInfoArray) {
    let playerOneData = getPlayerData(PlayersInfoArray[0]);
    let playerTwoData = getPlayerData(PlayersInfoArray[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn('Error in getPlayerData ', err);
      });
  }
}

module.exports = helpers;