// importing modules

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require("ejs");
const {mongoDbURL, PORT} = require('./config/configuration')

const app = express();


/* configure Mongoose  to connect to mongooDB*/
mongoose.connect(mongoDbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(respnse => {
    console.log("MongoDb Connected SuccesFully");
}).catch(err => {
    console.log("Database connection failed.");
});

/*Setup View Engine to use ejs*/
app.set('view engine', 'ejs');

/* configure express*/
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


/*routes*/
app.use('/', (req, res) => {
    res.render('default/home')
})



app.listen(PORT, () => {
    console.log(`Serevr started at ${PORT}`);
});