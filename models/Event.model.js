const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "El título es obligatorio"]
        },

        instruments: {
            type: [String],
        },

        description: {
            type: String
        },

        address: {
            street: String,
            number: Number,
            zipcode: Number,
            city: String,
            country: String
        },

        location: {
            type: {
                type: String,
            },
            coordinates: {
                type: [Number]
            }
        },

        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        attendees: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]

    },

    {
        timestamps: true
    }
);

const Event = model("Event", eventSchema);

module.exports = Event;
