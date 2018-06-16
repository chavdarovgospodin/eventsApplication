const EventsModel = require('../models/event.model')();

module.exports = function EventsController() {
    async function getAllEvents(req, res) {
        try {
            const events = await EventsModel.getAllEvents();
            res.render('index', {
                title: 'Events',
                eventsToShow: events
            });
        } catch (err) {
            console.log(err)
            return err;
        }
    }

    async function saveEvent(req, res) {
        try {
            const events = await EventsModel.saveEvent(req.body);
            const allEvents = await EventsModel.getAllEvents();
            res.render('index', {
                title: 'Events',
                eventsToShow: allEvents
            });
        } catch (err) {
            console.log(err)
            return err;
        }
    }

    async function deleteEvent(req, res){
        const deletedEvent = await EventsModel.deleteEvent(req.body._id)
        const allEvents = await EventsModel.getAllEvents();
        res.render('index', {
            title: 'Events',
            eventsToShow: allEvents
        });
    }

    return {
        getAllEvents,
        saveEvent,
        deleteEvent
    };
}