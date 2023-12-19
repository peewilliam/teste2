// Import packages
const express = require('express');
const path = require("path");
const home = require('./routes/home');
const index = require('./routes/index');


// Middlewares
const app = express();
app.use(express.json());



// Statics
app.use('/', express.static(path.join(__dirname, 'public')))

// Views EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/home', home);
app.use('/', index);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () =>
  console.log(`Listening to port http://localhost:${port} Node.js v${process.versions.node}!`)
);
