require('dotenv').config();
const express = require('express');
const routeUser = require('./routes/users')
const { check } = require('express-validator');
const handleErrors = require('./middleware/handleErrors');

const app = express();

app.use(express.json());

app.use('/user',check('firstname', 'El nombre es necesario para su registro').notEmpty(),
                check('lastname', 'El apellido es necesario para su registro').notEmpty(),
                check('email', 'El email es necesario para su registro').notEmpty(),
                check('password', 'El password es necesario para su registro').notEmpty(),
                handleErrors(), routeUser)
app.get('/', (req, res) => {
   res.json({
      ok: true,
      msg: 'Inicio'
   })
});


const server = app.listen(process.env.PORT, () => {
   console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

module.exports = { app, server };