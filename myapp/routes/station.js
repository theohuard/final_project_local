var express = require('express');
var router = express.Router();
var Influx = require('influx');


var liste_sensors = ['temperature', 'hygrometry', 'pressure', 'brightness', 'winddirection','windvelocity']
var liste_rain = ['rainfall']
var liste_gps = ['gpsposition']


// Declare the database 

function createInflux(){
  const influx = new Influx.InfluxDB({
      host: 'localhost',
      database: 'dbForMeasurements'
  });
  return influx;
};



/* GET data. */
router.get('/', function(req, res, next) {
  
  console.log('went here');
  res.send('documentation API');

});



router.get('/:measure', function(req, res, next) {
  var measure = req.params.measure;
  var liste_measures = measure.split(',');
  console.log(liste_measures);
  var influx = createInflux();


  for (var i = 0; i < liste_measures.length; i++) {

    if(liste_sensors.includes(liste_measures[i])){
        var measureIn = liste_measures[i];
        influx. queryRaw('SELECT '+measureIn+' FROM sensors ORDER BY time DESC LIMIT 1' ).then(result => {

            console.log(result);
            console.log(result.params)
            console.log(result.measureIn);
            res.send(result);
            }).catch(err => {
              res.status(500).send(err.stack)
            });

    }
    else if(liste_rain.includes(liste_measures[i])){
        var measureIn = liste_measures[i];
        influx. queryRaw('SELECT '+measureIn+' FROM rain ORDER BY time DESC LIMIT 1' ).then(result => {
            console.log(result)
            res.send(result);
            }).catch(err => {
              res.status(500).send(err.stack)
            });

    }
    else if(liste_gps.includes(liste_measures[i])){
        var measureIn = liste_measures[i];
        influx. queryRaw('SELECT '+measureIn+' FROM gps ORDER BY time DESC LIMIT 1' ).then(result => {
            console.log(result)
            res.send(result);
            }).catch(err => {
              res.status(500).send(err.stack)
            });


    }
    else{
        res.send('wrong input');
    }

  }

  
});













router.get('/:measure/:date', function(req, res, next) {
  var measure = req.params.measure;
  console.log(measure);
  var date = req.params.date;
  console.log(date);
  var influx = createInflux();
  influx.query('select '+measure+' from sensors').then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err.stack)
    });
});


module.exports = router;