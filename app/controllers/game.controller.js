const Game = require('../models/game.model');
// Retrieve all games from the database.
exports.findAll = (req, res, next) => {
  Game.find()
    .then((result) => {
      res.status(200).json({
        message: 'Data Game Berhasil dipanggil',
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

// Find a single Game with a gameId
exports.findOne = (req, res) => {
  Game.findById(req.params.gameId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Game with id ${req.params.gameId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Game with id ${req.params.gameId}`,
        });
      }
    } else res.send(data);
  });
};
