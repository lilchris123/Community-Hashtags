/* eslint-disable no-console */
// server/server.js
const cors = require('cors');
const express = require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const morgan= require('morgan');
// const error_middleware= require('./middleware/error-middleware');

const app = express();

// env variables
const PORT= process.env.PORT || 8081;
const MONGODB_URI= process.env.MONGODB_URI || 'mongodb+srv://lilchris:Chris123@cluster0-hnhd3.mongodb.net/community_hashtagsDB';

// connect to mongodb
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('DB Connected'))
.catch(err=> console.log(`DB Connection Error: ${err.reason}`));

// use cors, morgan & body parser middlewares
app.use(bodyParser.json(),cors(), morgan('short'));

// const usersRouter= require('./routes/users');
const hashtagRouter= require('./routes/hashtags');

// pp.use('/users', usersRouter);
app.use('/api/data', hashtagRouter);

// catch any invalid requests
app.all('*', (req,res)=>{
    console.log('Returning a 404 from catch all route');
    return res.sendStatus(404);
});

// use error middleware
// app.use(error_middleware);

app.listen(PORT, ()=>{
    console.log(`Community-Hashtag server up on port: ${PORT}`);
});


