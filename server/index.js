const express = require('express')
const bodyParser = require('body-parser');
const cityFilter = require('./utils/check_city')
const stateFilter = require('./utils/check_state')
const totalFilter = require('./utils/total')

const PORT = process.env.PORT || 3001;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({ message: "Fire check Api" });
});

app.post("/api/city", (req, res) => {
    const body = req.body
    if(body){
        const {focos, num_focos} = cityFilter(body.city)
        res.json({ num_focos: num_focos, focos: focos })        
    }
    else{
        res.json(400, { message: 'Wrong request' })
    }
})

app.post("/api/state", (req, res) => {
    const body = req.body
    if(body){
        const { num_focos } = stateFilter(body.state)
        res.json({ num_focos: num_focos })        
    }
    else{
        res.json(400, { message: 'Wrong request' })
    }
})

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`);
})
