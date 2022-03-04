var express = require('express');
var router = express.Router();
var Influx = require('influx');



// Declare the database 

function createInflux(){
  const influx = new Influx.InfluxDB({
      host: 'localhost',
      database: 'db_all_tables'
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
  console.log(measure);
  var influx = createInflux();
  influx.query('select '+measure+' from sensors').then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err.stack)
    });
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