const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello ')
})
 app.get('/twitter',(req,res)=>{
    res.send("this is my  backend project ")
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})