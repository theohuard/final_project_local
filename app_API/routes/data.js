var express = require('express');
var router = express.Router();
var Influx = require('influx');



// Declare the database 

function createInflux(){
  const influx = new Influx.InfluxDB({
      host: 'localhost',
      database: 'dbAllMeasurements'
  });
  return influx;
};



/* GET data for documentation */
router.get('/', function(req, res, next) {
    res.sendFile('public/documentation.html',{ root: __dirname+'/..'});
});

/* GET data for last available measure */

router.get('/:measure', function(req, res, next) {
  var measure = req.params.measure;
    var listParam = measure.split(",");
    var influx = createInflux();
    influx.query('select * from ' + measure + ' order by time desc LIMIT 1').then(result => {
        var a = {};
        for (var i = 0; i < listParam.length; i++) {
            if (result.groupRows[i].name == 'gpsposition') {
                a[result.groupRows[i].name] = {};
                a[result.groupRows[i].name].value = [result[i].lat, result[i].lon, result[i].alt];
                a[result.groupRows[i].name].date = result[i].date;
            } else if (result.groupRows[i].name == 'windvelocity') {
                a[result.groupRows[i].name] = {};
                a[result.groupRows[i].name].value = [result[i].wind_avg, result[i].wind_min, result[i].wind_max];
                a[result.groupRows[i].name].date = result[i].date;
            }
             else {
                a[result.groupRows[i].name] = {};
                a[result.groupRows[i].name].value = [result[i].value];
                a[result.groupRows[i].name].date = result[i].date;
            }
        }
        res.send(a);
    }).catch(err => {
        res.status(500).send(err.stack)
    });
});


router.get('/:measure/:date', function (req, res, next) {
  var measure = req.params.measure;
  var list_measure = measure.split(",");
  var date = req.params.date;
  var influx = createInflux();
  if (date.split(",").length > 1) {
      var datedate1 = new Date(date.split(",")[0]);
      var time1 = datedate1.getTime() * 1000000;
      var datedate2 = new Date(date.split(",")[1]);
      var time2 = datedate2.getTime() * 1000000;
      influx.query('select * from ' + measure + ' where time> ' + time1 + ' and time<=' + time2).then(result => {
          var a = [];
          for (let i = 0; i < result.length; i++) {
              if (i % list_measure.length == 0) {
                  a.push({});
              }
              //a[a.length - 1][result.groupRows[i % list_measure.length].name] = "test";
              if (result.groupRows[i% list_measure.length].name == 'gpsposition') {
                  a[a.length - 1][result.groupRows[i% list_measure.length].name] = {};
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].value = [result[i% list_measure.length]% list_measure.length.lat, result[i% list_measure.length].lon, result[i% list_measure.length].alt];
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].date = result[i% list_measure.length].date;
              } else if (result.groupRows[i% list_measure.length].name == 'windvelocity') {
                  a[a.length - 1][result.groupRows[i% list_measure.length].name] = {};
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].value = [result[i% list_measure.length].wind_avg, result[i% list_measure.length].wind_min, result[i% list_measure.length].wind_max];
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].date = result[i% list_measure.length].date;
              } else {
                  a[a.length - 1][result.groupRows[i% list_measure.length].name] = {};
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].value = [result[i% list_measure.length].value];
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].date = result[i% list_measure.length].date;
              }
          }
          res.send(JSON.stringify(a));
      }).catch(err => {
          res.status(500).send(err.stack)
      });
  } else if (date.split(",").length == 1) {
      var datedate = new Date(date);
      var time = datedate.getTime() * 1000000;
      influx.query('select * from ' + measure + ' where time>' + time).then(result => {
          var a = [];
          for (let i = 0; i < result.length; i++) {
              if (i % list_measure.length == 0) {
                  a.push({});
              }
              //a[a.length - 1][result.groupRows[i % list_measure.length].name] = "test";
              if (result.groupRows[i% list_measure.length].name == 'gpsposition') {
                  a[a.length - 1][result.groupRows[i% list_measure.length].name] = {};
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].value = [result[i% list_measure.length]% list_measure.length.lat, result[i% list_measure.length].lon, result[i% list_measure.length].alt];
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].date = result[i% list_measure.length].date;
              } else if (result.groupRows[i% list_measure.length].name == 'windvelocity') {
                  a[a.length - 1][result.groupRows[i% list_measure.length].name] = {};
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].value = [result[i% list_measure.length].wind_avg, result[i% list_measure.length].wind_min, result[i% list_measure.length].wind_max];
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].date = result[i% list_measure.length].date;
              } else {
                  a[a.length - 1][result.groupRows[i% list_measure.length].name] = {};
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].value = [result[i% list_measure.length].value];
                  a[a.length - 1][result.groupRows[i% list_measure.length].name].date = result[i% list_measure.length].date;
              }
          }
          res.send(JSON.stringify(a));
      }).catch(err => {
          res.status(500).send(err.stack)
      });
  }
});


module.exports = router;