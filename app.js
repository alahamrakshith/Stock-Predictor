// importing modules

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require("ejs");
const expressLayouts = require('express-ejs-layouts')
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
app.set('views', path.join(__dirname, 'views'));
app.set('layout','layout/default');

/* configure express*/
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


/*routes*/
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use('/admin', adminRoutes);

const dashboardRoutes = require("./routes/dashboardRoutes");
app.use('/dashboard', dashboardRoutes);

app.listen(PORT, () => {
    console.log(`Serevr started at ${PORT}`);
});