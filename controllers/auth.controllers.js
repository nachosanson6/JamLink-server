const router = require("express").Router()
const saltRounds = 10
const bcrypt = require('bcryptjs')
const User = require("./../models/User.model")
const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {

    const { email, password, username, instruments, description, avatar } = req.body
    if (password.length < 6) {
        res.status(400).json({ message: 'La contraseña debe tener como mínimo 6 caracteres' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "Usuario ya creado." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username, instruments, description, avatar })
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const login = (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Proporcione su correo electrónico y contraseña" });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "Usuario no econtrado" })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, avatar, role} = foundUser;
                const payload = { _id, email, username, avatar, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ message: "Contraseña incorrecta" });
            }

        })
        .catch(err => next(err));
}

const verify = (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
}

module.exports = {
    signup,
    login,
    verify
}