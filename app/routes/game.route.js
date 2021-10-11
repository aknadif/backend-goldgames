module.exports = (app) => {
  // eslint-disable-next-line global-require
  const games = require('../controllers/game.controller');

  // Retrieve all games
  app.get('/games', games.findAll);

  // Retrieve a single game with gameId
  app.get('/games/:gameId', games.findOne);
};
