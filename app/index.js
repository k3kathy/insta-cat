const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log('server is listening')
})

