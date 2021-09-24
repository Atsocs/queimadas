const path = require('path')
const fs = require('fs');

const dataPath = path.join(__dirname, '../data/')

const jsonData = fs.readFileSync(dataPath + 'focos48h_Brasil.json')
const parseJSON = JSON.parse(jsonData)

const focos = parseJSON.features.filter((element) => {
    if(element.properties.risco_fogo != null)
        console.log('achou')
    return element.properties.risco_fogo
})
console.log(focos)