//server/server.js
var cors = require('cors');
var express = require('express');
var mongoose =require('mongoose');
var bodyParser =require('body-parser');
var morgan= require('morgan');
var error_middleware= require('./middleware/error-middleware');

const app = express();

// env variables
const PORT= process.env.PORT || 8081;
const MONGODB_URI= process.env.MONGODB_URI || 'mongodb+srv://lilchris:Chris123@cluster0-hnhd3.mongodb.net/community_hashtagsDB';

//mongoose.Promise=Promise;

//connect to mongodb
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('DB Connected'))
.catch(err=> console.log(`DB Connection Error: ${err.reason}`));

//use cors, morgan & body parser middlewares
app.use(bodyParser.json(),cors(), morgan('short'));

//const usersRouter= require('./routes/users');
const topTagsRouter= require('./routes/tophashtags');

//pp.use('/users', usersRouter);
app.use('/api/data', topTagsRouter);

//catch any invalid requests
app.all('*', (req,res)=>{
    console.log('Returning a 404 from catch all route');
    return res.sendStatus(404);
});

//use error middleware
//app.use(error_middleware);

app.listen(PORT, ()=>{
    console.log(`Community-Hashtag server up on port: ${PORT}`);
});


