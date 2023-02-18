const express = require('express');
const res = require('express/lib/response');

const spaceXController = require('../controllers/spaceXController');

const router = express.Router();

// ADD GET LAUNCHES ROUTE HANDLER HERE
router.get('/', spaceXController.getLaunches, (req, res) => {
  return res.status(200).json(res.locals.launches);
});

module.exports = router;
