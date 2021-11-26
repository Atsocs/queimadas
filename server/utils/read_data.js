const path = require('path')
const fs = require('fs')

const dataPath = path.join(__dirname, '../../data/')

const jsonData = fs.readFileSync(dataPath + 'focos48h_Brasil.json')
const parseJSON = JSON.parse(jsonData)

module.exports = parseJSON