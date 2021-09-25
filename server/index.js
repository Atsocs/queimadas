const express = require('express')
const cityFilter = require('./utils/check_city')

const PORT = process.env.PORT || 3001;

const app = express()

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`);
})

console.log('Numero focos:', cityFilter.num_focos)