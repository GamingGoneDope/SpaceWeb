const express = require('express') 
const app = express() 

app.get('/', (require, res) => {
  res.sendFile('./main.html)
}

app.listen(3000) 
