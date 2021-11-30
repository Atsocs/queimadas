const { getDataFromInpe, transformDataToJson, writeJSONInFileSystem } = require('./functions')
const { dataUrl, destinationPath } = require('./constants')

getDataFromInpe(dataUrl)
    .then((data) => {
        const jsonData = transformDataToJson(data)
        writeJSONInFileSystem(jsonData, destinationPath)
    })
    .catch((error) => console.log(error))
