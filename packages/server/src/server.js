const createServer = require('./app')

const app = createServer()

app.listen(3333, () => console.log('Server running'))
