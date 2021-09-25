// check if city is in json list
const jsonData = require('./read_data')

const cityFilter = (city) => {
    const focos = jsonData.features.filter((foco) => {
        return foco.properties.municipio === city
    })
    return {
        focos: focos,
        num_focos: focos.length
    }
}

module.exports = cityFilter