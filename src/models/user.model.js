const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

//Creacion de un nuevo schema de mongoose
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    //REGEX DE VALIDACION W3
    validate: function (email) {
      return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      );
    }
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

//Sobreescribimos el metodo TOJSON del objeto esquema para que no se muestre la constraseña
UserSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

//agregamos un nuevo metodo al objeto esquema
UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

// Antes de que se guarden los datos la funcion pre ejecuta un callback que contiene alguna logica
// save es un metodo de mongoose, cuales son los otros metodos?
// antes de que se ejecute el metodo save, se ejecutara una
// funcion que sirve como filtro o restriccion de negocio, esta funcion tiene que ser declarada como FUNCTION
// para que no se pierda el scope de mongoose >????? que mierda significa esto

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("user", UserSchema);
