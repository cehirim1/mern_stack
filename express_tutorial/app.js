const express = require('express')
const app = express()

const people = require('./controllers/fewer_route_code')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

//base route
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//with multiple routes, we can use the express.Router() method to create a new router.
//MVC is a great pattern/convention for managing our application.