// check focos on json list by city
const jsonData = require('./read_data')
const retira_acentos = require('./retira_acentos')

const cityFilter = (city, state) => {
    const focos = jsonData.features.filter((foco) => {
        return retira_acentos(foco.properties.municipio) === retira_acentos(city) && retira_acentos(foco.properties.estado) === retira_acentos(state)
    })
    return {
        focos: focos,
        num_focos: focos.length
    }
}

module.exports = cityFilter