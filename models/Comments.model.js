const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
        comment: {
            type: String,
            required: [true, "El comentario es obligatorio"]
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },

    {
        timestamps: true
    }
);

const Comments = model("Comments", commentsSchema);

module.exports = Comments;