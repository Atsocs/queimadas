// check focos on json list by state
const jsonData = require('./read_data')

const stateFilter = (state) => {
    const focos = jsonData.features.filter((foco) => {
        return foco.properties.estado === state
    })
    
    return {
        focos: focos,
        num_focos: focos.length
    }
}

module.exports = stateFilter