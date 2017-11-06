const express = require('express');
const songController = require('./song_controller');

const apiRouter = express.Router();

/* Song routes */
apiRouter.get('/song/:id', songController.get);

module.exports = apiRouter;