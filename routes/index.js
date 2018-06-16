var express = require('express');
const router = express.Router();
const eventsController = require('../controllers/event.controller')();

/* GET home page. */
router.get('/', function(req, res) {
  return eventsController.getAllEvents(req, res);
});

/* POST filter by member name - home page. */
router.post('/', function(req, res) {
    return eventsController.saveEvent(req, res);
});

/* POST filter by member name - home page. */
router.post('/delete', function(req, res) {
    return eventsController.deleteEvent(req, res);
});

module.exports = router;
