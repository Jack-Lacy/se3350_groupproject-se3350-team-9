const express = require('express');
const cors = require("cors");
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req,res) => {
    res.send("SE3350 Project")
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})