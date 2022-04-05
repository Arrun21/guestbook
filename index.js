const express = require('express');
const app = express();
const mustache = require('mustache-express');

const path = require('path');
const public = path.join(__dirname, 'public');
require('dotenv').config()
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.static(public));
app.use(express.urlencoded({ extended: false }));

app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/guestbookRoutes');
app.use('/', router);


app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})