// check focos on json list by city
const jsonData = require('./read_data')
const retira_acentos = require('./retira_acentos')

const cityFilter = (city) => {
    const focos = jsonData.features.filter((foco) => {
        return retira_acentos(foco.properties.municipio) === retira_acentos(city)
    })
    return {
        focos: focos,
        num_focos: focos.length
    }
}

module.exports = cityFilter