let express = require('express');
let apiRoutes = require('./routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

app.use('/api',apiRoutes);

app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})