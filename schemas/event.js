var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: {
        type: String,
        required: true
     },
    location: {
        type: String,
        required: true
     },
    stDate: {
        type: Date,
        required: true, default: Date.now
    },
    endDate: {
        type: Date,
        required: true, default: Date.now
    },
});

// Export model...
module.exports = mongoose.model( 'Event', eventSchema );
