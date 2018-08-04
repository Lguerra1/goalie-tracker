const express = require ('express')
const bodyParser = require ('body-parser')
const gc = require ('./goal_controller')

const app = express();

app.use(bodyParser.json())

app.get('/api/goals', gc.read)
app.post('/api/goals', gc.create)
app.delete('/api/goals/:id', gc.delete)
app.put('/api/goals/:id', gc.update)

const port = 3005;
app.listen( port, () => {console.log(`Server Listening on Port ${port}`) } )