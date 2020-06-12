/* eslint-disable no-console */
// server/server.js
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const morgan= require('morgan');
// const error_middleware= require('./middleware/error-middleware');

const app = express();

// env variables
const {
    MONGO_HOSTNAME,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DB,
    PORT
}= process.env
const MONGODB_URI= `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}`

// connect to mongodb
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'))
.catch(err => console.log(`DB Connection Error: ${err.reason}`));

// use cors, morgan & body parser middlewares
app.use(bodyParser.json(),cors(), morgan('short'));

const usersRouter= require('./routes/users');
const categoriesRouter= require('./routes/categories');
const postsRouter= require('./routes/posts');

app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/posts', postsRouter);

// catch any invalid requests
app.all('*', (req, res)=>{
    console.log('Returning a 404 from catch all route');
    return res.sendStatus(404);
});

// use error middleware
// app.use(error_middleware);

app.listen(PORT, ()=>{
    console.log(`Community-Hashtag server up on port: ${PORT}`);
});