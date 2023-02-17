const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = 3000;

const Account = require('./database-schema/account');

const {saveData, findAll, checkExist, update, deleteOne, findOneStr} = require('./databse');


const app = express();
app.use(cors());
app.use(express.json())

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
    const username = req.body.email;
    const password = req.body.password;

    findOneStr("account", username, password);

})

app.get('/signup', (req, res) => {
    
})


app.listen(port, () => {
    console.log('Listening on port ' + port);
})
