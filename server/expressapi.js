/**
 * Created by V_D on 1/8/2016.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getJourneys', function (req, res) {

    res.set('Access-Control-Allow-Origin', '*');

    res.type("xml");

    var journeys = "<journeys><journey><id>1</id><to>Capetown</to><from>Johannesburg</from> </journey><journey><id>2</id><to>Malta</to><from>Karachi</from> </journey></journeys>";
    var jsonJourneys = [{"id":0,"name":"karachi"},{"id":1,"name":"queta"},{"id":2,"name":"peshawar"},{"id":3,"name":"lahore"},{"id":4,"name":"islamabad"}];

    res.send(journeys);
});

app.post('/api/samplePost', function (req, res) {

  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.body);

  res.send('Payload recieved ');

});


app.post('/api/login', function (req, res) {

  res.set('Access-Control-Allow-Origin', '*');

  var returnPayload = {isSuccess:true, token: 'ks7JHF^#&NJnjfka#863kb', message:'Login succesfull!'};

  console.log(req.body.password);

  if (req.body.password != 'click'){
    returnPayload.isSuccess = false;
    returnPayload.message = 'Password is invalid';
  }

  res.send(returnPayload);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
