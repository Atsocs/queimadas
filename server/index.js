const express = require('express')
const bodyParser = require('body-parser');
const cityFilter = require('./utils/check_city')
const stateFilter = require('./utils/check_state')
const totalFilter = require('./utils/total')
const xhrLocation = require('./utils/geolocation')

const PORT = process.env.PORT || 3001;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json({ message: "Fire check Api" });
});

app.get("/api/whereami", (req, res) => {
    const loc = JSON.parse(xhrLocation.response);
    if(loc){
        res.json({ location: loc});
    }
    else{
        res.json(404, { message: 'Not Found' })
    }
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

app.get("/api/total", (req, res) => {
    const { num_focos } = totalFilter()
    res.json({ num_focos: num_focos })        
})


app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`);
})
