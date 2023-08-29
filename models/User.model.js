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
      // default: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
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

    role: {
      type: String,
      default: "User"
    }
  },

  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
