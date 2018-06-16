const mongoose = require('mongoose');
const eventSchema = require('../schemas/event')

module.exports = function EventModel() {
    async function getAllEvents() {
        try {
            const events = await eventSchema.find();
            return events;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
    async function saveEvent(event) {
        try {
            const newEvent = await new eventSchema(event);
            return newEvent.save(); 
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async function deleteEvent(eventId) {
        const query = {
            _id : eventId
        };
        try {
            return removedEvent = await eventSchema.remove(query);
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    return {
        getAllEvents,
        saveEvent,
        deleteEvent
    };
};