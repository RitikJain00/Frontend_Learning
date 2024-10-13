
const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());       //Middleware for Enable CORS for all routes

app.get('/', (req,res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        return res.status(400).send('Invalid input');
    }

    const interest = (principal * rate * time)/ 100;   // Calculate Interest

    res.send(interest.toString());
})

app.listen(3000);