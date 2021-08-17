const app = require('./server')

const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'Development'

app.listen(PORT, () => [
    console.log(`server started in ${ENV} mode on ${PORT} `)
])