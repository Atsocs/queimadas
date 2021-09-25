// check if city is in json list
const jsonData = require('./read_data')

const city_teste = "BRASILÉIA"

const focos = jsonData.features.filter((element) => {
    return element.properties.municipio === city_teste
})

module.exports = {
    focos: focos,
    num_focos: focos.length
}