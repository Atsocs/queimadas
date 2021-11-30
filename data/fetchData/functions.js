const axios = require('axios')
const fs = require('fs')

const getDataFromInpe = async(url) => {
    const response = await axios.get(url)
    return response.data
}

const transformDataToJson = (data) => {
    const jsonData = JSON.stringify(data)
    return jsonData
}

const writeJSONInFileSystem = (json, destinationPath) => {
    fs.writeFileSync(destinationPath, json)
}

module.exports = {
    getDataFromInpe, 
    transformDataToJson, 
    writeJSONInFileSystem
}
