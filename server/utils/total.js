// check total of focos
const jsonData = require('./read_data')

const totalFocos = () => {
    const num_focos = jsonData.features.length
    return {
        num_focos
    }
}

module.exports = totalFocos