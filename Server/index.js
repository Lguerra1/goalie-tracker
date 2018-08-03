const express = require ('express')
const bodyParser = require ('body-parser')
const gc = require ('./goal_controller')

const app = express();

app.use(bodyParser.json())

app.get('/api/quotes', gc.read)
app.post('/api/quotes', gc.create)

const port = 3005;
app.listen( port, () => {console.log(`Server Listening on Port ${port}`) } )