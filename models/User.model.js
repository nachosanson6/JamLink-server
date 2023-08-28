const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      minlength: [2, "El nombre de usuario requiere dos caracteres mínimo"]
    },
    email: {
      type: String,
      required: [true, 'La dirección de correo es obligatoria.'],
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
      default: "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
    },
    instruments: {
      type: [String],
    },
    description: {
      type: String
    },

    friends: [{
      type: Schema.Types.ObjectId,
    }],
  },

  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
