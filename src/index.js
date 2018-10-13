const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();


const IndexRoute= require('./routes/index');
const TasksRoute= require('./routes/tasks');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('port',process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(IndexRoute);
app.use('/api',TasksRoute);



app.listen(app.get('port'),()=>{
    console.log("server on port ", app.get('port'));
})