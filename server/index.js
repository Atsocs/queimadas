const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const cityFilter = require('./utils/check_city')
const stateFilter = require('./utils/check_state')
const totalFilter = require('./utils/total')
const top10Filter = require('./utils/top10')
const xhrLocation = require('./utils/geolocation')
const stateNames = require('./utils/state_names')

const PORT = process.env.PORT || 3001;

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


//mensagem de confirmação de acesso à API
app.get("/api", (req, res) => {
    res.json({ message: "Fire check Api" });
});

//rota responsável por detectar a localização de IP do usuário
app.get("/api/whereami", (req, res) => {
    const loc = JSON.parse(xhrLocation.response);
    if (loc) {
        res.json({ location: loc });
    }
    else {
        res.json(404, { message: 'Not Found' })
    }
});

//rota responsável por detectar a localização de IP do usuário
//e apresentar a quantidade de focos de queimada na cidade do mesmo
app.get("/api/here", (req, res) => {
    const loc = JSON.parse(xhrLocation.response);
    if (!loc) {
        res.json(404, { message: 'I do not know where you are' })
        return
    }
    const cityName = loc.city.toUpperCase();
    const stateName = stateNames[loc.region];

    const cityFiltered = cityFilter(cityName);
    const stateFiltered = stateFilter(stateName);
    const totalFiltered = totalFilter();
    res.json({
        stateCode: loc.region,
        stateName: stateName,
        cityName: cityName,
        cityFires: cityFiltered.num_focos,
        stateFires: stateFiltered.num_focos,
        countryFires: totalFiltered.num_focos,
    })
})

//rota responsável por retornar a quantidade de focos de
//queimada na cidade selecionada pelo usuário
app.post("/api/city", (req, res) => {
    const body = req.body
    const city = body.city.toUpperCase()
    const state = body.state.toUpperCase()
    if (body) {
        const { focos, num_focos } = cityFilter(city, state)
        res.json({ num_focos: num_focos, focos: focos })
    }
    else {
        res.json(400, { message: 'Wrong request' })
    }
})

//rota responsável por retornar a quantidade de focos de
//queimada no estado selecionado pelo usuário
app.post("/api/state", (req, res) => {
    const body = req.body
    const state = body.state.toUpperCase()
    if (body) {
        const { num_focos } = stateFilter(state)
        res.json({ num_focos: num_focos })
    }
    else {
        res.json(400, { message: 'Wrong request' })
    }
})

//rota responsável por retornar a quantidade total de focos
//de queimada no Brasil
app.get("/api/total", (req, res) => {
    const { num_focos } = totalFilter()
    res.json({ num_focos: num_focos })
})

//rota responsável por retornar os 10 estados com as
//maiores quantidades de focos de queimada
app.get("/api/state/top10", (req, res) => {
    res.json(top10Filter())
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
