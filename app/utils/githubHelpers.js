let axios = require('axios');

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

let helpers = {
  getPlayersInfo: function getPlayerInfo(players) {
    return axios.all(players.map((playerName) => getUserInfo(playerName)))
    .then((info) => {
      return info.map((user) => user.data);
    })
    .catch((err) => console.warn('Error in getPlayersInfo ', err));
  }
}

module.exports = helpers;