const express = require('express');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const morgan  = require('morgan');
const debug = require('debug')('app');

const aliensRouter = require('./src/routers/aliensRouter.js');


const app = express()
app.use(morgan('tiny'));
app.use(express.json());

const PORT = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';
mongoose.connect(url)
const con  = mongoose.connection;
con.on('open', ()=>{
    debug('MongoDB connected');
})

app.use('/aliens',aliensRouter);


app.get('/', (req, res) => {
    res.send('Hello world!')
});


app.listen(PORT, _=>{
    debug(`Listening on port ${PORT}`);
})