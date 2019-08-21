// Required
let express = require('express')
let ejsLayouts = require('express-ejs-layouts')

// Instance
require('dotenv').config()
let app = express()

// Middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Home route
app.get('/', (req, res) => {
    res.render('home')
})



// Listen
let server = app.listen(port, function() {
    console.log('...listening on', port );
  });
  