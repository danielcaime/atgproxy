
/**
 * dcaime
 */

 //modules
var express = require('express');
//routes
var index = require('./routes/index');
var search = require('./routes/search');
var webhooks = require('./routes/webhooks');
//
const app = express();

//views
app.set('view engine', 'ejs');

//midleware ?
//app.use(express.static(__dirname));
//paths
app.use('/',index);
app.use('/search',search);
app.use('/webhook',webhooks);

//listen
app.listen(app.get('port'),()=>{
    console.log('node app is listen in');
});

module.exports = app;