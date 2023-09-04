const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "El título es obligatorio"]
        },

        description: {
            type: String
        },

        address: {
            type: String
        },

        location: {
            type: {
                type: String,
            },
            coordinates: {
                type: [Number]
            }
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        attendees: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            instruments: {
                type: [String],
            },
        }],

        date: {
            type: Date,
            required: true
        },

    },

    {
        timestamps: true
    }
);

const Event = model("Event", eventSchema);

module.exports = Event;
