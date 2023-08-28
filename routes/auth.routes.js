const router = require("express").Router()

const bcrypt = require('bcryptjs')
const User = require("./../models/User.model")
const saltRounds = 10

const jwt = require('jsonwebtoken')
const { verifyToken } = require("../middleware/verifyToken")

router.post('/signup', (req, res, next) => {

    const { email, password, username, instruments, description, } = req.body

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

            return User.create({ email, password: hashedPassword, username, instruments, description })
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})






router.post('/login', (req, res, next) => {

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

                const { _id, email, username } = foundUser;
                const payload = { _id, email, username }

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
})


router.get('/verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
})


module.exports = router

