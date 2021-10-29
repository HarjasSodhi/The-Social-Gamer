const express = require('express')
const app = express()
const port = process.env.PORT || 8000;


app.use(express.json())


app.use('/api/use', require('./Routes/dataget'))
app.use('/api/post/user' , require('./Routes/fetchposts'))
app.use('/api/user/profile' , require('./Routes/profile'))

// if(process.env.NODE_ENV=== "production"){
//   app.use(express.static('my-bank/build'))
// }

app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`)
})