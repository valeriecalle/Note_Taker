
//Server Start
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
//Variables for routes
const rout1 = require('./routes/rout1/adminnotes');
const rout2 = require('./routes/rout2/sendport');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', rout1);
app.use('/', rout2);

//calling to the port
app.listen(PORT, () => {
    console.log(`Server ok in ${PORT}. Start!`);
  });
