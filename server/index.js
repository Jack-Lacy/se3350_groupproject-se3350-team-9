const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');

const port = 3000;

const Account = require('./database-schema/account');

const {saveData, findAll, checkExist, update, deleteOne, findOneStr} = require('./databse');
// const initPassport = require('./passport-config');

// initPassport(
//     passport, 
//     username => username);

const app = express();
app.use(cors());
app.use(express.json())
app.use


app.get('/', (req,res) => {

    const acc = new Account({
        'firstName': 'Marcus',
        'lastName': 'Tuen Muk',
        'username': 'mtuenmuk',
        'password': 'Test',
        'role': 'instructor'
    })

    saveData(acc);

    res.send("SE3350 Project")
})

app.post('/login', (req, res) => {

    try {
        const username = req.body.email;
        const password = req.body.password;

        findOneStr("account", username, password);


    } catch (error) {
        
    }

    

})

app.get('/signup', (req, res) => {

    try {
        
        const encryptPsw = bcrypt.hash(req.body.password, 10);

        const acc = new Account({
        'firstName': `${req.body.firstName}`,
        'lastName': `${req.body.lastName}`,
        'username': `${req.body.username}`,
        'password': `${encryptPsw}`,
        'role': 'instructor'
    })

    saveData(acc);
    } catch (error) {
        
    }
})


app.listen(port, () => {
    console.log('Listening on port ' + port);
})

