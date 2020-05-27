const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const moviesRouter = require('./routes/movies')
app.use('/movies', moviesRouter)

app.listen(3000, () => console.log('Server Started'));    