const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.engine('handlebars', handlebars());
app.set('view engine, handlebars');

console.log(__dirname)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})